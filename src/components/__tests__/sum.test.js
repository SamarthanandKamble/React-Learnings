import { sum } from "../sum";

test("should return the sum of the 2 arguments", () => {
  let res = sum(5, 3);

  // Assertion
  expect(res).toBe(8);
});
