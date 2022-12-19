import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculoValidators';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit{
//ao colocar [value] o angular vem aqui e procura exatamente a propriedade com esse nome property binding


  //atributo que vai representar o formulario
  formulario!: FormGroup;

  constructor (
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['',
      Validators.compose([
      Validators.required,
      Validators.pattern(/(.|\s)*\S(.|\s)*/)
    ])],
      autoria: ['', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      minusculoValidator
    ])],
      modelo: ['modelo1'],
      favorito: [false]
    })
  }

    criarPensamento(){//função para o botão salvar
      console.log(this.formulario.get('autoria')?.errors)
      if(this.formulario.valid){
        this.service.criar(this.formulario.value).subscribe(() =>{
          this.router.navigate(['/listarPensamento']);
        });
      }
    }

    cancelar(){
      this.router.navigate(['/listarPensamento']);
    }

    habilitarBotao(){
      if(this.formulario.valid) {
        return 'botao'
      }else{
        return 'botao__desabilitado'
      }
    }

}

//arquivo responsavel por adicionar esse comportamento essa logica e essas funcionalidades e a classe typeScript ou chamada de component sempre que eu me referir a component estou falando do arquivo TS para  atributos e ações que realizam metodo e eventos
