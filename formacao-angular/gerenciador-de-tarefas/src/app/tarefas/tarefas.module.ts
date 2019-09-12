import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule} from '@angular/forms'

import { TarefaService} from './shared';
import { ListarTarefasComponent } from './listar';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar/editar-tarefa.component'
@NgModule({
  declarations: [ListarTarefasComponent, CadastrarTarefasComponent, EditarTarefaComponent],
  imports: [
    CommonModule,RouterModule,FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
