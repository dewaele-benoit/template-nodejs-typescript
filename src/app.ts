import express, { NextFunction, Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";

import logger from "morgan";

import mathsRouter from "./routes/maths";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/maths", mathsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return next({ statusCode: 404, message: "Not Found" });
});

// error handler
app.use(function (
  err: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res.status(err.status || err.statusCode || 500).json({message: err.message});
});

module.exports = app;
