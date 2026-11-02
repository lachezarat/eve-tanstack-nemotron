import { defineAgent } from "eve";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const coreweave = createOpenAICompatible({
  name: "coreweave",
  baseURL: process.env.COREWEAVE_BASE_URL ?? "https://api.inference.wandb.ai/v1",
  apiKey: process.env.COREWEAVE_API_KEY,
  includeUsage: true,
});

export default defineAgent({
  limits: {
    maxInputTokensPerSession: 300_000,
  },
  modelContextWindowTokens: 128_000,
  model: coreweave("nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B"),
});
