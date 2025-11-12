'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChefHat, ShoppingCart, Gift, Store, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Início', icon: ChefHat },
    { href: '/ingredientes', label: 'Ingredientes', icon: ShoppingCart },
    { href: '/natal', label: 'Receitas de Natal', icon: Gift },
    { href: '/mercados', label: 'Mercados', icon: Store },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-red-600 to-yellow-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl hover:scale-105 transition-transform">
            <ChefHat className="w-8 h-8" />
            <span className="hidden sm:inline">Cozinha Inteligente</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    isActive(link.href)
                      ? 'bg-white text-red-600 font-semibold shadow-md'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Button */}
          <Link
            href="/cadastro"
            className="hidden md:flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105"
          >
            <User className="w-5 h-5" />
            <span>Minha Conta</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive(link.href)
                      ? 'bg-white text-red-600 font-semibold'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <Link
              href="/cadastro"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 bg-white text-red-600 px-4 py-3 rounded-lg font-semibold"
            >
              <User className="w-5 h-5" />
              <span>Minha Conta</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
