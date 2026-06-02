import express from "express"

const app = express()


app.get("/", (req, res) => {
    res.json({ msg: "hello world" })
})

app.listen(3000, () => {
    console.log("Server has started on port 3000")
})

