import React from "react";
import Dog from "./Dog";


const ShowDogs = ({breed}) => {
   return (
    <div>
    <Dog breed={breed} />
    </div>
   )
};

export default ShowDogs;