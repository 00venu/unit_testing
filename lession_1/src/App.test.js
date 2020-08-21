import React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("render test without error", () => {
  const wrapper = setUp();
  const appComponent = findByTestAttr(wrapper, "component-app"); //wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
test("render increment button", () => {
  const wrapper = setUp();
  const button = findByTestAttr(wrapper, "increment-button"); //wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});
test("render counter display", () => {
  const wrapper = setUp();
  const counterDisplay = findByTestAttr(wrapper, "counter-display"); //wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});
test("render initial state value 0", () => {
  const wrapper = setUp();
  const initialStateVal = wrapper.state("counter");
  expect(initialStateVal).toBe(0);
});
test("render click button increment counter display", () => {
  const counter = 0;
  const wrapper = setUp(null, { counter: counter });

  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");

  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);
});
