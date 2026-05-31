import React, { forwardRef } from "react";

const Page = forwardRef(({ title, desc, image }, ref) => {
  return (
    <div
      ref={ref}
      className="
        bg-white
        h-full
        w-full
        p-10
        rounded-2xl
        overflow-hidden
         border
         border-slate-200
        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
        relative
      "
    >
      <div className="bg-white h-full ">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>

        <img
          src={image}
          alt="image1"
          className="w-full h-52 object-contain mb-6 "
        />

        <p className="text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
});

export default Page;

//  bg-white
//         h-full
//         w-full
//         p-10
//         rounded-2xl
//         overflow-hidden
