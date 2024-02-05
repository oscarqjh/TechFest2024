// src/components/Chatbot.js
import React, { useState } from 'react';
import { OpenAIHttp } from './common';
import OpenAIService from './service/openAIService';
import { Input } from "@/components/ui/input";

const Chatbot = (props) => {
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
        ],
        recipe: props.context,
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
      <div className="h-[450px] mt-0 overflow-auto whitespace-pre-line">
          {/* returning GPT chatbot response */}
            <i className="text-sm">GPT response will be displayed below</i>

          {haveError ? ( /* haveError TRUE */
            <div className="assistant-response">
            {errorOutput[1].responseMessage}
            {console.log(errorOutput[1].responseLog, error)}
          </div>
          ) : ( /* haveError FALSE => no error */
            <div className="assistant-response">
            <ul>
            {history.map((item, index) => (
              <li key={index} className="mt-5">
                {index % 2 === 0? "You":"FrAI"}:{item}
              </li>
            ))}
            </ul>
          </div>
          )}
      </div>

      {/* <div className="h-[400px]"> </div> */}

      <div className='flex mt-5'>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask for more details..."
          className="font-medium text-white w-5/6"
        />
        <button onClick={sendMessage} type="button" className="w-1/6 text-sm text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Send</button>

      </div>
    </div>
  );
};

export default Chatbot;
