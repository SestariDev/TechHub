import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('Projects')

class Project{
@PrimaryGeneratedColumn('increment')
id: number

@Column('varchar',  {length: 100, nullable: false} )
name: string

@Column('varchar', {length: 100, nullable: false})
url: string

@Column('date', {nullable: false})
date: Date


@Column('varchar', {length: 30, nullable: false})
status: string
}


export default Project
