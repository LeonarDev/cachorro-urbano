import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

  transform(texto: unknown): unknown {
    if ((texto as string).length >= 15) return (texto as string).substring(0, 15) + '...';
    return texto;
  }
}
