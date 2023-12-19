import { Request, Response, Router } from "express";
import UserRepository from '../repositorys/UserRepository'
import Iproject from "../interfaces/Iproject";

const userRouter = Router()

userRouter.get('/',async (resq: Request,resp: Response): Promise<Response> =>{
  const users = await UserRepository.getProjects();
  return(
    resp.status(200).json(users)
  )
}
)

userRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
  const projectData: Partial<Iproject> = req.body;
  try {
    console.log(req)
    const createdProject = await UserRepository.createProject(projectData);
    return res.status(201).json(createdProject);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
});

export default userRouter