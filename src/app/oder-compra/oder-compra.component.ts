import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import CarrinhoService from 'app/carrinho.service';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'app-oder-compra',
  templateUrl: './oder-compra.component.html',
  styleUrls: ['./oder-compra.component.css'],
  providers: [ OrdemCompraService, CarrinhoService ]
})
export class OderCompraComponent implements OnInit {
  idPedidoCompra?:number;
  formulario:FormGroup = new FormGroup({
    'endereco': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  })
  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService:CarrinhoService
    ) { }

  ngOnInit() {
    console.log(this.carrinhoService.exibirItens());
  }

  public confirmarCompra(): void {
    if(this.formulario.invalid){
      this.formulario.get('endereco').markAsTouched();
      this.formulario.get('numero').markAsTouched();
      this.formulario.get('complemento').markAsTouched();
      this.formulario.get('formaPagamento').markAsTouched();
    }else{
      let pedido:Pedido = new Pedido(
        this.formulario.value.endereco, 
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento
        );
        this.ordemCompraService.efetivarCompra(pedido)
          .subscribe( (idPedido:number) => {
            this.idPedidoCompra = idPedido;
            console.log(this.idPedidoCompra);
          })
    }
  }
}