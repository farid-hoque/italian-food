/**
 * all modules are imports,
 * configure all modules,
 */

import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import expressEjsLayouts from "express-ejs-layouts";
import { join, resolve } from "path";
import contentrouter from "./routes/main.js"

/**dotenv */
dotenv.config();
/**port */
const PORT = process.env.PORT || 3030;
/**app */
const app = express();

/**middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.use(express.static("public"))

/**routes- */
app.use(contentrouter);


/**listen */
app.listen(PORT, () => {
    console.log(`server is running at ${PORT} port`.bgYellow.green);
})