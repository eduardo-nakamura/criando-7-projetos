import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule} from '@angular/forms'

import { TarefaService} from './shared';
import { ListarTarefasComponent } from './listar';
import { CadastrarTarefasComponent } from './cadastrar-tarefas/cadastrar-tarefas.component'
@NgModule({
  declarations: [ListarTarefasComponent, CadastrarTarefasComponent],
  imports: [
    CommonModule,RouterModule,FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
