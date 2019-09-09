import React from "react";
import Fibonacci from "./App";
import { shallow } from "enzyme";

test("Renders component without crashing", () => {
  shallow(<Fibonacci />);
});

describe("Fibonacci sequence tests", () => {
  it("Should return 0, 1 when user enters 1 as an input", () => {
    const wrapper = shallow(<Fibonacci />);
    const instance = wrapper.instance();

    expect(wrapper.state("members")).toStrictEqual([]);
    instance.calculateFibonacci(1);
    expect(wrapper.state("members")).toStrictEqual([0, 1]);
  });

  it("Should return 0, 1, 1, 2 when user enters 3 as an input", () => {
    const wrapper = shallow(<Fibonacci />);
    const instance = wrapper.instance();

    expect(wrapper.state("members")).toStrictEqual([]);
    instance.calculateFibonacci(3);
    expect(wrapper.state("members")).toStrictEqual([0, 1, 1, 2]);
  });

  it("Should return nothing when input is invalid (not a number)", () => {
    const wrapper = shallow(<Fibonacci />);
    const instance = wrapper.instance();
    window.alert = () => {};

    expect(wrapper.state("members")).toStrictEqual([]);
    instance.calculateFibonacci("string");
    expect(wrapper.state("members")).toStrictEqual([]);
  });

  it("Should return nothing when input is invalid (empty string/no input)", () => {
    const wrapper = shallow(<Fibonacci />);
    const instance = wrapper.instance();
    window.alert = () => {};

    expect(wrapper.state("members")).toStrictEqual([]);
    instance.calculateFibonacci("");
    expect(wrapper.state("members")).toStrictEqual([]);
  });

  it("should return nothing when input is invalid (not an integer input)", () => {
    const wrapper = shallow(<Fibonacci />);
    const instance = wrapper.instance();
    window.alert = () => {};

    expect(wrapper.state("members")).toStrictEqual([]);
    instance.calculateFibonacci("11.123");
    expect(wrapper.state("members")).toStrictEqual([]);
  });

  it("should return nothing when input is invalid (0 as input)", () => {
    const wrapper = shallow(<Fibonacci />);
    const instance = wrapper.instance();
    window.alert = () => {};

    expect(wrapper.state("members")).toStrictEqual([]);
    instance.calculateFibonacci(0);
    expect(wrapper.state("members")).toStrictEqual([]);
  });
});
