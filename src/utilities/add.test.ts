import addFunction from "./add";
import { describe, it, expect } from "vitest";

addFunction(5, 6);

describe("add", () => {
  it("adds two numbers", () => {
    expect(addFunction(5, 6)).toBe(11);
  });
});
