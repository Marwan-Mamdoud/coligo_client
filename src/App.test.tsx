import React from "react";

test("app component exists", () => {
  const App = require("./App").default;
  expect(typeof App).toBe("function");
});
