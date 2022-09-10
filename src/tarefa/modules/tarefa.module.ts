import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm";
import { TarefaController } from "../controllers/tarefa.controller";
import { Tarefa } from "../entities/tarefa.entity";
import { Tarefaservice } from "../service/tarefa.service";

@Module({
    imports: [TypeOrmModule.forFeature([Tarefa])],
    providers: [Tarefaservice],
    controllers: [TarefaController],
    exports: [TypeOrmModule]
})
export class TarefaModule {}