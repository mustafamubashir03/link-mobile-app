import { toNodeHandler } from "better-auth/node";
import express from "express"
import { auth } from "./lib/auth";

const app = express()
app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "hello world" })
})

app.listen(3000, () => {
    console.log("Server has started on port 3000")
})

