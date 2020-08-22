import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProp } from "./test/utilityFunctions";

import GuessWords from "./GuessWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "Train", letterMatchCount: 3 }],
};

const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessWords {...setupProps} />);
};

test("renders without error", () => {
  checkProp(GuessWords, defaultProps);
});

describe("if no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ guessedWords: [] });
  });
  test("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instructions", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if guessed words", () => {
  const guessedWords = [
    { guessedWord: "Train", letterMatchCount: 3 },
    { guessedWord: "Agile", letterMatchCount: 2 },
    { guessedWord: "Tupai", letterMatchCount: 1 },
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ guessedWords: guessedWords });
  });
  test("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders guessed words section", () => {
    const guessedSection = findByTestAttr(wrapper, "guessed-words");
    expect(guessedSection.length).toBe(1);
  });
  test("renders guessed words", () => {
    const guessedWords = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWords.length).toBe(guessedWords.length);
  });
});
