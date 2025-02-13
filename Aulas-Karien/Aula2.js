const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let tarefas = [
    {id: 1, descrição:"Estudar NodeJs"},
    {id: 2, descrição:"Estudar C#"},
    {id: 3, descrição:"Estudar C"},
    {id: 4, descrição:"Estudar JavaScript"},
    {id: 5, descrição:"Estudar e fazer o Trello"},
    {id: 6, descrição:"Fazer a SA"},
    {id: 7, descrição:"Arrumar um trabalho"},
];

app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

app.post('/tarefas/:id', (req, res) => {
    const { descrição } = req.body;

    let tarefa = tarefas.find(t => t.id === id);

    if (tarefa) {
        tarefa.descrição = descrição; 
        res.status(200).json(tarefa);  
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada!' });  
    }
});

app.delete('/tarefas/:id', (req, res) => {
    const index = tarefas.findIndex(t => t.id === id);

    if (index !== -1) {
        tarefas.splice(index, 1); 
        res.status(200).json({ message: 'Tarefa deletada com sucesso!' });
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada!' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});