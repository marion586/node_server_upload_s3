// routers/s3.js

import express from "express";
import { createPresignedPost } from "../utils/s3.js";

const s3Router = express.Router();
s3Router.post("/signed_url", async (req, res) => {
  try {
    let { key, content_type } = req.body;

    console.log(key, content_type);
    key = "public/" + key;
    const data = await createPresignedPost(key, content_type);
    return res.send({
      status: "success",
      data,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      status: "error",
      message: err.message,
    });
  }
});
export default s3Router;
