import React, { useEffect, useState } from 'react';
import { Pup } from "models/puppy.model";
import PuppyLink from './PuppyLink';

function PuppyList({ pups, groupByGender = true }: { pups: Pup[]; groupByGender?: boolean }) {
  const [girls, setGirls] = useState<Pup[]>([]);
  const [boys, setBoys] = useState<Pup[]>([]);
  
  useEffect(() => {
    setGirls(pups.filter(({ sex }) => sex === 'Girl'));
    setBoys(pups.filter(({ sex }) => sex === 'Boy'));
  }, [pups]);

  return (
    <>
      { groupByGender && <>
        { !!girls.length && (
          <>
            <h3 className="app-h3">Sisters</h3>
            <div className="app-gallery captioned">
              { girls.map((pup, index) => (
                <PuppyLink key={index} pup={pup} />) 
              )}
            </div>
          </>
        )}

        { !!boys.length && (
          <>
            <h3 className="app-h3">Brothers</h3>
            <div className="app-gallery captioned">
              { boys.map((pup) => <PuppyLink key={pup.id} pup={pup} />) }
            </div>
          </>
        )}
      </>}

      { !groupByGender && (
          <div className="app-gallery captioned">
            { pups.map((pup) => (
              <PuppyLink key={pup.id} pup={pup} />) 
            )}
          </div>
      )}
    </>
  );
}

export default PuppyList;
