import { Router } from "express";
import userRouter from "../controlers/UserControler";
import categoryRouter from "../controlers/CategoryControler";

const routers = Router()

routers.use('/projects', userRouter)
routers.use('/categorys', categoryRouter)

export default routers