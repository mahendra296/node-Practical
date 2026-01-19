import crypto from "crypto";
import {
  loadLinks,
  saveLinks,
  deleteLink,
  getLinkByShortCode,
} from "../model/shortnerModelMySQL.js";

import ApiResponse from "../utils/api-response.js";

export const getShortnerPage = async (req, res) => {
  try {
    console.log("Request recived in DB");
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
    const link = await getLinkByShortCode(shortCode);

    if (link) {
      const links = await loadLinks();
      return res.status(400).render("index", {
        links,
        error: "Short code already present. Please choose another.",
        formData: { url, shortCode },
        host: req.host,
      });
    }

    await saveLinks({ url, finalShortCode });
    const links = await loadLinks();

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
    const link = await getLinkByShortCode(shortCode);

    if (!link) {
      return res.status(404).render("404");
    }

    return res.redirect(link.url);
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

export const getHello = async (req, res) => {
  try {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];
    throw new Error("Hello error");
    res.status(200).json(ApiResponse.success(users, "Users retrieved successfully"));
  } catch (error) {
    console.error(error);
    throw new Error("Hello error");
  }
};
