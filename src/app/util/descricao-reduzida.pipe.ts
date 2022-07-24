import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

  transform(texto: unknown, truncarEm: number): unknown {
    if ((texto as string).length >= truncarEm) return (texto as string).substring(0, truncarEm) + '...';
    return texto;
  }
}
