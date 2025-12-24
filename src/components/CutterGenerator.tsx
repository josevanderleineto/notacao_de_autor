'use client';

import { useEffect, useState } from 'react';
import { Copy, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

type CutterItem = {
  texto: string;
  codigo: string;
};

const artigosInvalidos = [
  "um", "uma", "o", "a", "os", "as", "uns", "umas",
  "do", "da", "dos", "das", "no", "na", "nos", "nas",
];

const removeAcentuacao = (texto: string): string =>
  texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const getTitleInitial = (titulo?: string): string => {
  if (!titulo) return "";
  const palavras = removeAcentuacao(titulo).toLowerCase().trim().split(" ");
  const primeiraValida = palavras.find(
    (palavra) => !artigosInvalidos.includes(palavra)
  );
  return primeiraValida ? primeiraValida[0].toLowerCase() : "";
};

const selecionaCutter = (
  normalizedLastName: string,
  cutterData: CutterItem[]
): string => {
  if (!normalizedLastName) return "000";
  if (!Array.isArray(cutterData) || cutterData.length === 0) return "000";

  const alvo = normalizedLastName.toLowerCase().trim();
  const ordenada = [...cutterData].sort((a, b) =>
    a.texto.localeCompare(b.texto, "pt-BR")
  );

  const exato = ordenada.find(
    (item) =>
      item?.texto &&
      item.texto.toLowerCase().trim() === alvo
  );
  if (exato?.codigo) return exato.codigo;

  let melhorPrefixo: CutterItem | null = null;
  for (const item of ordenada) {
    if (!item?.texto) continue;
    const base = item.texto.toLowerCase().trim();
    if (alvo.startsWith(base)) {
      if (
        !melhorPrefixo ||
        base.length > melhorPrefixo.texto.toLowerCase().trim().length
      ) {
        melhorPrefixo = item;
      }
    }
  }
  if (melhorPrefixo?.codigo) return melhorPrefixo.codigo;

  let candidato: CutterItem | null = null;
  for (const item of ordenada) {
    if (!item?.texto) continue;
    const t = item.texto.toLowerCase().trim();
    if (t <= alvo) {
      if (!candidato || t > candidato.texto.toLowerCase().trim()) {
        candidato = item;
      }
    }
  }
  if (candidato?.codigo) return candidato.codigo;

  return ordenada[0]?.codigo || "000";
};

export default function CutterGenerator() {
  const [cutterData, setCutterData] = useState<CutterItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchCutter = async () => {
      try {
        const response = await fetch(
          "https://notacao-de-autor-api.vercel.app/api/data"
        );
        if (!response.ok) {
          throw new Error("Erro ao carregar tabela Cutter");
        }
        const data: CutterItem[] = await response.json();
        setCutterData(data);
        setFetchError(null);
      } catch (error) {
        console.error(error);
        setFetchError("Não foi possível carregar a tabela Cutter. Tente novamente.");
        
        // Enviar erro para a API
        try {
          await fetch("https://notacao-de-autor-api.vercel.app/api/errors", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              message: "Erro ao carregar tabela Cutter",
              error: String(error),
              timestamp: new Date().toISOString(),
              userAgent: navigator.userAgent,
            }),
          });
        } catch (err) {
          console.error("Erro ao enviar relatório de erro:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCutter();
  }, []);

  const generateCutterCode = () => {
    if (!lastName.trim()) {
      setErrorMessage("Por favor, insira o último nome do autor.");
      setGeneratedCode("");
      return;
    }

    if (loading) {
      setErrorMessage("Ainda carregando a tabela Cutter. Tente novamente em instantes.");
      setGeneratedCode("");
      return;
    }

    if (fetchError || !cutterData.length) {
      setErrorMessage("Tabela Cutter não carregada. Verifique a API.");
      setGeneratedCode("");
      return;
    }

    setErrorMessage("");
    setCopied(false);

    const normalizedLastName = removeAcentuacao(lastName).toLowerCase().trim();
    const cutterCode = selecionaCutter(normalizedLastName, cutterData);

    const firstLetter = lastName.trim()[0].toUpperCase();
    const titleInitial = getTitleInitial(title);

    const finalCode = `${firstLetter}${cutterCode}${titleInitial}`;
    setGeneratedCode(finalCode);
  };

  const handleCopy = async () => {
    if (!generatedCode) return;
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar:", err);
      setErrorMessage("Não foi possível copiar o código.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      generateCutterCode();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Header */}
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            Gerador de Código Cutter
          </h2>
          <p className="text-slate-600">
            Gere códigos de classificação bibliográfica automaticamente
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {loading && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-3">
              <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
              <span className="text-blue-800">Carregando tabela Cutter...</span>
            </div>
          )}

          {fetchError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <span className="text-red-800">{fetchError}</span>
            </div>
          )}

          {/* Último Nome */}
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-slate-700 font-medium block">
              Último nome do autor *
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ex.: Santos"
              disabled={loading}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          {/* Título */}
          <div className="space-y-2">
            <label htmlFor="title" className="text-slate-700 font-medium block">
              Título da obra (opcional)
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ex.: A natureza do espaço"
              disabled={loading}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          {/* Botão */}
          <button
            onClick={generateCutterCode}
            disabled={loading}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Gerar Código Cutter
          </button>

          {/* Erro */}
          {errorMessage && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <span className="text-red-800">{errorMessage}</span>
            </div>
          )}

          {/* Resultado */}
          {generatedCode && !errorMessage && (
            <div className="space-y-3 pt-2">
              <p className="text-sm text-slate-600 font-medium">Código gerado:</p>
              <div
                onClick={handleCopy}
                className="p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:bg-slate-100 hover:border-blue-400 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <code className="text-lg font-bold text-blue-900 font-mono tracking-wider">
                    {generatedCode}
                  </code>
                  {copied ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600 transition-all duration-200" />
                  ) : (
                    <Copy className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors duration-200" />
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  {copied ? "✓ Copiado!" : "Clique para copiar"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
