import React from "react";
import { breedsArray } from "./DogsList";

const Dog = ({breed}) => {
    String(breed)
   if (breedsArray.includes(breed)){
        return (
            <div>
                <h3>{breed}</h3>
                <p>
                Ten pies to wierny i przyjacielski czworonóg, który świetnie czuje się w roli rodzinnego
towarzysza. Dobrze dogaduje się z dziećmi, uwielbia pieszczoty i wspólne zabawy.
Jest łatwy w prowadzeniu, choć bywa uparty. Sprawdzi się zarówno w małym
mieszkaniu jak i w domu z ogrodem.
Wysokość w kłębie 30–35 cm, masa ciała 22–25 kg. Sierść krótka, delikatna, lśniąca,
umaszczenie płowe, pręgowane lub łaciate. Charakter czujny, śmiały, oddany,
odważny, łagodny, czasem uparty. W zależności od dnia pokazuje różne oblicza
swojej natury.
                </p>
            </div>
    )
    }
}

export default Dog