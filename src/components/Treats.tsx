import React from 'react';
import AboutSubNav from "./AboutSubNav";

function Treats() {
  
  React.useEffect(() => {
    document.title = "Pampered Poodles 4 U - Treat Recipes"
  });

  return (
    <>
      <AboutSubNav />
    
      <h1 className="app-h1">Treats</h1>
    </>
  );
}

export default Treats;
