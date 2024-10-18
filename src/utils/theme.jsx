import React, { useState, useEffect } from "react";

const theme = () => {
      // Local storage se theme get karo, agar nahi hai to default 'blue'
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "blue");
    
    useEffect(() => {
        document.body.className = theme;  // body ka class theme ke according set karo
        localStorage.setItem("theme", theme);  // localStorage me theme set karo
      }, [theme]);
      

  return (
    <div>
      <button onClick={() => setTheme("black")}>Black Theme</button>
      <button onClick={() => setTheme("blue")}>Blue Theme</button>
    </div>
  )
}

export default theme
