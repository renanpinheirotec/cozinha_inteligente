// Types para Cozinha Inteligente

export interface Ingrediente {
  id: string;
  nome: string;
  categoria: 'proteina' | 'vegetal' | 'fruta' | 'graos' | 'laticinios' | 'temperos' | 'outros';
  imagem: string;
}

export interface Receita {
  id: string;
  nome: string;
  ingredientes: string[];
  modoPreparo: string[];
  tempoPreparo: number; // em minutos
  porcoes: number;
  dificuldade: 'facil' | 'media' | 'dificil';
  imagem: string;
}

export interface ReceitaNatal extends Receita {
  tipo: 'entrada' | 'prato-principal' | 'sobremesa' | 'bebida';
}

export interface Mercado {
  id: string;
  nome: string;
  logo: string;
  distancia: number; // em km
}

export interface Produto {
  id: string;
  nome: string;
  preco: number;
  mercadoId: string;
  unidade: string;
  imagem: string;
}

export interface ItemLista {
  produtoId: string;
  nome: string;
  quantidade: number;
  unidade: string;
  mercadoId: string;
  preco: number;
  comprado: boolean;
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  dataInicio: Date;
  planoAtivo: boolean;
  diasRestantes: number;
}
