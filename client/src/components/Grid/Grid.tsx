// import React from 'react'

import Form from "./Form/Form";

const Grid = () => {
  return (
    <div className="grid grid-cols-5 auto-rows-[90px] bg-red-400 items-center">
      <div className="col-span-3 row-span-2 bg-amber-300">1</div>
      <div className="col-span-2 row-span-2 col-start-4 bg-blue-400">2</div>
      <div className="col-span-3 row-span-4 row-start-3 bg-orange-500">3</div>
      <div className="col-span-2 row-span-8 col-start-4 row-start-3 bg-teal-500"><Form/></div>
      <div className="col-span-3 row-span-4 row-start-7 bg-purple-400">5</div>
    </div>
  );
}

export default Grid