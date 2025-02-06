import { useState } from 'react'



const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav)
    }

  return (
    <nav
      className={`flex flex-col text-gray-700 h-screen ${nav ? "max-w-32" : "max-w-16"} p-4 space-y-4  shadow-2xl bg-sky-700 items-center`}>
      <button
        className="bg-sky-700 rounded-full p-3 text-white font-bold hover:bg-sky-600 active:bg-sky-500 max-w-16 "
        onClick={handleClick}>
        {nav ? "Menu" : "\u{2630}"}
      </button>
      <button className={`bg-sky-600 text-white rounded-sm p-2 px-6 hover:bg-sky-500 ${nav ? "" : "opacity-0"} `}>
        Dashboard
      </button>
      <button className={`bg-sky-700 text-white rounded-sm p-2 px-6 hover:bg-sky-500 ${nav ? "" : "opacity-0"} `}>
        Account
      </button>
    </nav>
  );
};

export default Navbar;
