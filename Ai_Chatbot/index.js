const express=require('express')

const app=express();
const main=require('./aichat')
app.use(express.json());

app.post('/chat',async(req,res)=>{
  const {id,msg}=req.body; 

  if(!chatHistory[id]){
  chatHistory[id]=[]
  }
  // extract user history
  const History=chatHistory[id];

  // history +current;array 
  const promptmsg=[...History,{
    role:'user',
    parts:[{text:msg}]
  }]
const answer = await main(promptmsg);

  // inserst user q and model resposne
  History.push({role:'user',parts:[{text:msg}]})
  History.push({role:'model',parts:[{text:answer}]})
  res.send(answer);
 })

//  here we will install ourchat history
// store history in key value pair
// key=id
// value=content array
 const chatHistory={};

app.listen(3000,()=>{
  console.log("Listening at port 3000")
})

// localhost:3000/chat call on postman and get response