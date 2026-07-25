const { GoogleGenAI } =require('@google/genai')

const ai = new GoogleGenAI({});

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    // content is a question i want to  ask with ai

    // contents: "Is telegram is ban due to neet  exam",
    // Ai do not remeber our previous q so to get accurate and we have to send our previous chat as well
    // when we use chatgpt whole chat send each timme so we use array
//  contents:[
//   // user message
//   {role:"user",
//     parts:[{text:"how re you?"}]
//   },

//   // Model response
//    {role:"model",
//     parts:[{text:"I am doing good,how can  i help you today?"}]
//   },


//  ]
contents:msg
  });

//   console.log(response.text);
return response.text;
}

module.exports=main;
 