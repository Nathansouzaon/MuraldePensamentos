import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.css']
})
export class BotaoCarregarMaisComponent implements OnInit {

  //esse atributo vai receber informações do componente pai que vai ser de listagem para eu colocar uma logica para o botão aparecer e desaparecer de acordo com a quantidade de pensamentos a serem exibidos
   @Input() haMaisPensamentos: boolean = false;
    constructor() {}

    ngOnInit(): void {

    }
}
