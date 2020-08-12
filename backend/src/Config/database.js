module.exports = {
    //Diz qual banco de dados vai ser usado
    dialect: "mysql",

    //Diz qual o endereço da base de dados
    host: "localhost",

    // Diz qual o username
    username: "root",

    //Diz qual a senha
    password: "bcd127",

    //Diz o nome do database
    database: "senai_overflow",

    // Descreve o processo do banco no console
    logging: console.log,

    define: {
        //Diz quando foi a criação e a atualização de um campo
        timestamp: true,
        // Transforma padrão camel-case em underscore. Exemplo: NomeAluno = nome_aluno
        underscored: true,
    }
}