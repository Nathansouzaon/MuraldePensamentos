import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

   listaPensamentos: Pensamento[] = []//array para conter os pensamentos
   paginaAtual:number = 1;
   haMaisPensamentos:boolean=true;
   filtro:string = '';
   favoritos:boolean=false;
   listaFavoritos:Pensamento[] = [];
   titulo:string='Meu Mural';

   //assim tenho acesso a todos os metodos desse service
   constructor(
    private service: PensamentoService,
    private router: Router
    ){}

   ngOnInit(): void {//toda logica que eu queira que seja executada assim que o componente for carregado coloco aqui
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) =>{
      this.listaPensamentos = listaPensamentos;//vai receber a lista que vai ser obtida no obsevable
    });//pegando esse metodo o subscribe o observable vai entender que e necessario emitir notificações sempre que tiver uma mudança assim vamos conseguir listar os pensamentos
   }

   carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos)
    .subscribe(listaPensamentos =>{
      this.listaPensamentos.push(...listaPensamentos)//...quero que essa lista seja acrescida os pensamentos que ja existem e mais os que forem renderizados

      if(!listaPensamentos.length){
        this.haMaisPensamentos = false
      }
    })
   }

   pesquisarPensamentos(){
      this.haMaisPensamentos = true;//quero que o botão sempre seja renderizado quando pesquisar
      this.paginaAtual = 1;//renicializar com 1
      this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos // lista vai receber lista retornada
      })
   }

   recarregarComponente(){
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;//por padrao o routeador reutiliza a instancia de um componente quando você navega pra esse mesmo tipo de componente sem ter visitado um componente diferente primeiro eu preciso dizer por angular que eu não quero reutilizar a rota
    this.router.onSameUrlNavigation = 'reload'; //essa propriedade diz que quando eu estiver navegando na mesma url eu preciso dizer pro angular o que eu quero que aconteça
    this.router.navigate([this.router.url]);//essa propriedade representa a url atual
   }

   listarFavoritos(){
    this.titulo = 'Meus Favoritos';
    this.favoritos=true;
     this.haMaisPensamentos = true;//quero que o botão carregar mais pensamentos apareça caso vier muitos favoritos
     this.paginaAtual = 1;
     this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
     .subscribe( listaPensamentoFavoritos =>{
      this.listaPensamentos = listaPensamentoFavoritos
      this.listaFavoritos = listaPensamentoFavoritos
     })
    }


}
