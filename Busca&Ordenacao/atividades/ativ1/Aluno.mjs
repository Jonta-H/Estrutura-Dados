export class Aluno {
    constructor(nome, ra, idade, sexo, media) {
        this.nome = String(nome).trim();
        this.ra = String(ra).trim();
        this.idade = Number(idade);
        this.sexo = String(sexo).trim().toUpperCase();
        this.media = Number(media);
        this.resultado = this.getSituacao();
    }

    getSituacao() {
        return this.media >= 6.0 ? 'Aprovado' : 'Reprovado';
    }
}