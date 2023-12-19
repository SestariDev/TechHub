import Project from "../../../TechHub/src/entitys/Project";
import { AppDataSource } from "../database/data-source";
import Iproject from "../../../TechHub/src/interfaces/Iproject";

const UseRepository = AppDataSource.getRepository(Project)

const getProjects = (): Promise<Iproject[]> => {
  return(
    UseRepository.find()
  )
}


const createProject = async (projectData: Partial<Iproject>): Promise<Iproject> => {
 try{
  const newProject = UseRepository.create(projectData);
  return UseRepository.save(newProject);}
catch(error){
  console.log(error)
}
};

export default {getProjects, createProject}