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
    const createdProject = await UserRepository.createProject(projectData);
    return res.status(201).json(createdProject);
  } catch (error) {
    console.error('Error creating project:', error);
    return res.status(500).send('Internal Server Error');
  }
});

userRouter.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
  const projectId: number = parseInt(req.params.id, 10);

  try {
    const deletedProject = await UserRepository.deleteProject(projectId);
    return res.status(200).json(deletedProject);
  } catch (error) {
    console.error('Error deleting project:', error);
    return res.status(500).send('Internal Server Error');
  }
});

userRouter.put('/:id', async (req: Request, res: Response): Promise<Response> => {
  const projectId: number = parseInt(req.params.id, 10);
  const newData: Partial<Iproject> = req.body;

  try {
    const updatedProject = await UserRepository.updateProject(projectId, newData);
    return res.status(200).json(updatedProject);
  } catch (error) {
    console.error('Error updating project:', error);
    return res.status(500).send('Internal Server Error');
  }
});


export default userRouter