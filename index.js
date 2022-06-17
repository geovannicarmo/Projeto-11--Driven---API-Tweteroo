import express from "express";
import cors from 'cors';

const arrayLogin = []

const arrayTweets =[]

const app = express()
app.use(cors());
app.use(express.json());

app.get('/tweets', (req, res)=> {
    res.send(arrayTweets.slice(-10))
})


app.post('/sign-up', (req,res)=>{

    arrayLogin.push({
        username: req.body.username,
        avatar: req.body.avatar,
    })
  
    res.send("OK")

})

app.post('/tweets', (req,res)=>{
    let name=req.body.username

    let usuario = arrayLogin.find(element=>element.username===name)

    arrayTweets.push({
        username: name,
        avatar: usuario.avatar,
      tweet: req.body.tweet
    })
    res.send("OK")

})


app.listen(5000)