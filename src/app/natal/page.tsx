'use client';

import { useState } from 'react';
import { Gift, Users, Clock, ChefHat, ShoppingCart } from 'lucide-react';
import { receitasNatal } from '@/lib/data';
import { ReceitaNatal } from '@/lib/types';

export default function NatalPage() {
  const [receitasSelecionadas, setReceitasSelecionadas] = useState<string[]>([]);
  const [numeroPessoas, setNumeroPessoas] = useState(10);
  const [tipoFiltro, setTipoFiltro] = useState<string>('todos');

  const tipos = [
    { id: 'todos', nome: 'Todos' },
    { id: 'entrada', nome: 'Entradas' },
    { id: 'prato-principal', nome: 'Pratos Principais' },
    { id: 'sobremesa', nome: 'Sobremesas' },
    { id: 'bebida', nome: 'Bebidas' },
  ];

  const receitasFiltradas = tipoFiltro === 'todos' 
    ? receitasNatal 
    : receitasNatal.filter(r => r.tipo === tipoFiltro);

  const toggleReceita = (id: string) => {
    setReceitasSelecionadas(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const calcularIngredientes = (receita: ReceitaNatal) => {
    const fator = numeroPessoas / receita.porcoes;
    return {
      ...receita,
      porcoesAjustadas: numeroPessoas,
      fator: fator.toFixed(2)
    };
  };

  const gerarListaCompras = () => {
    const receitas = receitasNatal.filter(r => receitasSelecionadas.includes(r.id));
    const ingredientes = new Set<string>();
    
    receitas.forEach(receita => {
      receita.ingredientes.forEach(ing => ingredientes.add(ing));
    });

    return Array.from(ingredientes);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-red-600 to-yellow-500 p-4 rounded-full">
              <Gift className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            Receitas de Natal
          </h1>
          <p className="text-lg text-gray-600">
            Planeje sua ceia perfeita com receitas especiais e lista de compras automática
          </p>
        </div>

        {/* Configurações */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Número de Pessoas
              </label>
              <div className="flex items-center gap-4">
                <Users className="w-6 h-6 text-red-600" />
                <input
                  type="range"
                  min="2"
                  max="30"
                  value={numeroPessoas}
                  onChange={(e) => setNumeroPessoas(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-2xl font-bold text-red-600 min-w-[3rem] text-center">
                  {numeroPessoas}
                </span>
              </div>
            </div>
          </div>

          {/* Filtros de Tipo */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Tipo de Receita
            </label>
            <div className="flex flex-wrap gap-2">
              {tipos.map((tipo) => (
                <button
                  key={tipo.id}
                  onClick={() => setTipoFiltro(tipo.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    tipoFiltro === tipo.id
                      ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tipo.nome}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Receitas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {receitasFiltradas.map((receita) => {
            const isSelected = receitasSelecionadas.includes(receita.id);
            const ajustada = calcularIngredientes(receita);
            
            return (
              <div
                key={receita.id}
                className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all ${
                  isSelected ? 'ring-4 ring-red-500 scale-105' : 'hover:scale-105'
                }`}
              >
                <div className="relative">
                  <img
                    src={receita.imagem}
                    alt={receita.nome}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-red-600">
                      {receita.tipo.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{receita.nome}</h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {receita.tempoPreparo} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {ajustada.porcoesAjustadas} pessoas
                    </span>
                  </div>

                  {isSelected && (
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3 mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        Ajuste de Porções:
                      </p>
                      <p className="text-xs text-gray-600">
                        Multiplique as quantidades por <span className="font-bold text-red-600">{ajustada.fator}x</span>
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => toggleReceita(receita.id)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {isSelected ? '✓ Selecionada' : 'Selecionar'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lista de Compras */}
        {receitasSelecionadas.length > 0 && (
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl shadow-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-8 h-8" />
              Lista de Compras para {numeroPessoas} Pessoas
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
              <p className="text-sm mb-3">
                {receitasSelecionadas.length} receitas selecionadas
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {gerarListaCompras().map((ingrediente, idx) => (
                  <div key={idx} className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
                    • {ingrediente}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full sm:w-auto bg-white text-red-600 px-8 py-3 rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105">
              Ver Preços nos Mercados
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
