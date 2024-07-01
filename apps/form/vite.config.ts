import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3001 },
  plugins: [react()],
  test: { globals: true, environment: "happy-dom" },
});
