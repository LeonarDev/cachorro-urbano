import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

import { Oferta } from "./shared/oferta.model";
import { URL_API } from './app.api';


@Injectable()
export class OfertasService {

  constructor(private http: HttpClient) { }

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta[0]);
  }

  public getComoUsarOfertaPorId(id: number): Promise<String> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta[0].descricao)
  }

  public getOndeFicaOfertaPorId(id: number): Promise<String> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta[0].descricao)
  }

  public pesquisaOfertas(conteudoDaPesquisa: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${conteudoDaPesquisa}`)
      .pipe(
        retry(5),
        map((resposta: any) => resposta)
      )
  }
}
