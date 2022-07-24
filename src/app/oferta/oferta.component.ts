import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta!: Oferta;
  public abaInicialAtiva!: Boolean;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertaPorId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta
          this.abaInicialAtiva = true
        });
    })
  }

  desabilitaAbaInicial(): void {
    this.abaInicialAtiva = false
  }

}
