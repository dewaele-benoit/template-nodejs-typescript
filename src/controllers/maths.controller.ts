import { add } from "../services/maths.service";
import {Application, NextFunction, Request, Response} from "express";

export const addController = (
  res: Response,
  req: Request,
  next: NextFunction
) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  if (!isNaN(a) || !isNaN(b)) {
    next({ statusCode: 400, message: "'a' or 'b' is not a number." });
  }
  const resultOfAddition = add(a, b);
  res.status(200).json({ a, b, result: resultOfAddition });
};
