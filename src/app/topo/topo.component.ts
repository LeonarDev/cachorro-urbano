import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>;
  public ofertas2!: Oferta[];
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termoDaPesquisa: string) => {
        if (termoDaPesquisa.trim() === '') return of<Oferta[]>([]);
        return this.ofertasService.pesquisaOfertas(termoDaPesquisa);
      }),
      catchError((erro: any, observable: Observable<Oferta[]>) => {
        console.log('Erro ao pesquisar oferta:', erro);
        return observable;
      })
    );
    this.ofertas.subscribe((ofertas: Oferta[]) => {
      this.ofertas2 = ofertas;
    })
  }

  public pesquisar(conteudoDaPesquisa: string): void {
    this.subjectPesquisa.next(conteudoDaPesquisa)
  }
}
