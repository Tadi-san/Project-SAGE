/* eslint-disable @next/next/no-img-element */
import React from "react";

function Details() {
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
      <div className="bg-[rgba(113, 113, 113, 0.4)] h-auto bg-grey-200">
        <p className="text-3xl">
          Seuiuhjksdlskjhdflsfsdhjfh skjdhksfh dkjfhjsk djfhsdkjf hskdfjhs
          kdjfhsd kjfhskd hsdfj hskdf skdjfh skjdfh skhks hfs jfhsjh fsdhfksjh
          dfklsjhdf lskjdh flskjhf lsjh flsjdhf skljdh sdjkhfskdjh skldjfh skdjh
          fskldjhf sk
        </p>
      </div>
      <div className="">AI ASSISTANT AND CHATBOT HERE</div>
    </div>
  );
}

export default Details;
