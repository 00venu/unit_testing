import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";
import { findByTestAttr, storeFactory } from "./test/utilityFunctions";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("renders", () => {
  describe("word not has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("renders component successfully", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders input properly", () => {
      const input = findByTestAttr(wrapper, "input-box");
      expect(input.length).toBe(1);
    });
    test("renders submit button properly", () => {
      const button = findByTestAttr(wrapper, "button-submit");
      expect(button.length).toBe(1);
    });
  });

  describe("word has been guessed successfully", () => {
    test("renders component successfully", () => {});
    test("should not render input", () => {});
    test("should not render submit button", () => {});
  });
});
