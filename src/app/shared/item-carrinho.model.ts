export class ItemCarrinho{
  constructor(
    public id:number,
    public img: object,
    public titulo: string,
    public descricao_oferta,
    public valor:string,
    public quantidade:number
  ){}
}