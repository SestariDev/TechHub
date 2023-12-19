import Project from "../entitys/Project"
import { AppDataSource } from "../database/data-source";
import Iproject from "../interfaces/Iproject";

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

const deleteProject = async (projectId: number): Promise<Iproject | undefined> => {
  try {
    const projectToDelete = await UseRepository.findOne({ where: { id: projectId } });

    if (!projectToDelete) {
      throw new Error('Project not found');
    }

    await UseRepository.remove(projectToDelete);

    return projectToDelete;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

const updateProject = async (projectId: number, newData: Partial<Iproject>): Promise<Iproject | undefined> => {
  try {
    const projectToUpdate = await UseRepository.findOne({ where: { id: projectId } });

    if (!projectToUpdate) {
      throw new Error('Project not found');
    }

    // Atualiza as propriedades do projeto com os novos dados
    UseRepository.merge(projectToUpdate, newData);

    // Salva as alterações no banco de dados
    const updatedProject = await UseRepository.save(projectToUpdate);

    return updatedProject;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

export default {getProjects, createProject, deleteProject, updateProject}