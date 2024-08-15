import path from "path";

import react from "@vitejs/plugin-react-swc";
import { defineProject } from "vitest/config";

export default defineProject({
  plugins: [react()],
  name: "test",
  test: {
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    environment: "jsdom",
  },
});
