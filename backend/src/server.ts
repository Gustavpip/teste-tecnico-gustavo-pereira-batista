import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

import { config } from "dotenv";
import { router } from "./routes/routes";

config();

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true,
};

app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 20 * 60 * 1000,
  max: 100,
  message:
    "Número máximo de requisições atingido. Tente novamente em 20 minutos.",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// app.use(helmet()); Tarefa: Usar em prod, pois ele aceita apenas https

app.use(express.json());

app.use(router);

export default app;
