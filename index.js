//API REST Basic ...

const express = require('express');
const bodyParser = require('body-parser');

// config. da API Express: usada para ter acesso ao REST
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// req : busca os dados enviados pela rota, enviados pelo back-end
// res : retorna os dados p. o cliente (front-end) pela mesma rota

// abaixo estão funções que definem sub-URL's após '/', criando assim um caminho de comunicação entre o back e o front pelas diferentes telas da aplicação.

app.get('/', (req, res) => {
  res.send('Página Inicial');
});

const cars = [ // representa um JS Object
  {model: 'Mustang Shelby GT350', price: 'R$ 8.000.000,00'},
  {model: 'Ferrari F40', price: 'R$ 11.022.090,00'}
]
 
app.get('/carro/:param', (req, res) => { // página do carro
  const param = parseInt(req.params.param);
  if(param >= 0){
    res.json(cars[param]);
  }else{
    res.status(404).send('Carro não encontrado');
  }
});

app.get('/login', (req, res) => { // diz quais dados o usuário precisa fornecer.
  res.send("Dê seus dados: Nome, data de nascimento, cpf, idade");
}); 

app.post('/login', (req, res) => { // recebe os dados fornecidos
  const {nome, dataNasc, cpf, idade} = req.body;

  if(!nome|| !dataNasc|| !cpf|| !idade){
    return res.status(400).send('Favor fornecer todas as informações.');
  }
    users.push({ nome, dataNasc, cpf, idade }); // salva os dados

    res.send(`Usuário ${nome} adicionado com sucesso!`);
  }
)

app.get('/pagamento', (req, res) => {
  res.send('Escolha o tipo de pagamento: débito, crédito ou pix.');
});

app.post('/pagamento', (req, res) => { // recebe os dados fornecidos
  const {tipoPagamento} = req.body;
  if(!tipoPagamento){
    return res.status(400).send('Favor fornecer opção válida.');
  }
  
  if (tipoPagamento === 'crédito' || tipoPagamento === 'débito'){
      const {numero, validade, codSeguranca, nomeTitular} = req.body;

      if(!numero|| !validade|| !codSeguranca|| !nomeTitular){
        return res.status(400).send('Favor fornecer todas as informações.');
      }
          payments.push({numero, validade, codSeguranca, nomeTitular}); // salva os dados
    res.send(`Pagamento de ${nomeTitular} concluído.`);
  }else{
    res.send("QR code de pagamento gerado.");    
  }
  }
)

//porta que onde o servidor irá escutar
app.listen(3000,()=> console.log('server starter'));

