import React from 'react';
import ArtisanCard from './ArtisanCard';

function ArtisanRecom({artisans}) {
    return (
        <div className="ArtisanRecom">
            {
            artisans.map((v,i) => {
                return (
                    <ArtisanCard 
                        key={artisans[i].id} 
                        rating={artisans[i].rating}
                        artisanName={artisans[i].artisanName} 
                        mobileNumb={artisans[i].mobileNumb} 
                    />
                )
            })}
        </div>
    );
}

export default ArtisanRecom;