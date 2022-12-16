import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',//quando a rota criar pensamento for acessada oque eu quero que carregue?
    redirectTo:'listarPensamento', //quando a pessoa acessar a app pela primeira vez eu mando ela para pagina principal
    pathMatch: 'full'//full a url e lida da esquerda pra direita se eu colocar o prefix a url vai ser so o local host e o restante e ignorado e o full lê toda a url
  },
  {
    path:'criarPensamento',//quando a rota criar pensamento for acessada oque eu quero que carregue?
    component:CriarPensamentoComponent//quero que esse componente apareça
  },
  {
    path:'listarPensamento',//quando a rota criar pensamento for acessada oque eu quero que carregue?
    component:ListarPensamentoComponent//quero que esse componente apareça
  },
  {
    path:'pensamentos/excluirPensamento/:id',//quando a rota criar pensamento for acessada oque eu quero que carregue?
    component:ExcluirPensamentoComponent//quero que esse componente apareça
  },
  {
    path:'pensamentos/editarPensamento/:id',//quando a rota criar pensamento for acessada oque eu quero que carregue?
    component:EditarPensamentoComponent//quero que esse componente apareça
  }
];//e um array porque vai ser varias rotas pra cada rota vou passar um objeto diferente

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//configurar as rotas
