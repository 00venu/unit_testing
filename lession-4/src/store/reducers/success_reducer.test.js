import SuccessReducer from "./success";
import { CORRECT_GUESS } from "../actions/success";

describe("SuccesReducer", () => {
  test("test false value", () => {
    const succesReducer = SuccessReducer(undefined, {});
    expect(succesReducer).toBe(false);
  });

  test("test true value", () => {
    const succesReducer = SuccessReducer(undefined, { type: CORRECT_GUESS });
    expect(succesReducer).toBe(true);
  });
});
