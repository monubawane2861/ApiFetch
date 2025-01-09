import React, { useState } from 'react'
import axios from "axios"
import './App.css'

const App = () => {


  const [question, setquestion] = useState("");


  const [ answer, setanswer] = useState("");



  async function generateAnswer(){

    setanswer("loding...");
    

    const response = await axios({

      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBfehF_t4NQE9GXqt_gYJ2PZ7uxNtubazA",


      method:"Post",

     data: {
        contents: [{
          parts:[{text: question}]
          }]
         }
    })

        
       setanswer(response['data']['candidates'][0]['content']['parts'][0]['text'])

    
  }

  return (

    <div>
      <h1> Answer new</h1>

      <div className='answerOfquestion'>

      <pre>{answer}</pre>

      </div>
      
      <div className='inputValue'>

        
      <input value={question} onChange={(e)=> setquestion(e.target.value)}
       cols="30" 
       rows="5"/> 

      </div>

      <br />

      <div className='AnsBtn'>

      <button onClick={generateAnswer}> Generate Answer</button>

      </div>
    
    </div>
  )
}

export default App;
