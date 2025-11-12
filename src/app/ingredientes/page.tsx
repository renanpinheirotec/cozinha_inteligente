'use client';

import { useState, useMemo } from 'react';
import { Search, Check, ChefHat, X } from 'lucide-react';
import { ingredientes, receitas } from '@/lib/data';
import { Ingrediente, Receita } from '@/lib/types';
import Link from 'next/link';

export default function IngredientesPage() {
  const [selecionados, setSelecionados] = useState<string[]>([]);
  const [busca, setBusca] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('todos');

  const categorias = [
    { id: 'todos', nome: 'Todos' },
    { id: 'proteina', nome: 'Proteínas' },
    { id: 'vegetal', nome: 'Vegetais' },
    { id: 'fruta', nome: 'Frutas' },
    { id: 'graos', nome: 'Grãos' },
    { id: 'laticinios', nome: 'Laticínios' },
    { id: 'temperos', nome: 'Temperos' },
  ];

  const ingredientesFiltrados = useMemo(() => {
    return ingredientes.filter((ing) => {
      const matchBusca = ing.nome.toLowerCase().includes(busca.toLowerCase());
      const matchCategoria = categoriaFiltro === 'todos' || ing.categoria === categoriaFiltro;
      return matchBusca && matchCategoria;
    });
  }, [busca, categoriaFiltro]);

  const receitasDisponiveis = useMemo(() => {
    if (selecionados.length === 0) return [];
    
    return receitas.filter((receita) => {
      const ingredientesReceita = receita.ingredientes.map(i => i.toLowerCase());
      const ingredientesSelecionados = selecionados.map(id => {
        const ing = ingredientes.find(i => i.id === id);
        return ing?.nome.toLowerCase() || '';
      });
      
      // Verifica se pelo menos 60% dos ingredientes da receita estão disponíveis
      const match = ingredientesReceita.filter(ing => 
        ingredientesSelecionados.some(sel => ing.includes(sel) || sel.includes(ing))
      );
      
      return match.length >= ingredientesReceita.length * 0.6;
    });
  }, [selecionados]);

  const toggleIngrediente = (id: string) => {
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const limparSelecao = () => {
    setSelecionados([]);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            Selecione seus Ingredientes
          </h1>
          <p className="text-lg text-gray-600">
            Escolha o que você tem em casa e descubra receitas incríveis!
          </p>
        </div>

        {/* Busca e Filtros */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar ingrediente..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Categorias */}
          <div className="flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaFiltro(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  categoriaFiltro === cat.id
                    ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.nome}
              </button>
            ))}
          </div>
        </div>

        {/* Selecionados */}
        {selecionados.length > 0 && (
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl shadow-lg p-6 mb-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Check className="w-6 h-6" />
                {selecionados.length} Ingredientes Selecionados
              </h2>
              <button
                onClick={limparSelecao}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Limpar
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selecionados.map((id) => {
                const ing = ingredientes.find((i) => i.id === id);
                return (
                  <span
                    key={id}
                    className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    {ing?.nome}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Grid de Ingredientes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {ingredientesFiltrados.map((ingrediente) => {
            const isSelected = selecionados.includes(ingrediente.id);
            return (
              <button
                key={ingrediente.id}
                onClick={() => toggleIngrediente(ingrediente.id)}
                className={`relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group ${
                  isSelected ? 'ring-4 ring-red-500 scale-105' : 'hover:scale-105'
                }`}
              >
                <div className="aspect-square relative">
                  <img
                    src={ingrediente.imagem}
                    alt={ingrediente.nome}
                    className="w-full h-full object-cover"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-red-600/80 flex items-center justify-center">
                      <Check className="w-12 h-12 text-white" />
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <p className="font-semibold text-gray-800 text-sm text-center">
                    {ingrediente.nome}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Receitas Disponíveis */}
        {receitasDisponiveis.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <ChefHat className="w-8 h-8 text-red-600" />
              {receitasDisponiveis.length} Receitas Disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {receitasDisponiveis.map((receita) => (
                <div
                  key={receita.id}
                  className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105"
                >
                  <img
                    src={receita.imagem}
                    alt={receita.nome}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{receita.nome}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>⏱️ {receita.tempoPreparo} min</span>
                      <span>🍽️ {receita.porcoes} porções</span>
                    </div>
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Ingredientes:</p>
                      <div className="flex flex-wrap gap-1">
                        {receita.ingredientes.slice(0, 4).map((ing, idx) => (
                          <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                            {ing}
                          </span>
                        ))}
                        {receita.ingredientes.length > 4 && (
                          <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                            +{receita.ingredientes.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                      Ver Receita Completa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selecionados.length === 0 && (
          <div className="text-center py-12">
            <ChefHat className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-500">
              Selecione ingredientes para ver receitas disponíveis
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
