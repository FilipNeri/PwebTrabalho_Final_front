import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { InsumosCadastroComponent } from './insumos/insumos-cadastro/insumos-cadastro.component';
import { InsumosPesquisaComponent } from './insumos/insumos-pesquisa/insumos-pesquisa.component';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';
import { InsumosModule } from './insumos/insumos.module';
import { ProdutosModule } from './produtos/produtos.module';

import { ButtonModule } from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ConfirmationService } from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';

import {Routes, RouterModule} from '@angular/router';

const rotas: Routes = [
  {path: '', redirectTo:'insumos', pathMatch:'full'},
  {path: 'produtos', component:ProdutosCadastroComponent},
  {path: 'insumos', component: InsumosPesquisaComponent},
  {path: 'insumos/novo', component: InsumosCadastroComponent},
  {path: 'insumos/:id', component: InsumosCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InsumosModule,
    ProdutosModule,
    HttpClientModule,
    SidebarModule,
    ButtonModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
