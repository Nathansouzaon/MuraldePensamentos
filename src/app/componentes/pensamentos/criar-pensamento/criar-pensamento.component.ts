import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit{
//ao colocar [value] o angular vem aqui e procura exatamente a propriedade com esse nome property binding
  pensamento: Pensamento ={
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor (
    private service: PensamentoService,
    private router: Router
    ) {}

  ngOnInit(): void {

  }

    criarPensamento(){//função para o botão salvar
      this.service.criar(this.pensamento).subscribe(() =>{
        this.router.navigate(['/listarPensamento']);
      });
    }

    cancelar(){
      this.router.navigate(['/listarPensamento']);
    }

}

//arquivo responsavel por adicionar esse comportamento essa logica e essas funcionalidades e a classe typeScript ou chamada de component sempre que eu me referir a component estou falando do arquivo TS para  atributos e ações que realizam metodo e eventos
