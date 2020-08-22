import { correctGuess, CORRECT_GUESS, getSecrectWord } from "./success";
import moxios from "moxios";
import { storeFactory } from "./../../test/utilityFunctions";

/*test("renders false when guess is empty", () => {
  const succesAction = correctGuess();
  expect(succesAction).toEqual({ type: CORRECT_GUESS });
});*/
describe("test axios", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("test moxios", () => {
    const secrectWord = "party";
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secrectWord,
      });
    });

    return store.dispatch(getSecrectWord()).then((response) => {
      const newState = store.getState();
      expect(newState.secrectWord).toBe(secrectWord);
    });
  });
});
