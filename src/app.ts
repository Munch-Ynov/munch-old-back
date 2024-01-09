import express, { NextFunction, Response,
Request } from "express";
import createError from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import { UserRouter } from "./routes/UserRouter";
import { RestaurantRouter } from "./routes/RestaurantRouter";
import { ReservationRouter } from "./routes/ReservationRouter";

const app = express();

const corsOptions = {
    origin : "*",
    credentials : true,
    optionSuccessStatus : 200
}
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));




app.use("/restaurants", RestaurantRouter);
app.use("/users", UserRouter);
app.use("/reservations", ReservationRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json({ err });
  });

export default app;
