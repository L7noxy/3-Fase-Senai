const express = required("express"); // importar/requerir o framework express
const app = express(); // criar uma aplicação web ultilzando o framework express

var veiculos = ["Corsa", "BMW", "Ferrari", "Suzuki", "Mitsubishi Lancer"];

app.get('/veiculos', (req, res) => {
    res.json(veiculos);
}) // ele vai pegar as informações do array veiculos e vai dar uma resposta

app.get('/veiculos/:placa', (req,res) => {

    const {placa} = req.params; // importar  parametros da URL
    const veiculo = veiculos.find(v => v.placa === placa);

    if(veiculo){
        res.json(veiculo);
    }
    
    else{
        res.status(404).json({message:'não tem um veiculo com essa placa'})
    }
})

app.post('/veiculos', (req, res) => {
    const {placa, modelo, motor, ano, peso} = req.body
    const  veiculo = {placa, modelo, motor, ano, peso};
    veiculo.push(veiculo);
    res.status(201).json({message: 'Veiculos Cadastrado com sucesso'})
})

app.put