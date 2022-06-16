import React from "react";
import Dog from "./Dog";

export const DogList = ({ dogs }) => {
    return (
        <ul>
            <h2>Dog Count: 5</h2>
            {dogs.map(dog => {
                return <Dog name={dog.name} chipNum={dog.chipNumber} />

            })}
        </ul>
    );
}


