const catalogo = [
  {
    id: 1,
    titulo: "Carros",
    tipo: "filme",
    ano: 2006,
    generos: ["infantil", "comédia"],
    nota: 10,
    assistido: true
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime"],
    nota: 9.4,
    assistido: true
  },
  {
    id: 3,
    titulo: "Maze Runner: Correr ou Morrer",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "ação"],
    nota: 8.5,
    assistido: true
  },
  {
    id: 4,
    titulo: "Stranger Things",
    tipo: "serie",
    ano: 2016,
    generos: ["Terror"],
    nota: 8.8,
    assistido: false
  },
  {
    id: 5,
    titulo: "Interstellar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "drama"],
    nota: 8.6,
    assistido: false
  },
  {
    id: 6,
    titulo: "High Potential",
    tipo: "serie",
    ano: 2024,
    generos: ["ficção policial", "drama"],
    nota: 9.5,
    assistido: true
  }
];

console.log("--- B.2. Estrutura do Catálogo ---");
console.log(catalogo);

console.log("Primeiro título:", catalogo[0].titulo);

const ultimoItem = catalogo[catalogo.length - 1];
console.log("Ano do último item:", ultimoItem.ano);

const terceiroItemGeneros = catalogo[2].generos;
if (terceiroItemGeneros && terceiroItemGeneros.length >= 2) {
  console.log("Segundo gênero do terceiro item:", terceiroItemGeneros[1]);
} else {
  console.log("O terceiro item não possui um segundo gênero.");
}


// ==========================================
// B.3. Iterações com iterators
// ==========================================
console.log("\n--- B.3.A. Listagem com forEach ---");
catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

console.log("\n--- B.3.B. Transformação com map ---");
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em Caixa Alta:", titulosEmCaixaAlta);

console.log("\n--- B.3.C. Seleção com filter ---");
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(`Quantidade de itens não assistidos: ${naoAssistidos.length}`);

console.log("\n--- B.3.D. Busca com find ---");
const itemNotaAlta = catalogo.find(item => item.nota >= 9);
if (itemNotaAlta) {
  console.log(`Primeiro item com nota >= 9: ${itemNotaAlta.titulo} (Nota: ${itemNotaAlta.nota})`);
} else {
  console.log("Nenhum item com nota >= 9 foi encontrado.");
}

console.log("\n--- B.3.E. Agregação com reduce ---");
const somaNotasGeral = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaGeral = somaNotasGeral / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const somaNotasAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);
const mediaAssistidos = assistidos.length > 0 ? somaNotasAssistidos / assistidos.length : 0;

console.log(`Média geral das notas: ${mediaGeral.toFixed(2)}`);
console.log(`Média das notas (apenas assistidos): ${mediaAssistidos.toFixed(2)}`);

console.log("\n--- B.3.F. Checagens com some e every ---");
const temAnteriorA2000 = catalogo.some(item => item.ano < 2000);
console.log(`Existe algum item lançado antes de 2000? ${temAnteriorA2000}`);

const todosTêmGenero = catalogo.every(item => item.generos && item.generos.length > 0);
console.log(`Todos os itens têm pelo menos 1 gênero? ${todosTêmGenero}`);


// ==========================================
// B.4. Saída na tela (DOM simples)
// ==========================================
const totalItens = catalogo.length;
const totalFilmes = catalogo.filter(item => item.tipo === "filme").length;
const totalSeries = catalogo.filter(item => item.tipo === "serie").length;
const totalNaoAssistidos = naoAssistidos.length;

// Ordena uma cópia do catálogo por nota decrescente e pega os 3 primeiros
const top3 = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

const outputDiv = document.getElementById("output");

outputDiv.innerHTML = `
  <h2>Resumo do Catálogo</h2>
  <p><strong>Total de itens:</strong> ${totalItens}</p>
  <p><strong>Filmes:</strong> ${totalFilmes} | <strong>Séries:</strong> ${totalSeries}</p>
  <p><strong>Não assistidos:</strong> ${totalNaoAssistidos}</p>
  <p><strong>Média geral de notas:</strong> ${mediaGeral.toFixed(2)}</p>
  
  <h3>Top 3 Maiores Notas</h3>
  <ol>
    ${top3.map(item => `<li><strong>${item.titulo}</strong> — Nota:${item.nota}</li>`).join('')}
  </ol>
`;