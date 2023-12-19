
import { AppDataSource } from "../database/data-source";
import Category from "../../../TechHub/src/entitys/Categorys";
import Icategory from "../../../TechHub/src/interfaces/Icategory";

const categoryRepository = AppDataSource.getRepository(Category)

const getCategory = (): Promise<Icategory[]> => {
  return(
    categoryRepository.find()
  )
}

export default { getCategory };