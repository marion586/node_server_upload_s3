// config/index.js

import { config as loadConfig } from "dotenv";

loadConfig({
  path: ".env.local",
});
const config = {
  PORT: parseInt(process.env.PORT, 10) || 3010,
  MONGO_URL: process.env.MONGO_URL,
  AWS: {
    AccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    AWSSecretKey: process.env.AWS_SECRET_KEY,
    BucketName: process.env.AWS_S3_BUCKET_NAME,
    Region: "us-east-1",
  },
};
export default config;
