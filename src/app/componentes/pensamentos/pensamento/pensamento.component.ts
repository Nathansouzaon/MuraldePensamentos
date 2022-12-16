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
        modelo: 'modelo3'
    }

   constructor (){}

   ngOnInit(): void {

   }

   larguraPensamento(): string {
      if(this.pensamento.conteudo.length >= 256){
        return 'pensamento-g'
      }
        return 'pensamento-p'
   }
}
