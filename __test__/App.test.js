import react from "react";
import renderer from "react-test-renderer";

import App from "../App";

describe("<App/>", () => {
  it("has 2 child", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});
