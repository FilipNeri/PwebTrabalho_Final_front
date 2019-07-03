import { Insumo } from './../../insumos/model';
import { Produto } from './../model';

import { InsumosService } from './../../insumos/insumos.service';
import { ProdutosService } from './../produtos.service';


import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

  produto = new Produto();
  insumos: Insumo[];

  constructor(
    private service: ProdutosService,
    private insumoService:InsumosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarInsumos();
  }

  pesquisarInsumos(){
    this.insumoService.pesquisar("")

    .then((dados)=>{
      this.insumos=dados;
    });
  }

  salvar(form: FormControl){
    this.service.adicionar(this.produto)
    .then(()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Produto '+this.produto.nome+' cadastrado'});
      form.reset();

    });

  }

}
