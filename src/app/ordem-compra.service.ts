import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { URL_API } from './app.api';
import { Pedido } from "./shared/pedido.model";

@Injectable()
export class OrdemCompraService {

  constructor(private http: HttpClient) { }

  public efetivarCompra(pedido: Pedido): Observable<number> {
    let url = `${URL_API}/pedidos`;
    let body = JSON.stringify(pedido);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    return this.http.post(url, body, { headers: headers })
      .pipe(
        map((resposta: any) => resposta.id)
      )
  }
}
