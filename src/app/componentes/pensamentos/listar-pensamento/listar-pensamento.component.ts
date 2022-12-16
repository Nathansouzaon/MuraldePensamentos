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

   //assim tenho acesso a todos os metodos desse service
   constructor(private service: PensamentoService){}

   ngOnInit(): void {//toda logica que eu queira que seja executada assim que o componente for carregado coloco aqui
    this.service.listar().subscribe((listaPensamentos) =>{
      this.listaPensamentos = listaPensamentos;//vai receber a lista que vai ser obtida no obsevable
    });//pegando esse metodo o subscribe o observable vai entender que e necessario emitir notificações sempre que tiver uma mudança assim vamos conseguir listar os pensamentos
   }
}
