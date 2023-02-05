import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const vitestConfig = {
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
};

export default defineConfig(vitestConfig);
