enum Profissao{
    atriz,
    pedreiro
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Profissao
}

let maria = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.atriz
};
let roberto = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.pedreiro
};
let laura = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.atriz
};
let carlos = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.pedreiro
};