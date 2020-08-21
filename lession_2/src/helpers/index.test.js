import { getLetterMatchCount } from "./";

describe("Get letter match count", () => {
  const secretWord = "party";
  test("renders function correctly with no matching words", () => {
    const getCount = getLetterMatchCount(secretWord, "bones");
    expect(getCount).toBe(0);
  });
  test("renders 3 matching letters", () => {
    const getCount = getLetterMatchCount(secretWord, "train");
    expect(getCount).toBe(3);
  });
  test("avoid duplicate letters", () => {
    const getCount = getLetterMatchCount(secretWord, "parka");
    expect(getCount).toBe(3);
  });
});
