"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["atriz"] = 0] = "atriz";
    Profissao[Profissao["pedreiro"] = 1] = "pedreiro";
})(Profissao || (Profissao = {}));
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
