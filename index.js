import express from "express";
import cors from 'cors';

const arrayLogin = []

const arrayTweets =[]

const app = express()
app.use(cors());
app.use(express.json());

app.get('/tweets', (req, res)=> {
    res.send(arrayTweets)
})


app.post('/sign-up', (req,res)=>{
    console.log(req.body.username)
    console.log(req.body.avatar)
    arrayLogin.push({
        username: req.body.username,
        avatar: req.body.avatar,
    })
    console.log(arrayLogin)
    res.send("OK")

})

app.post('/tweets', (req,res)=>{
    let name=req.body.username

    let usuario = arrayLogin.find(element=>element.username===name)
  console.log(usuario)
    arrayTweets.push({
        username: name,
        avatar: usuario.avatar,
      tweet: req.body.tweet
    })
    res.send("OK")

})


app.listen(5001)