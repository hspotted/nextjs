import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import HomePage from "../../src/pages";

test("Should have heading", () => {
  render(<HomePage />);
  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", { level: 1, name: /Home Page/i })
  ).toBeDefined();
});
