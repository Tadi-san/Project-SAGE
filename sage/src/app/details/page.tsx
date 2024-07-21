/* eslint-disable @next/next/no-img-element */
import React from "react";

function Details() {
  return (
    <div className="grid grid-cols-3 gap-2 h-screen bg-[url('/background.jpg')] bg-cover p-20">
      <div className="gird grid-cols-2 gap-2">
        <img
          src="/img1.jpg"
          alt=""
          className="h-32 border object-fit rounded-lg"
        />
        <img
          src="/img1.jpg"
          alt=""
          className="h-32 border object-fit rounded-lg"
        />
        <img
          src="/img1.jpg"
          alt=""
          className="h-32 border object-fit rounded-lg"
        />
        <img
          src="/img1.jpg"
          alt=""
          className="h-32 border object-fit rounded-lg"
        />
      </div>
      <div className="bg-[rgba(113, 113, 113, 0.4)] h-auto">
        <p>
          Seuiuhjksdlskjhdflsfsdhjfh skjdhksfh dkjfhjsk djfhsdkjf hskdfjhs
          kdjfhsd kjfhskd hsdfj hskdf skdjfh skjdfh skhks hfs jfhsjh fsdhfksjh
          dfklsjhdf lskjdh flskjhf lsjh flsjdhf skljdh sdjkhfskdjh skldjfh skdjh
          fskldjhf sk
        </p>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Details;
