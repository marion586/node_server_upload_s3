import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import config from "../config/index.js";

console.log(config);
const s3client = new S3Client({
  region: config.AWS.Region,
  credentials: {
    accessKeyId: config.AWS.AccessKeyId,
    secretAccessKey: config.AWS.AWSSecretKey,
  },
});

const BUCKET_NAME = config.AWS.BucketName;
export async function createPresignedPost(key, contentType) {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  });

  const fileLink = `https://${BUCKET_NAME}.s3.${config.AWS.Region}.amazonaws.com/${key}`;

  const signedUrl = await getSignedUrl(s3client, command, {
    expiresIn: 5 * 60,
  });
  return { signedUrl, fileLink };
}
