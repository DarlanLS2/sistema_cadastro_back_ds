// Importações:
import express from "express"; 
import mysql from "mysql2";
import conexao from "./conexao.js"; // Importa a conexao com o banco 

const server = express(); // Instancia do express

// Sapo
const sapo =                                                    
    "⬛⬛⬛⬛⬛🟩🟩⬛🟩🟩⬛⬛⬛\n"+
    "⬛⬛⬛⬛🟩🟩🟩🟩🟩🟩🟩⬛⬛\n"+ 
    "⬛⬛⬛🟩🟩⬜⬛⬜⬜⬛🟩⬛⬛\n"+ 
    "⬛⬛⬛🟩🟩🟩🟩🟩🟩🟩⬛⬛⬛\n"+
    "⬛⬛🟩🟩🟩🟩🟫🟫🟫🟫⬛⬛⬛\n"+
    "⬛⬛🟩🟩🟩🟩🟩🟩🟩⬛⬛⬛⬛\n";


// APi que retorna um sapo
server.get("/", (req, res) => {
    return res.send("<pre>" + sapo + "</pre>");
});

// API que retorna o json da tabela usuario
server.get("/usuario", (req, res) => {
    conexao.query("SELECT * FROM usuario", (err, resultado) => {
        res.json(resultado);
    })
});

// API que retorna o json da tabel produto
server.get("/produto", (req, res) => {
    conexao.query("SELECT * FROM produto", (err, resultado) => {
        res.json(resultado);
    })
});

// Inicia o server na porta 3030
server.listen(3030, () => {
    console.log("Conexao com o server: ok");
});
