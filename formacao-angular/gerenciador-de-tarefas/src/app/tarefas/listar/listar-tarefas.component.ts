import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa} from '../shared'
@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {
tarefas: Tarefa[]
  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos()
    this.tarefas = [
      new Tarefa(1,"1", false),
      new Tarefa(2,"2", true),
    ]
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos()
  }

  remover($event: any, tarefa: Tarefa){}

}
