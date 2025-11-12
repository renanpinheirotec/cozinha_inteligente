'use client';

import { useState } from 'react';
import { User, Mail, Lock, Calendar, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CadastroPage() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('cadastro');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (modo === 'cadastro') {
      // Simular cadastro
      setCadastroSucesso(true);
      setTimeout(() => {
        window.location.href = '/ingredientes';
      }, 2000);
    } else {
      // Simular login
      window.location.href = '/ingredientes';
    }
  };

  if (cadastroSucesso) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Bem-vindo à Cozinha Inteligente!
          </h2>
          <p className="text-gray-600 mb-6">
            Seu período de teste gratuito de 7 dias começou agora.
          </p>
          <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-700">
              Você será redirecionado em instantes...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            {modo === 'cadastro' ? 'Criar Conta' : 'Entrar'}
          </h1>
          <p className="text-gray-600">
            {modo === 'cadastro' 
              ? 'Comece seu teste grátis de 7 dias' 
              : 'Acesse sua conta'}
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setModo('cadastro')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                modo === 'cadastro'
                  ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Cadastrar
            </button>
            <button
              onClick={() => setModo('login')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                modo === 'login'
                  ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Entrar
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {modo === 'cadastro' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome"
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {modo === 'cadastro' && (
              <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">
                      7 Dias Grátis
                    </p>
                    <p className="text-sm text-gray-600">
                      Teste todas as funcionalidades sem compromisso. 
                      Após o período, apenas R$ 19,99/mês.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              {modo === 'cadastro' ? 'Começar Teste Grátis' : 'Entrar'}
            </button>
          </form>

          {modo === 'login' && (
            <div className="mt-6 text-center">
              <Link href="/cadastro" className="text-red-600 hover:underline font-medium">
                Esqueceu a senha?
              </Link>
            </div>
          )}
        </div>

        {/* Benefícios */}
        {modo === 'cadastro' && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-gray-800 mb-4 text-center">
              O que você ganha:
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700">Receitas ilimitadas personalizadas</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700">Comparação de preços em tempo real</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700">Listas de compras inteligentes</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700">Receitas especiais de Natal</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
