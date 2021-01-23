import React from 'react';
import AboutSubNav from "./AboutSubNav";

function Reunions() {
  
  React.useEffect(() => {
    document.title = "Pampered Poodles 4 U - Reunions"
  });

  return (
    <>
      <AboutSubNav />
     
      <h1 className="app-h1">Pet Park Reunions</h1>
    </>
  );
}

export default Reunions;
