import { Pensamento } from './pensamento';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({//vai dizer pro angular que essa e uma classe injetavel pode ser utilizada em outros componentes outras classes através de um metodo chamado injeção de dependências
  providedIn: 'root'
  //metadado providein esse nome vem do nome provedor fornecedor esse serviço pode ser disponibilizado para toda aplicação por que o valor dele está como root
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';
//tenho acesso a todos os metodos dessa classe httpclient
  constructor(private http: HttpClient) { }

  listar(pagina:number, filtro:string, favoritos: boolean): Observable<Pensamento[]>{

    const itensPorPagina = 6;
    let params = new HttpParams()//passar parametros
    .set("_page", pagina)
    .set("_limit", itensPorPagina);//metodo set serve para substituir um valor passamos o nome do parametro e o valor
    //imutavel toda operação de mudança vai retornar uma nova instancia

    if(filtro.trim().length > 2){
      params = params.set("q", filtro);//q representa o filtro
    }//trim remove os espaços vazio da string

    if(favoritos){
      params = params.set("favorito", true);
    }

    return this.http.get<Pensamento[]>(this.API, { params })//quando temos a var com o mesmo nome da chave podemos omitir
  }



  criar(pensamento:Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento);
  }

    editar(pensamento:Pensamento): Observable<Pensamento>{
      const url = `${this.API}/${pensamento.id}`;
      return this.http.put<Pensamento>(url, pensamento);//passando a url e o pensamento que vai ser editado
    }

    mudarFavorito(pensamento: Pensamento):Observable<Pensamento> {
      pensamento.favorito = !pensamento.favorito;//se for true vai ser false e false vai ser true
      //agora usar o metodo http para conseguir editar e atualizar o pensamento
      return this.editar(pensamento);
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

//É possível refatorar criando uma nova instância da classe HttpParams e utilizando o método set, para substituir o valor dos parâmetros ‘pagina’ e ‘itensPorPagina’, enviando o nome do parâmetro e o seu valor. Na requisição, é passado um objeto com todos os parâmetros.
