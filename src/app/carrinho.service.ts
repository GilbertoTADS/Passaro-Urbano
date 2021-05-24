import { Injectable } from '@angular/core';
import { ItemCarrinho } from './shared/item-carrinho.model'
import { Oferta } from './shared/oferta.model';

@Injectable()
export default class CarrinhoService {
  public items:ItemCarrinho[] = []

  constructor() { }
  public exibirItens():ItemCarrinho[]{
    return this.items
  }
  public incluirItem(oferta:Oferta):void{
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor.toString(),
      1
    ); 
      console.log(itemCarrinho);
  }

}
