import * as dotenv from "dotenv";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.resolve(__dirname, "../../../.env");

dotenv.config({ path: dir });

import * as zod from "zod";
const envSchema = zod.object({
  BASE_WEB_URL: zod.string().min(1)
});

export const env = envSchema.parse({
  BASE_WEB_URL: process.env.BASE_WEB_URL
});
