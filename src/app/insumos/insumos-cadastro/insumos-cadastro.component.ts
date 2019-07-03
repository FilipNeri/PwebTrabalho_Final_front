import { Insumo } from './../model';
import { InsumosService } from '../insumos.service';

import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insumos-cadastro',
  templateUrl: './insumos-cadastro.component.html',
  styleUrls: ['./insumos-cadastro.component.css']
})
export class InsumosCadastroComponent implements OnInit {

  insumo = new Insumo();

  constructor(
    private service: InsumosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  inserir(form: FormControl){
    this.service.adicionar(this.insumo).then(()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Insumo'+
      this.insumo.nome+' cadastrada'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoInsumo = this.rota.snapshot.params['id'];
    if(codigoInsumo){
      this.carregarInsumo(codigoInsumo);
    }

  }
  carregarInsumo(id:number){
    this.service.buscarPorCodigo(id)
    .then((data)=>{
      this.insumo =data;
    }
    );
  }

  alterar(form: FormControl){
    this.service.alterar(this.insumo)
    .then(()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Insumo '+this.insumo.nome+' alterada'});
      form.reset();
    });
  }

  salvar(form: FormControl){
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.insumo.id);
  }


}
