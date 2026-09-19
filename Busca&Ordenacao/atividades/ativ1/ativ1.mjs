import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { Aluno } from './Aluno.mjs';
import { mergeSort } from './mergeSort.mjs'

// Vetor para teste
const alunos = [
    new Aluno('Mariana Silva', '2024101', 21, 'F', 8.5),
    new Aluno('Carlos Eduardo', '2024105', 23, 'M', 5.5),
    new Aluno('Beatriz Souza', '2024102', 19, 'F', 9.0),
    new Aluno('André Santos', '2024108', 22, 'M', 6.0),
    new Aluno('Juliana Lima', '2024103', 20, 'F', 4.5),
];

async function cadastrarAluno(rl) {
    console.log('\n- CADASTRAR ALUNO -');

    let nome = '';
    while (!nome) {
        nome = (await rl.question('Nome: ')).trim();
        if (!nome) console.log('Informe um nome');
    }

    let ra = '';
    while (!ra) {
        ra = (await rl.question('RA: ')).trim();
        if (!ra) console.log('Informe um RA');
    }

    let idade = null;
    while (idade === null) {
        const numIdade = parseInt((await rl.question('Idade: ')).trim(), 10);
        if (!isNaN(numIdade) && numIdade > 0) {
            idade = numIdade;
        } else {
            console.log('Idade inválida');
        }
    }

    let sexo = '';
    while (!sexo) {
        const strSexo = (await rl.question('Sexo (M/F): ')).trim().toUpperCase();
        if (strSexo === 'M' || strSexo === 'F') {
            sexo = strSexo;
        } else {
            console.log('Informe o sexo.');
        }
    }

    let media = null;
    while (media === null) {
        const numMedia = parseFloat((await rl.question('Média: ')).trim().replace(',', '.'));
        if (!isNaN(numMedia) && numMedia >= 0 && numMedia <= 10) {
            media = numMedia;
        } else {
            console.log('Informe uma média válida');
        }
    }

    const novoAluno = new Aluno(nome, ra, idade, sexo, media);
    alunos.push(novoAluno);
    console.log(`\nAluno "${nome}" cadastrado. Situação: ${novoAluno.resultado}`);
}

function exibirRelatorio(titulo, lista) {
    console.log(`- ${titulo} -`);

    if (lista.length === 0) {
        console.log('Nenhum aluno encontrado cadastrado');
    } else {
        console.table(
            lista.map(a => ({
                NOME: a.nome,
                RA: a.ra,
                IDADE: a.idade,
                SEXO: a.sexo,
                MÉDIA: a.media.toFixed(1),
                RESULTADO: a.resultado
            }))
        );
        console.log(`Total de registros: ${lista.length}`);
    }
}

async function main() {
    const rl = readline.createInterface({ input, output });

    try {
        let executando = true;
        while (executando) {
            console.clear()
            console.log('1. Cadastrar Alunos');
            console.log('2. Relatório de Alunos em ordem crescente por Nome');
            console.log('3. Relatório de Alunos em ordem decrescente por RA');
            console.log('4. Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados');
            console.log('0. Sair');

            const opcao = (await rl.question('Opção: ')).trim();

            switch (opcao) {
                case '1':
                    await cadastrarAluno(rl);
                    break;

                case '2': {
                    const ordenadosPorNome = mergeSort(alunos, (elem1, elem2) => elem1.nome >= elem2.nome);
                    exibirRelatorio('Relatório de Alunos em ordem crescente por Nome', ordenadosPorNome);
                    break;
                }

                case '3': {
                    const ordenadosPorRA = mergeSort(alunos, (elem1, elem2) => Number(elem1.ra) <= Number(elem2.ra));
                    exibirRelatorio('Relatório de Alunos em ordem decrescente por RA', ordenadosPorRA);
                    break;
                }

                case '4': {
                    const aprovados = alunos.filter(a => a.resultado === "Aprovado");
                    const aprovadosOrdenados = mergeSort(aprovados, (elem1, elem2) => elem1.nome >= elem2.nome);
                    exibirRelatorio('Relatório de Alunos em ordem crescente por Nome (Apenas Aprovados)', aprovadosOrdenados);
                    break;
                }

                case '0':
                    console.log('\nEncerrando...\n');
                    executando = false;
                    break;

                default:
                    console.log('\nOpção inválida!');
            }

            if (executando) {
                await rl.question('\nPressione ENTER para voltar ao menu...');
            }
        }
    } finally {
        rl.close();
    }
}

main();
