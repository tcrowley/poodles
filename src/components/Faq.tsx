import React from 'react';
import AboutSubNav from "./AboutSubNav";

function Faq() {
  
  React.useEffect(() => {
    document.title = "Pampered Poodles 4 U - Links and FAQ"
  });

  return (
    <>
      <AboutSubNav />
    
      <h1 className="app-h1">Frequently Asked Questions</h1>
    </>
  );
}

export default Faq;
