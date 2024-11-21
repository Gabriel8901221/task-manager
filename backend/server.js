import express from "express";
import publicRoutes from "./routes/public.js"
import auth from "./middlewares/auth.js";
import privateRoutes from "./routes/private.js"
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors())

app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)


app.listen(3000, () => console.log('server runing'))



//8amW02ku1BkLQq4H  mongodb+srv://gabriel:8amW02ku1BkLQq4H@cluster0.sxcb0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0