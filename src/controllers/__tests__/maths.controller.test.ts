import { addController } from "../maths.controller";
import { createRequest, createResponse } from "node-mocks-http";

describe("Maths controller", () => {
  describe("addController", () => {
    it("should return 9", async () => {
      const mockReq = createRequest({
        method: "GET",
        url: "/maths/add/2/7",
        params: {
          a: "2",
          b: "7",
        },
      });
      const mockRes = createResponse();
      const mockNext = jest.fn();
      await addController(mockRes, mockReq, mockNext);
      expect(mockRes.statusCode).toEqual(200);
      expect(mockRes._getJSONData()).toEqual({ a: 2, b: 7, result: 9 });
    });
  });
});
