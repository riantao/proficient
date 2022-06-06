import express, { urlencoded, json } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

import * as routers from "./routes";
import makeCallRouter from "./makeCallRouter";

const app = express();
const callRouter = makeCallRouter(app);

app.enable("trust proxy");
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(json({ limit: "1mb" }));
app.use(urlencoded({ extended: false }));
// app.use(enforceHttps);

Object.values(routers).forEach(callRouter);

export default app;