import { add } from "../maths.service";

describe("Maths service", () => {
  describe("add", () => {
    it("should return 7", () => {
      const actualResult = add(7, 2);
      const expectedResult: number = 9;
      expect(actualResult).toEqual(expectedResult);
    });
  });
});
