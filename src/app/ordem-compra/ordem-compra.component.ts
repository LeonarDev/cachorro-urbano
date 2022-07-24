import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra!: number;

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  public enderecoValido!: boolean;
  public numeroValido!: boolean;
  public complementoValido!: boolean;
  public formaPagamentoValido!: boolean;

  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  public formEstado: string = 'disabled'

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;
    this.enderecoValido = endereco.length >= 3 ? true : false;
    this.habilitaBotao();
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;
    this.numeroValido = numero.length > 0 ? true : false;
    this.habilitaBotao();
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    if (this.complemento.length > 0) this.complementoValido = true;
    this.habilitaBotao();
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoEstadoPrimitivo = false;
    this.formaPagamentoValido = formaPagamento.length > 0 ? true : false;
    this.habilitaBotao();
  }

  public habilitaBotao(): void {
    if (
      this.enderecoValido &&
      this.numeroValido &&
      this.formaPagamentoValido
    ) this.formEstado = '';
    else this.formEstado = 'disabled';
  }

  public confirmarCompra(): void {
    let pedido: Pedido = new Pedido(
      this.endereco,
      this.numero,
      this.complemento,
      this.formaPagamento
    );

    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido;
      });
  }
}
