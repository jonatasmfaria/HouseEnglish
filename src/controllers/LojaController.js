// Chamadas da loginha page
const LojaController = {
    lojaPage: (req, res) => {
        let listaDeProdutos = [
            { id: 1, img: 'caneta.jpeg', nome: "Caneta Tradutora", preco: 199.99 },
            { id: 2, img: 'caneca.jpeg', nome: "Caneca Friends", preco: 39.99 },
            { id: 3, img: 'livros.jpeg', nome: "Kit Livros Cambridge", preco: 299.99 },
            { id: 4, img: 'livro-ilustrado.jpeg', nome: "Livro Ilustrado", preco: 79.99 },
            { id: 5, img: 'planner.jpeg', nome: "Planner", preco: 89.99 },
            { id: 6, img: 'atividades.jpeg', nome: "365 atividades em Inglês", preco: 149.99 },
            { id: 7, img: '50-aulas-ingles.jpeg', nome: "Livro 50 aulas em Ingles", preco: 99.99 }
        ]
        return res.render("loja.ejs", { produtos: listaDeProdutos })
    }
}

module.exports = LojaController