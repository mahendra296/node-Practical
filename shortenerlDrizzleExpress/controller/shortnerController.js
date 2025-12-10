import crypto from "crypto";
import { loadLinks, saveLinks, deleteLink } from "../model/shortnerModel.js";

export const getShortnerPage = async (req, res) => {
  try {
    console.log("Request recived");
    const links = await loadLinks();

    // Get success or error from query parameters
    const success = req.query.success || null;
    const error = req.query.error || null;

    return res.render("index", { links, host: req.host, success, error });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error.");
  }
};

export const postShortner = async (req, res) => {
  try {
    const { url, shortCode } = req.body;
    console.log(`Url : ${url} and shortCode : ${shortCode}`);

    const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
    const links = await loadLinks();

    if (links[finalShortCode]) {
      // Render the page with error message
      const content = Object.entries(links)
        .map(([shortCode, url]) => {
          const displayUrl =
            url.length > 20 ? url.substring(0, 20) + "..." : url;
          return `<li><a href="/shortCode/${shortCode}" target="_blank">${req.host}/${shortCode}</a> - ${displayUrl}</li>`;
        })
        .join("");
      return res.status(400).render("index", {
        content,
        error: "Short code already present. Please choose another.",
        formData: { url, shortCode },
      });
    }

    links[finalShortCode] = url;
    await saveLinks(links);

    return res.render("index", {
      links,
      success: `URL shortened successfully! Your short code is: ${finalShortCode}`,
      host: req.host,
    });
  } catch (error) {
    console.error(error);
    const links = await loadLinks();
    return res.status(500).render("index", {
      links,
      error: "Internal server error.",
      formData: { url: req.body.url, shortCode: req.body.shortCode },
    });
  }
};

export const redirectToShortLinks = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const links = await loadLinks();

    if (!links[shortCode]) {
      return res.status(404).render("404");
    }

    return res.redirect(links[shortCode]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error.");
  }
};

export const deleteShortLink = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const deleted = await deleteLink(shortCode);

    if (deleted) {
      return res.redirect(
        "/?success=" +
          encodeURIComponent(`Short link "${shortCode}" deleted successfully!`)
      );
    } else {
      return res.redirect(
        "/?error=" + encodeURIComponent("Short code not found.")
      );
    }
  } catch (error) {
    console.error(error);
    return res.redirect(
      "/?error=" + encodeURIComponent("Error deleting short link.")
    );
  }
};
