import { Insumo } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {

  insumosURL = 'http://localhost:8080/insumos';
  urlFiltro;

  constructor(private http: HttpClient) {

  }



  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/insumos/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/insumos';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.insumosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(insumo: Insumo): Promise<any>{
    return this.http.post(this.insumosURL, insumo)
    .toPromise();
  }

  alterar(insumo: Insumo): Promise<any>{
    return this.http.put(this.insumosURL+'/'+insumo.id, insumo)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Insumo> {
    return this.http.get<Insumo>(this.insumosURL+'/'+codigo).toPromise();
  }




}
