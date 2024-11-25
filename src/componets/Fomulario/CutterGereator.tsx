import React, { useEffect, useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard"; // Importando a biblioteca para copiar para a área de transferência

type CutterEntry = [string, string];

const removeAcentuacao = (texto: string): string => {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const selecionaCutter = (nome: string, lista: CutterEntry[], i: number): string => {
  const novaLista: CutterEntry[] = [];
  for (const tupla of lista) {
    if (i >= nome.length) {
      return lista[0][1];
    }
    if (i >= tupla[0].length) {
      continue;
    }
    if (nome[i] === tupla[0][i]) {
      novaLista.push(tupla);
    }
  }

  if (novaLista.length > 0) {
    return selecionaCutter(nome, novaLista, i + 1);
  } else {
    return lista[0][1];
  }
};

const CutterGenerator: React.FC = () => {
  const [cutterData, setCutterData] = useState<CutterEntry[]>([]);
  const [lastName, setLastName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [copyFeedback, setCopyFeedback] = useState<string>(""); // Estado para feedback de cópia

  useEffect(() => {
    const fetchCutterData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/data");
        const formattedData: CutterEntry[] = response.data.map((entry: { texto: string; codigo: string }) => [
          removeAcentuacao(entry.texto).toLowerCase(),
          entry.codigo,
        ]);
        setCutterData(formattedData.sort((a, b) => a[0].localeCompare(b[0])));
      } catch (error) {
        console.error("Erro ao buscar dados da API Cutter:", error);
      }
    };

    fetchCutterData();
  }, []);

  const generateCutterCode = () => {
    if (!lastName) {
      alert("Por favor, insira o último nome.");
      return;
    }

    const normalizedLastName = removeAcentuacao(lastName).toLowerCase();
    const cutterCode = selecionaCutter(normalizedLastName, cutterData, 0);
    const firstLetter = lastName[0].toUpperCase();
    const titleInitial = title ? title[0].toLowerCase() : "";

    const finalCode = `${firstLetter}${cutterCode}${titleInitial}`;
    setGeneratedCode(finalCode);
  };

  // Função para feedback visual ao copiar
  const handleCopy = () => {
    setCopyFeedback("Código Copiado!");
    setTimeout(() => setCopyFeedback(""), 2000); // Limpa o feedback após 2 segundos
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Gerador de Código Cutter</h1>
      <div style={{ marginBottom: "10px" }}>
        <label>Último Nome (obrigatório):</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Digite o último nome"
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Título da Obra (opcional):</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite o título da obra"
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>
      <button onClick={generateCutterCode} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Gerar Código Cutter
      </button>
      {generatedCode && (
        <div style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>
          <strong>Seu Código Cutter:</strong>
          <CopyToClipboard text={generatedCode} onCopy={handleCopy}>
            <span
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              {generatedCode}
            </span>
          </CopyToClipboard>
          {copyFeedback && (
            <span style={{ color: "green", marginLeft: "10px", fontStyle: "italic" }}>
              {copyFeedback}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default CutterGenerator;

