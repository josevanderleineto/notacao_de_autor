import Link from 'next/link';
import { Github, Mail, BookOpen, Users, Code } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-blue-900 mb-2">
                Sobre o Projeto
              </h1>
              <p className="text-slate-600">
                Conheça a Notação de Autor e como você pode contribuir
              </p>
            </div>
            <Link href="/">
              <button className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                ← Voltar
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8 max-w-4xl">
          {/* Seção Principal */}
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6">
            <div className="mb-4 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-blue-900">
                O que é Notação de Autor?
              </h2>
            </div>
            <div className="space-y-4 text-slate-700">
              <p>
                A <strong>Notação de Autor</strong> é um sistema de classificação bibliográfica 
                utilizado em bibliotecas para organizar e localizar livros e outros materiais. 
                O código Cutter é uma parte essencial deste sistema, criando uma identificação 
                única para cada obra com base no sobrenome do autor e título.
              </p>
              <p>
                Este projeto fornece uma ferramenta automatizada para gerar códigos Cutter, 
                facilitando o trabalho de bibliotecários e profissionais da informação.
              </p>
              <p className="text-sm bg-blue-50 p-3 rounded-lg border border-blue-200">
                <strong>Objetivo:</strong> Simplificar e acelerar o processo de classificação 
                bibliográfica, tornando-o mais acessível e eficiente para profissionais e 
                desenvolvedores.
              </p>
            </div>
          </div>

          {/* Seção de Contribuição */}
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6">
            <div className="mb-4 flex items-center gap-3">
              <Users className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-blue-900">
                Como Contribuir
              </h2>
            </div>
            <p className="text-slate-600 mb-4">
              Desenvolvedores e bibliotecários podem contribuir de várias formas
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {/* Contribuição 1 */}
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Code className="h-4 w-4 text-emerald-600" />
                  Desenvolvimento
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Melhore o código, adicione novas funcionalidades ou otimize o desempenho.
                </p>
                <a
                  href="https://github.com/josevanderleineto/notacao_de_autor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Visite o repositório →
                </a>
              </div>

              {/* Contribuição 2 */}
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-emerald-600" />
                  Validação Bibliográfica
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Valide a precisão dos códigos Cutter e tabelas de classificação.
                </p>
                <a
                  href="https://github.com/josevanderleineto/notacao_de_autor/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Abra uma issue →
                </a>
              </div>
            </div>
          </div>

          {/* Seção de Contato */}
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6">
            <div className="mb-4 flex items-center gap-3">
              <Mail className="h-6 w-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-blue-900">
                Entre em Contato
              </h2>
            </div>
            <p className="text-slate-600 mb-4">
              Encontrou um erro ou tem uma sugestão? Nos contacte!
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-blue-900 mb-2">GitHub</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Abra uma issue ou pull request no repositório do projeto.
                </p>
                <a
                  href="https://github.com/josevanderleineto/notacao_de_autor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium"
                >
                  <Github className="h-4 w-4" />
                  Ir para GitHub
                </a>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-blue-900 mb-2">Email</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Entre em contato direto com o mantenedor do projeto.
                </p>
                <a
                  href="mailto:jose.vanderlei.neto@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium"
                >
                  <Mail className="h-4 w-4" />
                  Enviar Email
                </a>
              </div>
            </div>
          </div>

          {/* Seção de Tipos de Contribuição */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Tipos de Contribuição Bem-vindo
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span>Correção de bugs e problemas identificados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span>Melhorias de desempenho e otimização</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span>Novas funcionalidades e recursos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span>Documentação e melhorias de acessibilidade</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span>Testes e validação de funcionalidades</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
