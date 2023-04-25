import { add } from "../services/maths.service";
import { NextFunction, Request, Response } from "express";

export const addController = (
  res: Response,
  req: Request,
  next: NextFunction
) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  if (isNaN(a) || isNaN(b)) {
    return next({
      statusCode: 400,
      message: `'${req.params.a}' or '${req.params.b}' is not a number.`,
    });
  }
  const resultOfAddition = add(a, b);
  return res.status(200).json({ a, b, result: resultOfAddition });
};
