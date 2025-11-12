'use client';

import { useState, useMemo } from 'react';
import { Store, MapPin, TrendingDown, ShoppingCart, Check } from 'lucide-react';
import { mercados, produtos } from '@/lib/data';
import { ItemLista } from '@/lib/types';

export default function MercadosPage() {
  const [mercadoSelecionado, setMercadoSelecionado] = useState<string>('');
  const [listaCompras, setListaCompras] = useState<ItemLista[]>([]);
  const [busca, setBusca] = useState('');

  // Agrupar produtos por nome
  const produtosAgrupados = useMemo(() => {
    const grupos: { [key: string]: typeof produtos } = {};
    
    produtos.forEach(produto => {
      if (!grupos[produto.nome]) {
        grupos[produto.nome] = [];
      }
      grupos[produto.nome].push(produto);
    });

    return grupos;
  }, []);

  // Encontrar melhor preço para cada produto
  const melhoresPrecos = useMemo(() => {
    const melhores: { [key: string]: typeof produtos[0] } = {};
    
    Object.entries(produtosAgrupados).forEach(([nome, prods]) => {
      melhores[nome] = prods.reduce((melhor, atual) => 
        atual.preco < melhor.preco ? atual : melhor
      );
    });

    return melhores;
  }, [produtosAgrupados]);

  const adicionarNaLista = (produtoNome: string) => {
    const produto = mercadoSelecionado 
      ? produtos.find(p => p.nome === produtoNome && p.mercadoId === mercadoSelecionado)
      : melhoresPrecos[produtoNome];

    if (!produto) return;

    const itemExistente = listaCompras.find(
      item => item.produtoId === produto.id
    );

    if (itemExistente) {
      setListaCompras(prev =>
        prev.map(item =>
          item.produtoId === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setListaCompras(prev => [
        ...prev,
        {
          produtoId: produto.id,
          nome: produto.nome,
          quantidade: 1,
          unidade: produto.unidade,
          mercadoId: produto.mercadoId,
          preco: produto.preco,
          comprado: false
        }
      ]);
    }
  };

  const toggleComprado = (produtoId: string) => {
    setListaCompras(prev =>
      prev.map(item =>
        item.produtoId === produtoId
          ? { ...item, comprado: !item.comprado }
          : item
      )
    );
  };

  const removerDaLista = (produtoId: string) => {
    setListaCompras(prev => prev.filter(item => item.produtoId !== produtoId));
  };

  const totalCompras = useMemo(() => {
    return listaCompras.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  }, [listaCompras]);

  const produtosFiltrados = useMemo(() => {
    return Object.keys(produtosAgrupados).filter(nome =>
      nome.toLowerCase().includes(busca.toLowerCase())
    );
  }, [busca, produtosAgrupados]);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-red-600 to-yellow-500 p-4 rounded-full">
              <Store className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            Compare Preços
          </h1>
          <p className="text-lg text-gray-600">
            Encontre os melhores preços nos mercados da sua região
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna Esquerda - Mercados e Produtos */}
          <div className="lg:col-span-2 space-y-6">
            {/* Seleção de Mercado */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Mercados Disponíveis</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => setMercadoSelecionado('')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    mercadoSelecionado === ''
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-3xl mb-2">🏆</div>
                  <p className="font-semibold text-gray-800">Melhor Preço</p>
                  <p className="text-xs text-gray-500">Todos os mercados</p>
                </button>
                
                {mercados.map(mercado => (
                  <button
                    key={mercado.id}
                    onClick={() => setMercadoSelecionado(mercado.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      mercadoSelecionado === mercado.id
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">{mercado.logo}</div>
                    <p className="font-semibold text-gray-800">{mercado.nome}</p>
                    <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {mercado.distancia} km
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Lista de Produtos */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Buscar produto..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none"
                />
              </div>

              <div className="space-y-4">
                {produtosFiltrados.map(nomeProduto => {
                  const produtosMercado = produtosAgrupados[nomeProduto];
                  const melhorPreco = melhoresPrecos[nomeProduto];
                  
                  return (
                    <div key={nomeProduto} className="border-2 border-gray-100 rounded-xl p-4 hover:border-red-200 transition-colors">
                      <div className="flex items-center gap-4">
                        <img
                          src={produtosMercado[0].imagem}
                          alt={nomeProduto}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-2">{nomeProduto}</h3>
                          
                          {mercadoSelecionado ? (
                            <div>
                              {produtosMercado
                                .filter(p => p.mercadoId === mercadoSelecionado)
                                .map(produto => {
                                  const mercado = mercados.find(m => m.id === produto.mercadoId);
                                  return (
                                    <div key={produto.id} className="flex items-center justify-between">
                                      <div>
                                        <p className="text-sm text-gray-600">{mercado?.nome}</p>
                                        <p className="text-2xl font-bold text-red-600">
                                          R$ {produto.preco.toFixed(2)}
                                          <span className="text-sm text-gray-500 ml-1">/{produto.unidade}</span>
                                        </p>
                                      </div>
                                      <button
                                        onClick={() => adicionarNaLista(nomeProduto)}
                                        className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                                      >
                                        Adicionar
                                      </button>
                                    </div>
                                  );
                                })}
                            </div>
                          ) : (
                            <div className="space-y-2">
                              {produtosMercado.map(produto => {
                                const mercado = mercados.find(m => m.id === produto.mercadoId);
                                const isMelhor = produto.id === melhorPreco.id;
                                
                                return (
                                  <div
                                    key={produto.id}
                                    className={`flex items-center justify-between p-2 rounded-lg ${
                                      isMelhor ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className="text-lg">{mercado?.logo}</span>
                                      <div>
                                        <p className="text-sm font-medium text-gray-700">{mercado?.nome}</p>
                                        <p className="text-lg font-bold text-red-600">
                                          R$ {produto.preco.toFixed(2)}
                                          <span className="text-xs text-gray-500 ml-1">/{produto.unidade}</span>
                                        </p>
                                      </div>
                                    </div>
                                    {isMelhor && (
                                      <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                                        <TrendingDown className="w-4 h-4" />
                                        Melhor
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                              <button
                                onClick={() => adicionarNaLista(nomeProduto)}
                                className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all mt-2"
                              >
                                Adicionar Melhor Preço
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Coluna Direita - Lista de Compras */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl shadow-lg p-6 text-white sticky top-24">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShoppingCart className="w-8 h-8" />
                Minha Lista
              </h2>

              {listaCompras.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-16 h-16 mx-auto mb-3 opacity-50" />
                  <p className="text-white/80">Sua lista está vazia</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                    {listaCompras.map(item => {
                      const mercado = mercados.find(m => m.id === item.mercadoId);
                      return (
                        <div
                          key={item.produtoId}
                          className={`bg-white/10 backdrop-blur-sm rounded-lg p-3 ${
                            item.comprado ? 'opacity-50' : ''
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <p className={`font-semibold ${item.comprado ? 'line-through' : ''}`}>
                                {item.nome}
                              </p>
                              <p className="text-sm text-white/80">
                                {mercado?.logo} {mercado?.nome}
                              </p>
                            </div>
                            <button
                              onClick={() => toggleComprado(item.produtoId)}
                              className={`p-1 rounded ${
                                item.comprado ? 'bg-green-500' : 'bg-white/20'
                              }`}
                            >
                              <Check className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">
                              {item.quantidade}x R$ {item.preco.toFixed(2)}
                            </span>
                            <span className="font-bold">
                              R$ {(item.quantidade * item.preco).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t-2 border-white/20 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold">Total:</span>
                      <span className="text-3xl font-bold">
                        R$ {totalCompras.toFixed(2)}
                      </span>
                    </div>
                    <button className="w-full bg-white text-red-600 py-3 rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105">
                      Finalizar Lista
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
