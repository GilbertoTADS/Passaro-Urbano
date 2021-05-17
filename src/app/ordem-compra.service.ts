import { Pedido } from './shared/pedido.model'
import {  Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { URL_API } from './app.api';

@Injectable()
export class OrdemCompraService{
  
  constructor(private http:Http){}

  efetivarCompra( pedido:Pedido):Observable<any>{
    let headers:Headers = new Headers();
    headers.append('Content-type','application/json')
    return this.http.post(
      `${URL_API}/pedidos`,
      JSON.stringify(pedido),
      new RequestOptions({ headers })
      ).map((response:Response) => response.json().id )
  }

}