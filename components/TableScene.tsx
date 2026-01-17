import { Scene } from "./Scene";
import {KIDE_URL} from "@/app/constants";
import ExportedImage from 'next-image-export-optimizer'
import poytaImg from '@/public/assets/wide/pöytä.png'

export default function TableScene() {
    return (
        <Scene className="translate-y-[-5dvw] h-full">
			{ /* TODO: ensure this translateY is correct; it should prevent a blank space between the office and table scenes, even on ultrawide aspect ratios */ }
            <div className="relative scene-body translate-x-[-50%] left-[50%]">
                <div data-balloon-spawnable="false" className="absolute left-[59%] top-[15%] w-[16.5%] h-[30%] origin-top-left rotate-[20deg]" style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 42.5%, 14.1% 37.2%, 0% 23%)", containerType: "inline-size"}}>
                    <p className={`font-normal text-[4.95cqw] text-justify font-serif`}>
                        Hei,<br/><br/>
                        Pahoittelut edellisestä viestistä.
                        Työntekijä on nyt saanut ohjeistuksen käyttäytyä asiallisesti.
                        Viestin tarkoituksena oli kutsua teidät Tietokillan neljäkymmentävuotisjuhliin
                        Servin mökkiin Otaniemeen tänä helmikuun yhdentenätoista päivänä vuotta 2026.
                        Saavuttehan paikalle viimeistään klo 20.00.
                        <br/><br/>
                        {typeof KIDE_URL !== 'undefined'
						  ? <>Lippu: Saatavilla <a className="text-blue-600 inline-block -m-2 p-2" href={KIDE_URL}>Kide.app</a>-sivulta.<br/></>
						  : <>Lippu saatavilla pian!<br/><br/></>}
                        Teema: Byrokratia<br/>
                        Pukukoodi: Haalarit ja Business Casual<br/>
                        Paikka: Servin mökki, Otaniemi, Espoo.<br/>
                        Aika: 11.2.2026 klo 19.00–02.00<br/>
                        <br/>
                        Ystävällisin terveisin,<br/>
                        Tietokillan HR-tiimi
                    </p>
                </div>
                <ExportedImage alt="Table" src={poytaImg} className="w-full h-auto" />
             </div>
         </Scene>
     )
 }
