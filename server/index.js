import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import studentRoutes from "./routes/student.js";


const app = express();
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

app.use('/students', studentRoutes);

const PORT = process.env.PORT || 9000;
const CONNECTION_URL = 'mongodb+srv://subho:subhomay@cluster0.b8dirjg.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log(`Server sucessfully hosted at ${PORT}`));
}).catch((err) => console.log(`${err} did not connect`))