import sequelize, { Sequelize, DataTypes} from "sequelize";

// Criando a conexão com o banco
const conexaoSequelize = new Sequelize("loja", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

// Verifica se a conexão com banco foi bem sucedida
conexaoSequelize.authenticate()
  .then(() => {
    console.log("------------------------")
    console.log('Conexão com banco: ok');
  })
  .catch(err => {
    console.error('Conexão com banco: erro');
  });

// Cria o model ususario
const Usuario = conexaoSequelize.define( "usuario", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Cria o model produto
const Produto = conexaoSequelize.define( "produto", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Usuario.sync({ force: true }); // roda este codigo so uma vez se nao vai ficar criando novas tabelas 
// Produto.sync({ force: true }); // roda este codigo so uma vez se nao vai ficar criando novas tabelas 

// exportando os models das tabelas
export {Usuario, Produto};