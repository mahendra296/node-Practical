import { Router } from "express";
import {
  getShortnerPage,
  postShortner,
  redirectToShortLinks,
  deleteShortLink,
  getHello,
} from "../controller/shortnerControllerMySQL.js";

const router = Router();

router.get("/report", (req, res) => {
  res.render("report");
});

router.get("/", getShortnerPage);

router.post("/", postShortner);

router.get("/shortCode/:shortCode", redirectToShortLinks);

router.post("/delete/:shortCode", deleteShortLink);

router.get("/get/hello", getHello);

export const shortenRouter = router;
