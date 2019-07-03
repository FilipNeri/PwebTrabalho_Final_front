import { InsumosCadastroComponent } from './insumos-cadastro/insumos-cadastro.component';
import { InsumosPesquisaComponent } from './insumos-pesquisa/insumos-pesquisa.component';
import { InsumosService } from './insumos.service';


import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {MessageService } from 'primeng/api';
import {FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';


@NgModule({
  declarations:[
    InsumosCadastroComponent,
    InsumosPesquisaComponent
  ],
  imports: [

    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
    InsumosCadastroComponent,
    InsumosPesquisaComponent
  ],
 providers:[
   InsumosService,
   MessageService
  ]



})
export class InsumosModule { }
