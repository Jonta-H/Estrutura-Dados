// JONATA HENRIQUE DA SILVA CARÁ - 27274

import AlunosABB from './AlunosABB.mjs'
import { dados } from './dados.mjs'

let alunos = new AlunosABB()

// ======= TESTES DE INSERÇÃO
// Função forEach para cadastro dos alunos com ternário para cenários de sucesso ou não
console.log("===== TESTES DE INSERÇÃO")
dados.forEach(aluno => {
    console.log(alunos.insert(aluno) ? 
    `Aluno ${aluno.ra} cadastrado com sucesso!` : `RA ${aluno.ra} já cadastrado.`
)
})

// Tentativa de inserção de RA repetido. Retorna False e a mensagem correta
let testeErro = { "ra": 2026030, "nome": "Carlos Mendes", "media": 4.0}
console.log(alunos.insert(testeErro) ? 
    `Aluno ${testeErro.ra} cadastrado com sucesso!` : `RA ${testeErro.ra} já cadastrado.`
)



console.log()
console.log()



// ======= TESTES DE LISTAGEM
// Listagem dos alunos, com quantidade, altura da árvore, quantidade de folhas e média
console.log("===== TESTES DE LISTAGEM")
console.log("Lista de alunos:")
let listagem = []
alunos.inOrderTraversal(aluno => listagem.push(aluno))
console.table(listagem)
console.log("Quantidade de alunos:", alunos.count())
console.log("Altura da árvore:", alunos.height())
console.log("Quantidade de folhas:", alunos.countLeaves())
console.log("Média:", alunos.averageGrade())



console.log()
console.log()



// ======= TESTES DE BUSCA
// Busca pelos RA 2026075 e 2026099. O primeiro existe e o segundo não
console.log("===== TESTES DE BUSCA")
let { ra, nome, media } = alunos.searchStudent(2026075) || {}
console.log(nome ? `RA: ${ra}  NOME: ${nome}  MEDIA: ${media}` : `RA não encontrado`);

({ ra, nome, media } = alunos.searchStudent(2026099) || {})
console.log(nome ? `RA: ${ra}  NOME: ${nome}  MEDIA: ${media}` : `RA não encontrado`)



console.log()
console.log()



// ======= TESTES DE REMOÇÃO
// Remoção nodo folha
console.log("===== TESTES DE REMOÇÃO")
alunos.remove(2026025)
listagem = []
console.log("Removido:", 2026025)
alunos.inOrderTraversal(aluno => listagem.push(aluno))
console.table(listagem)

// Remoção nodo grau 1
alunos.remove(2026090)
listagem = []
console.log("Removido:", 2026090)
alunos.inOrderTraversal(aluno => listagem.push(aluno))
console.table(listagem)

// Remoção nodo grau 2
alunos.remove(2026050)
listagem = []
console.log("Removido:", 2026050)
alunos.inOrderTraversal(aluno => listagem.push(aluno))
console.table(listagem)



console.log()
console.log()



// ======= PERCURSO PRÉ-ORDEM DA ÁRVORE FINAL
listagem = []
console.log("===== NOVA LISTA DE ALUNOS")
alunos.preOrderTraversal(aluno => listagem.push(aluno))
console.table(listagem)
console.log("Quantidade de alunos:", alunos.count())
console.log("Altura da árvore:", alunos.height())