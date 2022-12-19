import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  //para receber informações de fora do componente pai listarpensamentos
  //esse @input essa propriedade pensamento vai receber informações do componente pai
    @Input() pensamento: Pensamento = {//atributo
        id: 0,
        conteudo: 'I love angular',
        autoria: 'nathan souza',
        modelo: 'modelo3',
        favorito:false
    }

    @Input() listaFavoritos:Pensamento[] = []; //nome da propriedade que eu quero que receba info de fora

   constructor(private service: PensamentoService){}

   ngOnInit(): void {

   }

   larguraPensamento(): string {
      if(this.pensamento.conteudo.length >= 256){
        return 'pensamento-g'
      }
        return 'pensamento-p'
   }

   mudarIconeFavorito(): string{
    if(this.pensamento.favorito === false){
      return 'inativo';
    }
      return 'ativo'
   }

   atualizarFavoritos(){
      //para consumir o metodo do service preciso injetar o service no construtor
      this.service.mudarFavorito(this.pensamento).subscribe(() =>{
        this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1); //remover aquele card de pensamento que foi desfavoritado
      });
   }
}
//splice modifica o array original removendo o pensamento passo o indice do elemento a partir do qual quero remover e a quantidade de elementos


/**
 * No componente filho, é necessário decorar a propriedade que se deseja receber os dados do componente pai com o decorator @Input. No componente pai, fazemos um property binding da propriedade decorada com a propriedade que queremos associar.


Input é um decorator que marca um campo de classe como uma propriedade de entrada e fornece metadados de configuração. Isso fornece a um componente filho uma maneira de se comunicar com seu componente pai, permitindo que um componente pai atualize dados no componente filho.
 *
 *
 *
 */
