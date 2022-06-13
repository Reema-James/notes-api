import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import groupRoutes from "./routes/groups.js";

const app =express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", groupRoutes);
app.get ('/getData', (req,res) => {

    res.json({
        "statusCode":200,
        "statusMessage":"SUCCESS"
    })
});
app.all ("*", (req,res) => res.send ("That route doesn't exist"));

app.listen(port, () =>
console.log(`Server is listening on port: http://localhost:${port}`)
);