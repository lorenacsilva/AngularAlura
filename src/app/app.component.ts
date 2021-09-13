import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectBytebank';

  constructor(private service: TransferenciaService){}

  transferir($event){
    this.service.adicionar($event);
  }
}
