import React from "react";
import Congrats from "./congrats";
import { shallow } from "enzyme";
import { findByTestAttr, checkProp } from "./test/utilityFunctions";

const setUp = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {
  const wrapper = setUp({ success: false });
  const congratsComponent = findByTestAttr(wrapper, "component-congrats");
  expect(congratsComponent.length).toBe(1);
});

test("renders no text when props received flase", () => {
  const wrapper = setUp({ success: false });
  const congratsComponent = findByTestAttr(wrapper, "component-congrats");
  expect(congratsComponent.text()).toBe("");
});

test("renders congrats message when props received true", () => {
  const wrapper = setUp({ success: true });
  const congratsMessage = findByTestAttr(wrapper, "congrats-message");
  expect(congratsMessage.text().length).not.toBe(0);
});

test("check prop types testing", () => {
  const expectedProps = { success: false };
  const propErr = checkProp(Congrats, expectedProps);

  expect(propErr).toBeUndefined();
});
