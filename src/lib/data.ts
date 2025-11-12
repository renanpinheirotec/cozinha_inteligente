// Dados mockados para Cozinha Inteligente
import { Ingrediente, Receita, ReceitaNatal, Mercado, Produto } from './types';

export const ingredientes: Ingrediente[] = [
  // Proteínas
  { id: '1', nome: 'Frango', categoria: 'proteina', imagem: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop' },
  { id: '2', nome: 'Carne Moída', categoria: 'proteina', imagem: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=300&fit=crop' },
  { id: '3', nome: 'Ovos', categoria: 'proteina', imagem: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop' },
  { id: '4', nome: 'Peixe', categoria: 'proteina', imagem: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop' },
  
  // Vegetais
  { id: '5', nome: 'Tomate', categoria: 'vegetal', imagem: 'https://images.unsplash.com/photo-1546470427-227a8e2e8c0f?w=400&h=300&fit=crop' },
  { id: '6', nome: 'Cebola', categoria: 'vegetal', imagem: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=300&fit=crop' },
  { id: '7', nome: 'Alho', categoria: 'vegetal', imagem: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=300&fit=crop' },
  { id: '8', nome: 'Batata', categoria: 'vegetal', imagem: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop' },
  { id: '9', nome: 'Cenoura', categoria: 'vegetal', imagem: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop' },
  { id: '10', nome: 'Brócolis', categoria: 'vegetal', imagem: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=300&fit=crop' },
  
  // Frutas
  { id: '11', nome: 'Banana', categoria: 'fruta', imagem: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop' },
  { id: '12', nome: 'Maçã', categoria: 'fruta', imagem: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop' },
  { id: '13', nome: 'Limão', categoria: 'fruta', imagem: 'https://images.unsplash.com/photo-1590502593747-42a996133562?w=400&h=300&fit=crop' },
  
  // Grãos
  { id: '14', nome: 'Arroz', categoria: 'graos', imagem: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop' },
  { id: '15', nome: 'Feijão', categoria: 'graos', imagem: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop' },
  { id: '16', nome: 'Macarrão', categoria: 'graos', imagem: 'https://images.unsplash.com/photo-1551462147-37a42b7c8e3f?w=400&h=300&fit=crop' },
  
  // Laticínios
  { id: '17', nome: 'Leite', categoria: 'laticinios', imagem: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop' },
  { id: '18', nome: 'Queijo', categoria: 'laticinios', imagem: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&h=300&fit=crop' },
  { id: '19', nome: 'Manteiga', categoria: 'laticinios', imagem: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=300&fit=crop' },
  
  // Temperos
  { id: '20', nome: 'Sal', categoria: 'temperos', imagem: 'https://images.unsplash.com/photo-1599909533730-f9d7e4e5e3c8?w=400&h=300&fit=crop' },
  { id: '21', nome: 'Pimenta', categoria: 'temperos', imagem: 'https://images.unsplash.com/photo-1599909533730-f9d7e4e5e3c8?w=400&h=300&fit=crop' },
  { id: '22', nome: 'Azeite', categoria: 'temperos', imagem: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop' },
];

export const receitas: Receita[] = [
  {
    id: 'r1',
    nome: 'Frango com Batatas',
    ingredientes: ['Frango', 'Batata', 'Cebola', 'Alho', 'Sal', 'Azeite'],
    modoPreparo: [
      'Tempere o frango com sal, alho e azeite',
      'Corte as batatas em cubos',
      'Refogue a cebola e o alho',
      'Adicione o frango e deixe dourar',
      'Adicione as batatas e cozinhe por 30 minutos'
    ],
    tempoPreparo: 45,
    porcoes: 4,
    dificuldade: 'facil',
    imagem: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop'
  },
  {
    id: 'r2',
    nome: 'Omelete Simples',
    ingredientes: ['Ovos', 'Queijo', 'Sal', 'Manteiga'],
    modoPreparo: [
      'Bata os ovos com sal',
      'Aqueça a manteiga na frigideira',
      'Despeje os ovos',
      'Adicione o queijo',
      'Dobre ao meio e sirva'
    ],
    tempoPreparo: 10,
    porcoes: 2,
    dificuldade: 'facil',
    imagem: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&h=400&fit=crop'
  },
  {
    id: 'r3',
    nome: 'Arroz com Feijão',
    ingredientes: ['Arroz', 'Feijão', 'Cebola', 'Alho', 'Sal', 'Azeite'],
    modoPreparo: [
      'Refogue o alho e cebola no azeite',
      'Adicione o arroz e refogue',
      'Adicione água e sal',
      'Cozinhe o feijão separadamente',
      'Sirva junto'
    ],
    tempoPreparo: 40,
    porcoes: 4,
    dificuldade: 'facil',
    imagem: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&h=400&fit=crop'
  },
  {
    id: 'r4',
    nome: 'Macarrão ao Alho e Óleo',
    ingredientes: ['Macarrão', 'Alho', 'Azeite', 'Sal', 'Pimenta'],
    modoPreparo: [
      'Cozinhe o macarrão em água com sal',
      'Refogue o alho no azeite',
      'Misture o macarrão ao alho',
      'Adicione pimenta a gosto',
      'Sirva quente'
    ],
    tempoPreparo: 20,
    porcoes: 2,
    dificuldade: 'facil',
    imagem: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop'
  },
  {
    id: 'r5',
    nome: 'Peixe Grelhado',
    ingredientes: ['Peixe', 'Limão', 'Sal', 'Azeite', 'Alho'],
    modoPreparo: [
      'Tempere o peixe com sal, alho e limão',
      'Deixe marinar por 15 minutos',
      'Aqueça o azeite na frigideira',
      'Grelhe o peixe por 5 minutos de cada lado',
      'Sirva com limão'
    ],
    tempoPreparo: 30,
    porcoes: 2,
    dificuldade: 'media',
    imagem: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop'
  }
];

export const receitasNatal: ReceitaNatal[] = [
  {
    id: 'rn1',
    nome: 'Peru de Natal',
    tipo: 'prato-principal',
    ingredientes: ['Peru', 'Alho', 'Cebola', 'Manteiga', 'Sal', 'Pimenta', 'Vinho Branco'],
    modoPreparo: [
      'Tempere o peru com sal, pimenta e alho',
      'Pincele com manteiga derretida',
      'Recheie com cebola e ervas',
      'Regue com vinho branco',
      'Asse por 3-4 horas a 180°C'
    ],
    tempoPreparo: 240,
    porcoes: 10,
    dificuldade: 'dificil',
    imagem: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=600&h=400&fit=crop'
  },
  {
    id: 'rn2',
    nome: 'Tender Glaceado',
    tipo: 'prato-principal',
    ingredientes: ['Tender', 'Mel', 'Mostarda', 'Cravo', 'Açúcar Mascavo'],
    modoPreparo: [
      'Faça cortes no tender',
      'Espete cravos nos cortes',
      'Misture mel, mostarda e açúcar',
      'Pincele o tender com a mistura',
      'Asse por 2 horas, regando a cada 30 minutos'
    ],
    tempoPreparo: 150,
    porcoes: 8,
    dificuldade: 'media',
    imagem: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop'
  },
  {
    id: 'rn3',
    nome: 'Rabanada',
    tipo: 'sobremesa',
    ingredientes: ['Pão', 'Leite', 'Ovos', 'Açúcar', 'Canela'],
    modoPreparo: [
      'Corte o pão em fatias grossas',
      'Molhe no leite',
      'Passe nos ovos batidos',
      'Frite em óleo quente',
      'Polvilhe com açúcar e canela'
    ],
    tempoPreparo: 30,
    porcoes: 6,
    dificuldade: 'facil',
    imagem: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop'
  },
  {
    id: 'rn4',
    nome: 'Farofa Natalina',
    tipo: 'entrada',
    ingredientes: ['Farinha de Mandioca', 'Bacon', 'Cebola', 'Uva Passa', 'Manteiga'],
    modoPreparo: [
      'Frite o bacon em cubos',
      'Refogue a cebola na gordura do bacon',
      'Adicione a uva passa',
      'Misture a farinha de mandioca',
      'Mexa até ficar dourada'
    ],
    tempoPreparo: 25,
    porcoes: 8,
    dificuldade: 'facil',
    imagem: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=400&fit=crop'
  }
];

export const mercados: Mercado[] = [
  {
    id: 'm1',
    nome: 'Supermercado Economia',
    logo: '🛒',
    distancia: 1.2
  },
  {
    id: 'm2',
    nome: 'Mercado Bom Preço',
    logo: '🏪',
    distancia: 2.5
  },
  {
    id: 'm3',
    nome: 'Atacadão Popular',
    logo: '🏬',
    distancia: 3.8
  }
];

export const produtos: Produto[] = [
  // Frango
  { id: 'p1', nome: 'Frango Inteiro', preco: 18.90, mercadoId: 'm1', unidade: 'kg', imagem: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=200&h=150&fit=crop' },
  { id: 'p2', nome: 'Frango Inteiro', preco: 17.50, mercadoId: 'm2', unidade: 'kg', imagem: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=200&h=150&fit=crop' },
  { id: 'p3', nome: 'Frango Inteiro', preco: 16.90, mercadoId: 'm3', unidade: 'kg', imagem: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=200&h=150&fit=crop' },
  
  // Batata
  { id: 'p4', nome: 'Batata', preco: 4.50, mercadoId: 'm1', unidade: 'kg', imagem: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200&h=150&fit=crop' },
  { id: 'p5', nome: 'Batata', preco: 4.20, mercadoId: 'm2', unidade: 'kg', imagem: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200&h=150&fit=crop' },
  { id: 'p6', nome: 'Batata', preco: 3.90, mercadoId: 'm3', unidade: 'kg', imagem: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200&h=150&fit=crop' },
  
  // Ovos
  { id: 'p7', nome: 'Ovos (dúzia)', preco: 12.90, mercadoId: 'm1', unidade: 'dz', imagem: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200&h=150&fit=crop' },
  { id: 'p8', nome: 'Ovos (dúzia)', preco: 11.50, mercadoId: 'm2', unidade: 'dz', imagem: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200&h=150&fit=crop' },
  { id: 'p9', nome: 'Ovos (dúzia)', preco: 10.90, mercadoId: 'm3', unidade: 'dz', imagem: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200&h=150&fit=crop' },
];
