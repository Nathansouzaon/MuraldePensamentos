import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit{

  pensamento:Pensamento ={
    id:0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito:false
  }

  //injetar serviços
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute //fornece informações sobre os parametros as rotas os caminhos que vão vir dos cards de pensamento
    ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');//e como se fosse uma captura instantanea naquele momento que foi acessado e paramap nos traz como se fosse um mapa com informações dos parametros obrigatorios e opcionais daquele pensamento
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) =>{
      this.pensamento = pensamento
    })
  }

  excluirPensamento(){
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(() =>{
        this.router.navigate(['/listarPensamento']);
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }
}
