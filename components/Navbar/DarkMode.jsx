import React from 'react';
import light_mode from "../../assets/light_mode.png";
import dark_mode from "../../assets/dark_mode.png";

const DarkMode = () => {
  const[theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  React.useEffect(()=>
  {
    if(theme == "dark")
      {
        element.classList.add("dark");
        localStorage.setItem("theme" , "dark");
      }
      else{
        element.classList.remove("dark");
        localStorage.setItem("theme" , "light");
      }
  } , [theme]);

  return (
    <div className='relative'>
        <img src={light_mode} alt=""
        onClick={()=> setTheme(theme=="light" ? "dark" : "light")} 
        className={`w-8 cursor-poiner drop-shadow transition-all
         duration-300 absolute right-0 z-10 
         ${ theme == "dark" ? "opacity-0" : "opacity-100" }`}/>

        <img src={dark_mode} alt="" 
        onClick={()=> setTheme(theme=="light" ? "dark" : "light")} 
        className='w-8 cursor-poiner drop-shadow transition-all
         duration-300'/>
    </div>
  );
};

export default DarkMode;