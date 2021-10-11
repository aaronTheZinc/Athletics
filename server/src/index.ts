import express, { Application } from "express"
import { ImageRouter } from "./router"

const app: Application = express();


app.use("/images", ImageRouter)


app.listen(3000, () => console.log("Server Is Running..."))