import { Pensamento } from './pensamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({//vai dizer pro angular que essa e uma classe injetavel pode ser utilizada em outros componentes outras classes através de um metodo chamado injeção de dependências
  providedIn: 'root'
  //metadado providein esse nome vem do nome provedor fornecedor esse serviço pode ser disponibilizado para toda aplicação por que o valor dele está como root
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';
//tenho acesso a todos os metodos dessa classe httpclient
  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    //array de pensamentos porque vamos receber uma lista
    return this.http.get<Pensamento[]>(this.API)//me da a lista de pensamentos da api
  }

  criar(pensamento:Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento);
  }

    editar(pensamento:Pensamento): Observable<Pensamento>{
      const url = `${this.API}/${pensamento.id}`;
      return this.http.put<Pensamento>(url, pensamento);
    }

  excluir(id:number):Observable<Pensamento>{
    const url = `${this.API}/${id}`;//passar a url e vou passar /id que e o id do pensamento
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id:number):Observable<Pensamento>{
    const url = `${this.API}/${id}`;//passar a url e vou passar /id que e o id do pensamento
    return this.http.get<Pensamento>(url);//quero buscar 1 pensamento
  }




}

//dependencia da classe httpClient viesse até o pensamento service
//a injeção de dependências e um padrao de projeto onde uma classe vai solicitar dependências externas ao inves cria-las
//private esse atributo e automaticamente declarado como atributo da classe

//observable funciona de forma parecida como as promisses podem ser uma transferencia de dados continua eles podem emitir dados varias vezes durante sua existencia
