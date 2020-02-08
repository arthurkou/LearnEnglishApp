import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true
  public tipoEncerramento: string 
 
  public encerrarJogo(finaliza: string): void {
    this.jogoEmAndamento = false 
    this.tipoEncerramento = finaliza
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.tipoEncerramento = undefined
  }
}
