// /* eslint-disable @next/next/no-img-element */
// import React from "react";

// function Details() {
//   return (
//     <div className="grid grid-cols-3 gap-2 h-screen bg-[url('/background.jpg')] bg-cover p-20">
//       <div className="flex flex-wrap gap-8">
//         <div>
//           <img
//             src="/img1.jpg"
//             alt=""
//             className="w-40 h-40 border rounded-lg bg-cover"
//           />
//         </div>
//         <div>
//           <img
//             src="/img1.jpg"
//             alt=""
//             className="w-40 h-40 border rounded-lg bg-cover"
//           />
//         </div>
//         <div>
//           <img
//             src="/img1.jpg"
//             alt=""
//             className="w-40 h-40 border rounded-lg bg-cover"
//           />
//         </div>
//         <div>
//           <img
//             src="/img1.jpg"
//             alt=""
//             className="w-40 h-40 border rounded-lg bg-cover"
//           />
//         </div>
//       </div>
//       <div className="bg-[rgba(113, 113, 113, 0.4)] h-auto bg-grey-200">
//         <p className="text-3xl">
//           Seuiuhjksdlskjhdflsfsdhjfh skjdhksfh dkjfhjsk djfhsdkjf hskdfjhs
//           kdjfhsd kjfhskd hsdfj hskdf skdjfh skjdfh skhks hfs jfhsjh fsdhfksjh
//           dfklsjhdf lskjdh flskjhf lsjh flsjdhf skljdh sdjkhfskdjh skldjfh skdjh
//           fskldjhf sk
//         </p>
//       </div>
//       <div className="">AI ASSISTANT AND CHATBOT HERE</div>
//     </div>
//   );
// }

// export default Details;

'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

function Details() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: "user" }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a simulated bot response.", user: "bot" }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2 h-screen bg-[url('/background.jpg')] bg-cover p-20">
      <div className="flex flex-wrap gap-8">
        <div>
          <img
            src="/img1.jpg"
            alt=""
            className="w-40 h-40 border rounded-lg bg-cover"
          />
        </div>
        <div>
          <img
            src="/img1.jpg"
            alt=""
            className="w-40 h-40 border rounded-lg bg-cover"
          />
        </div>
        <div>
          <img
            src="/img1.jpg"
            alt=""
            className="w-40 h-40 border rounded-lg bg-cover"
          />
        </div>
        <div>
          <img
            src="/img1.jpg"
            alt=""
            className="w-40 h-40 border rounded-lg bg-cover"
          />
        </div>
      </div>
      <div className="bg-[rgba(113, 113, 113, 0.4)] h-auto bg-grey-200 p-6">
        <h2 className="text-3xl mb-4">Educational Content</h2>
        <p className="text-lg">
          Mining is the process of extracting valuable minerals or other geological materials from the earth. These deposits form a mineralized package that is of economic interest to the miner. Ores recovered by mining include metals, coal, oil shale, gemstones, limestone, chalk, dimension stone, rock salt, potash, gravel, and clay.
        </p>
        <p className="text-lg mt-4">
          Modern mining processes involve prospecting for ore bodies, analysis of the profit potential of a proposed mine, extraction of the desired materials, and final reclamation of the land after the mine is closed.
        </p>
      </div>
      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
        <img
          src="/a_giraff_with_a_degree_png-removebg-preview.png"
          alt="Chatbot Avatar"
          className="w-24 h-24 rounded-full mb-4"
        />
        <div className="flex flex-col w-full h-full overflow-y-auto mb-4 p-2 border rounded">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded ${
                message.user === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex w-full">
          <input
            type="text"
            className="flex-grow border rounded-l p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white rounded-r px-4"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
