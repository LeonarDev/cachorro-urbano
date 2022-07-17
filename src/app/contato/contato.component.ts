import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Cliente } from '../shared/cliente.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formCliente!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.criaFormulario(new Cliente());
  }

  criaFormulario(cliente: Cliente) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      tipo: new FormControl(cliente.tipo),
      genero: new FormControl(cliente.genero),
      dataNascimento: new FormControl(cliente.dataNascimento),
      observacao: new FormControl(cliente.observacao),
      inativo: new FormControl(cliente.inativo)
    })
  }

  onSubmit() {
    console.log(this.formCliente.value);
    // this.criaFormulario(new Cliente());
    this.formCliente.reset(new Cliente());
  }
}
