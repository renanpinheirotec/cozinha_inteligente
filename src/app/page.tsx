'use client';

import Link from 'next/link';
import { ChefHat, ShoppingCart, Gift, Store, Sparkles, Clock, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
              <ChefHat className="w-20 h-20" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Cozinha Inteligente
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Transforme os ingredientes da sua geladeira em receitas deliciosas! 
            Economize tempo e dinheiro com nosso app inteligente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ingredientes"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-6 h-6" />
              Começar Agora
            </Link>
            <Link
              href="/cadastro"
              className="bg-yellow-400 text-red-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              7 Dias Grátis
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-red-100">
              <div className="bg-gradient-to-br from-red-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Selecione Ingredientes</h3>
              <p className="text-gray-600">
                Escolha os alimentos que você tem em casa com busca fácil e fotos.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-yellow-100">
              <div className="bg-gradient-to-br from-yellow-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Receba Receitas</h3>
              <p className="text-gray-600">
                Descubra receitas incríveis que você pode fazer com o que tem!
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-red-100">
              <div className="bg-gradient-to-br from-red-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Compare Preços</h3>
              <p className="text-gray-600">
                Encontre os melhores preços nos mercados da sua região.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-yellow-100">
              <div className="bg-gradient-to-br from-yellow-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Receitas de Natal</h3>
              <p className="text-gray-600">
                Planeje sua ceia com receitas especiais e lista de compras automática.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
            Por Que Escolher a Cozinha Inteligente?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Economize Tempo</h3>
              <p className="text-gray-600">
                Não perca tempo pensando no que cozinhar. Receba sugestões instantâneas!
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <DollarSign className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Economize Dinheiro</h3>
              <p className="text-gray-600">
                Compare preços e encontre as melhores ofertas antes de ir ao mercado.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sparkles className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Seja Criativo</h3>
              <p className="text-gray-600">
                Descubra novas combinações e receitas que você nunca imaginou!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pronto para Transformar sua Cozinha?
          </h2>
          <p className="text-xl mb-8">
            Experimente grátis por 7 dias. Depois apenas R$ 19,99/mês.
          </p>
          <Link
            href="/cadastro"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-10 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            <Sparkles className="w-6 h-6" />
            Começar Teste Grátis
          </Link>
          <p className="mt-4 text-sm opacity-90">
            Cancele quando quiser. Sem compromisso.
          </p>
        </div>
      </section>
    </div>
  );
}
