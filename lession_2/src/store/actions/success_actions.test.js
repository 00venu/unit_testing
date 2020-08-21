import { correctGuess, CORRECT_GUESS } from "./success";

test("renders false when guess is empty", () => {
  const succesAction = correctGuess();
  expect(succesAction).toEqual({ type: CORRECT_GUESS });
});
