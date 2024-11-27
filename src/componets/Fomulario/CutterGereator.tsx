import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
  const [copyFeedback, setCopyFeedback] = useState<string>("");

  useEffect(() => {
    const fetchCutterData = async () => {
      try {
        const response = await axios.get("https://cutterapi.vercel.app/api/data");
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

  const handleCopy = () => {
    setCopyFeedback("Código Copiado!");
    setTimeout(() => setCopyFeedback(""), 2000);
  };

  return (
    <Container>
      <Title>Gerador de Código Cutter</Title>
      <FormGroup>
        <Label>Último Nome (obrigatório):</Label>
        <Input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Digite o último nome"
        />
      </FormGroup>
      <FormGroup>
        <Label>Título da Obra (opcional):</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite o título da obra"
        />
      </FormGroup>
      <Button onClick={generateCutterCode}>Gerar Código Cutter</Button>
      {generatedCode && (
        <ResultContainer>
          <strong>Seu Código Cutter:</strong>{" "}
          <CopyToClipboard text={generatedCode} onCopy={handleCopy}>
            <Code>{generatedCode}</Code>
          </CopyToClipboard>
          {copyFeedback && <Feedback>{copyFeedback}</Feedback>}
        </ResultContainer>
      )}
    </Container>
  );
};




// Styled Components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #4a4a4a;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 16pt;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  height: 60px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  height: 50px;


  &:hover {
    background-color: #0056b3;
  }
`;

const ResultContainer = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: green;
`;

const Code = styled.span`
  cursor: pointer;
  color: blue;
  text-decoration: underline;
`;

const Feedback = styled.span`
  color: green;
  margin-left: 10px;
  font-style: italic;
`;

export default CutterGenerator;
