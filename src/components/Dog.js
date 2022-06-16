import React from "react";

const Dog = ({ name, chipNum }) => {
    return (
        <li>
            <h2>{name}</h2>
            <span>chip #: {chipNum}</span>
            <button>add chip</button>
        </li>
    );
}

export default Dog;