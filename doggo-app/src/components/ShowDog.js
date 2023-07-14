import React from "react";
import { breedsArray } from "./DogsList";

const ShowDog = ({breed}) => {
    console.log(typeof breed)
        return (
            <div className="box">
                <div className="description">
                    <h3 className="is-size-3">Rasa: <strong>{breed}</strong></h3>
                    <article>
                       <p> Ten pies to wierny i przyjacielski czworonóg, który świetnie czuje się w roli rodzinnego
                        towarzysza. </p>
                     <p>  Dobrze dogaduje się z dziećmi, uwielbia pieszczoty i wspólne zabawy.
                        Jest łatwy w prowadzeniu, choć bywa uparty. Sprawdzi się zarówno w małym
                        mieszkaniu jak i w domu z ogrodem.</p> 
                    <p>
                    Wysokość w kłębie 30–35 cm, masa ciała 22–25 kg. Sierść krótka, delikatna, lśniąca,
                        umaszczenie płowe, pręgowane lub łaciate. </p>
                    <p>Charakter czujny, śmiały, oddany,
                        odważny, łagodny, czasem uparty. W zależności od dnia pokazuje różne oblicza
                        swojej natury.</p>
                    </article>
                    <img className="" alt="mashroom-dog" src="/mashroom-dog.png"/>
                </div>
            </div>
        )
    }

export default ShowDog