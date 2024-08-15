import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { setup } from "goober";
import React from "react";
import { afterEach, beforeEach } from "vitest";

beforeEach(() => {
  setup(React.createElement);
});

afterEach(() => {
  cleanup();
});
