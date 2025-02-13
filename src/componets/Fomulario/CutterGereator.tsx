const artigosInvalidos = ["um", "uma", "o", "a", "os", "as", "uns", "umas", "do", "da", "dos", "das", "no", "na", "nos", "nas"];

const isArtigoInvalido = (titulo: string): boolean => {
  const palavras = removeAcentuacao(titulo).toLowerCase().split(" ");
  return palavras.some((palavra) => artigosInvalidos.includes(palavra));
};

const generateCutterCode = () => {
  if (!lastName) {
    setErrorMessage("Por favor, insira o último nome.");
    return;
  }

  if (title && isArtigoInvalido(title)) {
    setErrorMessage("O título inserido não pode ser considerado um artigo.");
    setGeneratedCode("");
    return;
  }

  setErrorMessage(""); // Limpa qualquer mensagem de erro anterior

  const normalizedLastName = removeAcentuacao(lastName).toLowerCase();
  const cutterCode = selecionaCutter(normalizedLastName, cutterData, 0);
  const firstLetter = lastName[0].toUpperCase();
  const titleInitial = title ? title[0].toLowerCase() : "";

  const finalCode = `${firstLetter}${cutterCode}${titleInitial}`;
  setGeneratedCode(finalCode);
};
