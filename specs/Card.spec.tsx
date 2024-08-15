import React from "react";
import { render, screen } from "@testing-library/react";
import { setup } from "goober";
import { describe, expect, it } from "vitest";
import { Card } from "../src/Card";

describe("Card", () => {
  it("renders", () => {
    setup(React.createElement);
    const name = "Name";
    const description = "This is my description";

    render(<Card name={name} description={description} />);
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
