import express, { Application, Request, Response } from "express"
import { ContentRouter, ImageRouter } from "./router"

const app: Application = express();


app.use("/images", ImageRouter)
app.use("/content", ContentRouter)

app.get("/", (req: Request, res: Response) =>  {
    res.send("Renaissance Athletics API")
})


app.listen(8000, () => console.log("Server Is Running..."))