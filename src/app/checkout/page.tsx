'use client';

import { useState } from 'react';
import { CreditCard, Calendar, Lock, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [planoSelecionado, setPlanoSelecionado] = useState<'mensal' | 'anual'>('mensal');
  const [metodoPagamento, setMetodoPagamento] = useState<'cartao' | 'pix'>('cartao');
  const [pagamentoSucesso, setPagamentoSucesso] = useState(false);

  // Dados do formulário
  const [numeroCartao, setNumeroCartao] = useState('');
  const [nomeCartao, setNomeCartao] = useState('');
  const [validade, setValidade] = useState('');
  const [cvv, setCvv] = useState('');

  const precoMensal = 19.99;
  const precoAnual = 199.99;
  const economiaAnual = ((precoMensal * 12) - precoAnual).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPagamentoSucesso(true);
    
    setTimeout(() => {
      window.location.href = '/ingredientes';
    }, 3000);
  };

  if (pagamentoSucesso) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Pagamento Confirmado!
          </h2>
          <p className="text-gray-600 mb-6">
            Sua assinatura foi ativada com sucesso. Aproveite todos os recursos da Cozinha Inteligente!
          </p>
          <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-4">
            <p className="text-sm text-gray-700">
              Redirecionando para o app...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/cadastro"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            Escolha seu Plano
          </h1>
          <p className="text-gray-600">
            Selecione o plano ideal para você e comece a economizar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Esquerda - Planos */}
          <div className="lg:col-span-2 space-y-6">
            {/* Plano Mensal */}
            <div
              onClick={() => setPlanoSelecionado('mensal')}
              className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all ${
                planoSelecionado === 'mensal'
                  ? 'ring-4 ring-red-500 scale-105'
                  : 'hover:shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Plano Mensal</h3>
                  <p className="text-gray-600">Flexibilidade total</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-red-600">R$ {precoMensal.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">por mês</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Receitas ilimitadas</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Comparação de preços</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Listas de compras inteligentes</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Cancele quando quiser</span>
                </div>
              </div>
            </div>

            {/* Plano Anual */}
            <div
              onClick={() => setPlanoSelecionado('anual')}
              className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all relative overflow-hidden ${
                planoSelecionado === 'anual'
                  ? 'ring-4 ring-red-500 scale-105'
                  : 'hover:shadow-xl'
              }`}
            >
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Economize R$ {economiaAnual}
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Plano Anual</h3>
                  <p className="text-gray-600">Melhor custo-benefício</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-red-600">R$ {precoAnual.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">por ano</p>
                  <p className="text-xs text-green-600 font-semibold">R$ 16,66/mês</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Tudo do plano mensal</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>2 meses grátis</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Suporte prioritário</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Acesso antecipado a novidades</span>
                </div>
              </div>
            </div>

            {/* Métodos de Pagamento */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Método de Pagamento</h3>
              
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setMetodoPagamento('cartao')}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    metodoPagamento === 'cartao'
                      ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  Cartão de Crédito
                </button>
                <button
                  onClick={() => setMetodoPagamento('pix')}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                    metodoPagamento === 'pix'
                      ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  PIX
                </button>
              </div>

              {metodoPagamento === 'cartao' ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Número do Cartão
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={numeroCartao}
                        onChange={(e) => setNumeroCartao(e.target.value)}
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome no Cartão
                    </label>
                    <input
                      type="text"
                      value={nomeCartao}
                      onChange={(e) => setNomeCartao(e.target.value)}
                      placeholder="Nome como está no cartão"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Validade
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={validade}
                          onChange={(e) => setValidade(e.target.value)}
                          placeholder="MM/AA"
                          maxLength={5}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        CVV
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          placeholder="123"
                          maxLength={4}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
                  >
                    Confirmar Pagamento
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-gray-100 w-48 h-48 mx-auto rounded-xl flex items-center justify-center mb-4">
                    <p className="text-6xl">📱</p>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Escaneie o QR Code com seu app de pagamento
                  </p>
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105"
                  >
                    Já Paguei
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Coluna Direita - Resumo */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl shadow-lg p-6 text-white sticky top-24">
              <h3 className="text-xl font-bold mb-6">Resumo do Pedido</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Plano:</span>
                  <span className="font-semibold">
                    {planoSelecionado === 'mensal' ? 'Mensal' : 'Anual'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Período:</span>
                  <span className="font-semibold">
                    {planoSelecionado === 'mensal' ? '1 mês' : '12 meses'}
                  </span>
                </div>
                {planoSelecionado === 'anual' && (
                  <div className="flex justify-between text-green-300">
                    <span>Economia:</span>
                    <span className="font-semibold">R$ {economiaAnual}</span>
                  </div>
                )}
              </div>

              <div className="border-t-2 border-white/20 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Total:</span>
                  <span className="text-3xl font-bold">
                    R$ {planoSelecionado === 'mensal' ? precoMensal.toFixed(2) : precoAnual.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm">
                  ✓ Pagamento 100% seguro<br />
                  ✓ Cancele quando quiser<br />
                  ✓ Suporte 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
