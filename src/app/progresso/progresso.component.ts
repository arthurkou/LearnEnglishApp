import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.scss']
})
export class ProgressoComponent implements OnInit {
  
//@input serve para receber a "barra de progresso" que está no painel
  @Input() public progresso: number = 0

  constructor() { }

  ngOnInit() {
  }

}
