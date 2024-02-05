// src/components/Chatbot.js
import React, { useState } from 'react';
import { OpenAIHttp } from './common';
import OpenAIService from './service/openAIService';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  const [history, setHistory] = useState([]);

  const [haveError, setHaveError] = useState(false);

  const errorOutput = [ // [0] - request, [1] - response
    { requestMessage: 'Apologies, there was an issue when processing your request.', requestLog: 'Error sending message'},
    { responseMessage: 'Apologies, OpenAI services are currently facing high traffic. Please try again later.', responseLog: 'Error with GPT response'},
  ]

  const addItem = (newItem) => {
    // console.log(newItem)
    setHistory((prevArray) => [...prevArray, newItem]);
    // console.log("history list", history)
  };
  
  const sendMessage = async () => {
    console.log("clicked")

    try {
      const data = {
        messages: [
          {
            role: "user",
            content: input
          }
        ]
      }
      addItem(input)
      const thisresponse = await OpenAIService.askfrAIbot(data)
      console.log(thisresponse.data)
      setResponse(thisresponse.data)
      // console.log(response.choices[0].message.content)
      addItem(thisresponse.data.choices[0].message.content)
      setError(null); // Clear any previous errors
    } catch (error) {
      // console.error(errorOutput[0].requestLog, error);
      // setError(errorOutput[0].requestMessage)
      // setHaveError(true)
    }
  };

  // const renderAssistantResponse = () => {
  //   if (error) {
  //     return (
  //       <div className="assistant-response">
  //         {/* {error} */}
  //         {errorOutput[1].responseMessage}
  //         console.log(errorOutput[1].responseLog, error)
  //       </div>
  //     );
  //   } else if (response && response.choices && response.choices.length > 0) {
  //     console.log('test')
  //     // add response to history
  //     addItem(response.choices[0].message.content)
  //     return (
  //       <div className="assistant-response">
  //         <ul>
  //         {history.map((item, index) => (
  //           <li key={index} >
  //             {index % 2 === 0? "User":"FrAI"}:{item}
  //           </li>
  //         ))}
  //         </ul>
  //         {/* {response.choices[0].message.content} */}
  //       </div>
  //     );
  //   } else {
  //     console.log('else')
  //     return null; // Do not render anything if there's no valid response or error
  //   }
  // };


  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index} className={message.role}>
            {message.content}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
          {/* returning GPT chatbot response */}
          GPT response will be displayed below

          {haveError ? ( /* haveError TRUE */
            <div className="assistant-response">
            {errorOutput[1].responseMessage}
            {console.log(errorOutput[1].responseLog, error)}
          </div>
          ) : ( /* haveError FALSE => no error */
            <div className="assistant-response">
            <ul>
            {history.map((item, index) => (
              <li key={index} >
                {index % 2 === 0? "User":"FrAI"}:{item}
              </li>
            ))}
            </ul>
          </div>
          )}
      </div>
    </div>
  );
};

export default Chatbot;
