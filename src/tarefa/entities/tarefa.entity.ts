import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_tarefa'})
export class Tarefa {

    @PrimaryGeneratedColumn()
    id: number


    @IsNotEmpty()
    @MaxLength(100)
    @Column({nullable: false, length: 100}) 
    nome: string


    @IsNotEmpty()
    @MaxLength(500)
    @Column({nullable: false, length: 500}) 
    descricao: string


    @IsNotEmpty()
    @MaxLength(100)
    @Column({nullable: false, length: 100}) 
    responsalvel: string


    @Column() 
    data: Date

    @Column() 
    status: boolean
}