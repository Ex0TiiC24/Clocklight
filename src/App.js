import { useState,useEffect } from "react";





function App() {
  const [display,settime] = useState('0:00:00 PM')
  const [dark,setDark] = useState(false)
  const [mode,setMode] = useState('Darkmode')
  
  const darkModeHandler = () => {
    if(mode==="Darkmode"){
      setMode("Lightmode")
    }
    else{
      setMode("Darkmode")
    }
    setDark(!dark);
    document.body.classList.toggle("dark");
    

}
  useEffect(()=>{
    setInterval(()=>{
        const currentDate = new Date();
        settime(currentDate.toLocaleTimeString())
        
        
    },1000)
    
  },[])
  
  return (
    <div class="flex justify-center items-center w-full h-screen flex-col dark:bg-zinc-800 dark:text-white">
      <div class="text-3xl">{display}</div>
      <div>
        <button class="border-solid border-2 mt-3 w-fit px-1"
        onClick={darkModeHandler}>{mode}</button>
      </div>
    </div>
  );
}

export default App;
