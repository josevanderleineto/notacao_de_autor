import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Página não encontrada</h2>
        <p className="text-slate-600 mb-8">
          Desculpe, a página que você está procurando não existe.
        </p>
        <Link href="/">
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
            Voltar para Home
          </button>
        </Link>
      </div>
    </div>
  );
}
