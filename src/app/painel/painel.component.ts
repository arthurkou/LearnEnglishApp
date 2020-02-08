import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import Frase from '../shared/frase.model'
import {FRASES} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {

  //string interpolation
  public frases: Array<Frase> = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''

  public rodada: number=0
  public rodadaFrase: Frase

  public progressoX: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<String> = new EventEmitter()

  constructor() {
    this.atualizaRodada ()
  }

  ngOnDestroy() {
  }

  ngOnInit() {
  }

    //event binding - guarda a resposta do campo de texto
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement> resposta.target).value
    //console.log(this.resposta)
  }

  //pega a resposta digitada e autentica com a frase correta quando clicar
  public verificarResposta(): void {
    
    if(this.rodadaFrase.frasePtBr == this.resposta) {

      //trocar pergunta de rodada
    this.rodada++

    //progresso
    this.progressoX = this.progressoX + (100/ this.frases.length)

    //
    if(this.rodada === 4) {
      this.encerrarJogo.emit('vitória')
    }

    //atualiza o objeto rodadeFrase
    this.atualizaRodada()

    } else {
      //diminuir a variável tentativas
      this.tentativas--

      if(this.tentativas === -1) {
        this.encerrarJogo.emit('derrota')
    }
  }
} 

  public atualizaRodada(): void {

    //define a frase da rodada com base em alguma lógica 
    this.rodadaFrase = this.frases[this.rodada]

    //limpar a resposta
    this.resposta=''
  } 
} 
