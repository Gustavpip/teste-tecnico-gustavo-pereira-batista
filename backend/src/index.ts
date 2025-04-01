import app from "./server";

import { config } from "dotenv";

config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Rodando na porta ".concat(String(PORT))));
