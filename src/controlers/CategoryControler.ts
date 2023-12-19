import { Request, Response, Router } from "express";
import CategoryRepository from "../repositorys/CategoryRepository";

const categoryRouter = Router()

categoryRouter.get('/',async (resq: Request,resp: Response): Promise<Response> =>{
  const category = await CategoryRepository.getCategory();
  return(
    resp.status(200).json(category)
  )
}
) 

export default categoryRouter