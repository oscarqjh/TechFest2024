// src/components/Chatbot.js
import React, { useState } from 'react';
import { OpenAIHttp } from './common';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  const errorOutput = [ // [0] - request, [1] - response
    { requestMessage: 'Apologies, there was an issue when processing your request.', requestLog: 'Error sending message'},
    { responseMessage: 'Apologies, OpenAI services are currently facing high traffic. Please try again later.', responseLog: 'Error with GPT response'},
  ]

  const foodRecipeConversation = [
    { role: 'system', content: 'You are a recipe assistant.' },
    { role: 'user', content: 'What can I make for breakfast with eggs and spinach?' },
    { role: 'assistant', content: 'How about trying a delicious Spinach and Feta Omelette? It\'s quick and healthy.' },
    { role: 'user', content: 'Can you give me the recipe?' },
    { role: 'assistant', content: 'Certainly! Here is a simple recipe:\n1. Whisk eggs in a bowl.\n2. Sauté spinach in a pan until wilted.\n3. Pour whisked eggs over the spinach.\n4. Sprinkle feta cheese on top.\n5. Cook until eggs are set.\n6. Fold the omelette and serve hot. Enjoy!' },
    { role: 'user', content: 'Are there any alternatives for spinach? I don\'t have it right now.' },
    { role: 'assistant', content: 'Certainly! You can use kale, Swiss chard, or even broccoli as alternatives to spinach. Feel free to get creative with the veggies you have on hand.' },
  ];

  const sendMessage = async () => {

    try {
      const data = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: "Hello!"
          }
        ]
      }
      const response = await OpenAIHttp.post("chat/completions", data)
      // console.log(response.data)
      setResponse(response.data)
      setError(null); // Clear any previous errors
      // const newMessages = [...messages, { role: 'user', content: input }, { role: 'bot', content: response.data.choices[0].text }];
      // setMessages(newMessages);
      // setInput('');
    } catch (error) {
      console.error(errorOutput[0].requestLog, error);
      setError(errorOutput[0].requestMessage)
    }
  };

  const renderAssistantResponse = () => {
    if (error) {
      return (
        <div className="assistant-response">
          {/* {error} */}
          {errorOutput[1].responseMessage}
          console.log(errorOutput[1].responseLog, error)
        </div>
      );
    } else if (response && response.choices && response.choices.length > 0) {
      return (
        <div className="assistant-response">
          {response.choices[0].message.content}
        </div>
      );
    } else {
      return null; // Do not render anything if there's no valid response or error
    }
  };

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
          {renderAssistantResponse}
      </div>
    </div>
  );
};

export default Chatbot;
