import { Request, Response, Router } from "express";
import categoryRepository from "../../../back-end/src/repositorys/CategoryRepository";

const categoryRouter = Router()

categoryRouter.get('/',async (resq: Request,resp: Response): Promise<Response> =>{
  const category = await categoryRepository.getCategory();
  return(
    resp.status(200).json(category)
  )
}
) 

export default categoryRouter