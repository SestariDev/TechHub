import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('Category')

class Category{
@PrimaryGeneratedColumn('increment')
id: number

@Column('varchar',  {nullable: false} )
name: string
}

export default Category
