import React, { useEffect, useState } from 'react';
import { Pup } from "models/puppy.model";
import PuppyLink from './PuppyLink';

interface PuppyListProps {
  pups: Pup[]; 
  groupByGender?: boolean;
  showPendingOnly?: boolean;
}

function PuppyList({ pups, groupByGender = true, showPendingOnly = false }: PuppyListProps) {
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
                <PuppyLink key={index} pup={pup} showPendingOnly={showPendingOnly} />) 
              )}
            </div>
          </>
        )}

        { !!boys.length && (
          <>
            <h3 className="app-h3">Brothers</h3>
            <div className="app-gallery captioned">
              { boys.map((pup) => (
                <PuppyLink key={pup.id} pup={pup} showPendingOnly={showPendingOnly} />)
               )}
            </div>
          </>
        )}
      </>}

      { !groupByGender && (
          <div className="app-gallery captioned">
            { pups.map((pup) => (
              <PuppyLink key={pup.id} pup={pup} showPendingOnly={showPendingOnly} />) 
            )}
          </div>
      )}
    </>
  );
}

export default PuppyList;
