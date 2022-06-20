import express from "express";
import cors from 'cors';

const arrayLogin = []
const arrayTweets =[]
const app = express()

app.use(cors());
app.use(express.json());

app.get('/tweets', (req, res)=> {
    let page = req.query.page;
    let aux=page*10
    res.send(arrayTweets.slice(aux-10, aux))
})

app.post('/sign-up', (req,res)=>{
    if(req.body.username ==="" || req.body.avatar===""){
    res.status(400).send('Todos os campos são obrigatórios!')
    }
    else{
    arrayLogin.push({
        username: req.body.username,
        avatar: req.body.avatar,
    })
     res.status(201).send('OK')
}
})

app.post('/tweets', (req,res)=>{
    let name=req.headers.user
    if(name ==="" || req.body.tweet===""){
        res.status(400).send('Todos os campos são obrigatórios!')
        }
    else{
    let usuario = arrayLogin.find(element=>element.username===name)
    arrayTweets.unshift({
        username: name,
        avatar: usuario.avatar,
      tweet: req.body.tweet
    })
    res.status(201).send('OK')
        }
})

app.get('/tweets/:USERNAME', (req, res) => {
	const username = req.params.USERNAME;
    const arrayUser = arrayTweets.filter((element)=>element.username===username)
  res.send(arrayUser); 
});

app.listen(5000)