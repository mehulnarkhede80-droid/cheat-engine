import { existsSync, appendFileSync } from "node:fs";

// Generate a realistic User-Agent string without external dependencies
const userAgents = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0"
];

const ua = userAgents[Math.floor(Math.random() * userAgents.length)];

if (existsSync(process.env.GITHUB_OUTPUT)) {
  appendFileSync(process.env.GITHUB_OUTPUT, `\nua=${ua}`);
} else {
  console.log(`ua=${ua}`);
}
