import { InsumosService } from '../insumos.service';

import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-insumos-pesquisa',
  templateUrl: './insumos-pesquisa.component.html',
  styleUrls: ['./insumos-pesquisa.component.css']
})

export class InsumosPesquisaComponent implements OnInit {

  insumos = [];
  nomeBusca:string;

  constructor(
   private service: InsumosService,
   private msg: MessageService,
   private conf: ConfirmationService
  ){}

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.insumos=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();

  }

  confirmarExclusao(insumo:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+insumo.nome+'?',
      accept: () => {
        this.excluir(insumo);
      }
    });
  }

  excluir(insumo: any){
    this.service.excluir(insumo.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Exclusão', detail:'Insumo '+insumo.nome+' excluída'});
    });
  }


}
