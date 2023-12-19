
import { AppDataSource } from "../database/data-source";
import Category from "../entitys/Categorys";
import Icategory from "../interfaces/Icategory";

const categoryRepository = AppDataSource.getRepository(Category)

const getCategory = (): Promise<Icategory[]> => {
  return(
    categoryRepository.find()
  )
}

export default { getCategory };