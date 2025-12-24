import Link from 'next/link';
import { BookOpen, Github, Info } from 'lucide-react';
import CutterGenerator from '@/components/CutterGenerator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-blue-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">Notação de Autor</h1>
              <p className="text-xs text-slate-600">Gerador de Código Cutter</p>
            </div>
          </div>
          <nav className="flex items-center gap-3">
            <Link href="/about">
              <button className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                <Info className="h-4 w-4" />
                Sobre
              </button>
            </Link>
            <a
              href="https://github.com/josevanderleineto/notacao_de_autor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-3 py-2 border border-slate-300 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors duration-200">
                <Github className="h-4 w-4" />
                GitHub
              </button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Gerador de Código Cutter
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ferramenta automatizada para gerar códigos de classificação bibliográfica. 
              Ideal para bibliotecários, pesquisadores e desenvolvedores que trabalham com 
              sistemas de catalogação.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
              <div className="text-2xl font-bold text-blue-900 mb-2">⚡</div>
              <h3 className="font-semibold text-slate-900 mb-1">Rápido</h3>
              <p className="text-sm text-slate-600">Gere códigos instantaneamente</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
              <div className="text-2xl font-bold text-blue-900 mb-2">✓</div>
              <h3 className="font-semibold text-slate-900 mb-1">Preciso</h3>
              <p className="text-sm text-slate-600">Baseado em tabelas validadas</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
              <div className="text-2xl font-bold text-blue-900 mb-2">🔓</div>
              <h3 className="font-semibold text-slate-900 mb-1">Aberto</h3>
              <p className="text-sm text-slate-600">Código aberto e colaborativo</p>
            </div>
          </div>
        </div>

        {/* Main Tool */}
        <div className="mb-12">
          <CutterGenerator />
        </div>

        {/* Info Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-3">Como funciona?</h3>
            <ol className="space-y-2 text-slate-700 text-sm">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 min-w-6">1.</span>
                <span>Insira o <strong>último nome do autor</strong> (obrigatório)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 min-w-6">2.</span>
                <span>Opcionalmente, adicione o <strong>título da obra</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 min-w-6">3.</span>
                <span>Clique em <strong>Gerar Código Cuttercle</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 min-w-6">4.</span>
                <span>Copie o código gerado para usar em sua classificação</span>
              </li>
            </ol>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h3 className="font-bold text-emerald-900 mb-3">Encontrou um erro?</h3>
            <p className="text-slate-700 text-sm mb-4">
              Se você identificou um problema ou tem uma sugestão de melhoria, 
              entre em contato através do GitHub ou envie um email. Sua contribuição 
              é valiosa para melhorar esta ferramenta!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/josevanderleineto/notacao_de_autor/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Github className="h-4 w-4" />
                  Reportar no GitHub
                </button>
              </a>
              <Link href="/about">
                <button className="w-full sm:w-auto border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Saiba como contribuir
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Projeto</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <Link href="/" className="hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-600 transition-colors">
                    Sobre
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Comunidade</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a
                    href="https://github.com/josevanderleineto/notacao_de_autor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/josevanderleineto/notacao_de_autor/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Issues
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Contato</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a
                    href="mailto:jose.vanderlei.neto@gmail.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/josevanderleineto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Perfil GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-300 pt-8 text-center text-sm text-slate-600">
            <p>
              © 2024 Notação de Autor. Projeto de código aberto. 
              <a
                href="https://github.com/josevanderleineto/notacao_de_autor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 ml-1"
              >
                Contribua no GitHub →
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
