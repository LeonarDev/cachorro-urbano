export class Oferta {
  public id!: number
  public categoria: string | undefined
  public titulo: string | undefined
  public descricao_oferta: string | undefined
  public anunciante!: string
  public valor!: number
  public destaque!: boolean
  public imagens!: Array<any>
}