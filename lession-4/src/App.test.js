import React from "react";
import App, { UnConnectedApp } from "./App";
import { shallow } from "enzyme";

test("lifecycle method testing", () => {
  const getSecrectWordMock = jest.fn();

  const wrapper = shallow(
    <UnConnectedApp getSecrectWord={getSecrectWordMock} />
  );
  wrapper.instance().componentDidMount();
  const callCount = getSecrectWordMock.mock.calls.length;
  expect(callCount).toBe(1);
});
