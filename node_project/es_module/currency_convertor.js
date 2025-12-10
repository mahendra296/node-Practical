import https from "https";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const convertCurrency = (amount, rate) => {
  return amount * rate;
};

const getCurrencyInfo = () => {
  const apiKey = "7d299dfeb319e3296d1f3857";
  const baseURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  https.get(baseURL, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      const currencyRates = JSON.parse(data).conversion_rates;
      console.log(`Here is a currency details : `, currencyRates);
      rl.question("Enter the amount in USD : ", (amount) => {
        rl.question(
          "Enter the target curency (e.g., INR, EUR) : ",
          (currency) => {
            const rate = currencyRates[currency.toUpperCase()];
            if (rate) {
              console.log(
                `${amount} USD is approximately ${convertCurrency(
                  amount,
                  rate
                )} ${currency}`
              );
            } else {
              console.log("Invalid currency code");
            }
            rl.close();
          }
        );
      });
    });
    response.on("error", (err) => {
      console.error("Error while fetching the jock", err.message);
    });
  });
};

getCurrencyInfo();
