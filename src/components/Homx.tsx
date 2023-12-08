import React, { useState } from "react";

export default function Homx() {
  return (
    <div className=" relative rounded-2xl bg-slate-600 bg-cover bg-center bg-no-repeat duration-500 lg:bg-contain">
      <div className=" pointer-events-none absolute inset-0 z-10  flex-col items-center justify-end py-10">
        <div className="rounded-xl bg-black/30 px-1 py-0.5 text-center backdrop-blur backdrop-contrast-200">
          <h1 className="text-3xl text-white">Home titulo</h1>
          <p className="text-xl text-white/80">Home Descrição</p>
        </div>
      </div>
    </div>
  );
}
