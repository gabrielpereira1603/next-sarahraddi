"use client";

import style from "@/app/visits/visits.module.css";
import Img1 from "./images/foto-1.jpeg";
import Img2 from "./images/foto-2.jpeg";
import Img3 from "./images/foto-3.jpeg";
import Img4 from "./images/foto-4.jpeg";
import Img5 from "./images/foto-5.jpeg";
import Img6 from "./images/foto-6.jpeg";
import Img7 from "./images/foto-7.jpeg";
import Img8 from "./images/foto-8.jpeg";
import Img9 from "./images/foto-9.jpeg";
import Img10 from "./images/foto-10.jpeg";
import Img11 from "./images/foto-11.jpeg";
import Img12 from "./images/foto-12.jpeg";
import Img13 from "./images/foto-13.jpeg";
import Img14 from "./images/foto-14.jpeg";
import Img15 from "./images/foto-15.jpeg";
import Img16 from "./images/foto-16.jpeg";
import Img17 from "./images/foto-17.jpeg";
import Img18 from "./images/foto-18.jpeg";
import Img19 from "./images/foto-19.jpeg";
import Img20 from "./images/foto-20.jpeg";
import Img21 from "./images/foto-21.jpeg";
import Img22 from "./images/foto-22.jpeg";
import Img23 from "./images/foto-23.jpeg";
import Img24 from "./images/foto-24.jpeg";
import Img25 from "./images/foto-25.jpeg";
import Img26 from "./images/foto-26.jpeg";
import Img27 from "./images/foto-27.jpeg";
import Img28 from "./images/foto-28.jpeg";
import Img29 from "./images/foto-29.jpeg";
import Img30 from "./images/foto-30.jpeg";
import Img31 from "./images/foto-31.jpeg";
import Img32 from "./images/foto-32.jpeg";
import Img33 from "./images/foto-33.jpeg";
import Img34 from "./images/foto-34.jpeg";
import Img35 from "./images/foto-35.jpeg";
import Img36 from "./images/foto-36.jpeg";
import Img37 from "./images/foto-37.jpeg";
import Img38 from "./images/foto-38.jpeg";
import Img39 from "./images/foto-39.jpeg";
import Img40 from "./images/foto-40.jpeg";
import Img41 from "./images/foto-41.jpeg";
import Img42 from "./images/foto-42.jpeg";
import Img43 from "./images/foto-43.jpeg";
import Img44 from "./images/foto-44.jpeg";
import Img45 from "./images/foto-45.jpeg";
import Img46 from "./images/foto-46.jpeg";
import Img47 from "./images/foto-47.jpeg";
import Img48 from "./images/foto-48.jpeg";
import Img49 from "./images/foto-49.jpeg";
import Img50 from "./images/foto-50.jpeg";
import Img51 from "./images/foto-51.jpeg";
import Img52 from "./images/foto-52.jpeg";
import Img53 from "./images/foto-53.jpeg";
import Img54 from "./images/foto-54.jpeg";
import Img55 from "./images/foto-55.jpeg";
import Img56 from "./images/foto-56.jpeg";
import Img57 from "./images/foto-57.jpeg";
import Img58 from "./images/foto-58.jpeg";
import Img59 from "./images/foto-59.jpeg";
import Img60 from "./images/foto-60.jpeg";
import Img61 from "./images/foto-61.jpeg";
import Img62 from "./images/foto-62.jpeg";
import Img63 from "./images/foto-63.jpeg";

const images = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,
    Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20,
    Img21, Img22, Img23, Img24, Img25, Img26, Img27, Img28, Img29, Img30,
    Img31, Img32, Img33, Img34, Img35, Img36, Img37, Img38, Img39, Img40,
    Img41, Img42, Img43, Img44, Img45, Img46, Img47, Img48, Img49, Img50,
    Img51, Img52, Img53, Img54, Img55, Img56, Img57, Img58, Img59, Img60,
    Img61, Img62, Img63
];

import Image from "next/image";
import Logo from "@/app/components/homeScreen/images/logo-roxa.png";

export default function Visits() {
    return (
        <section className={style.visits}>
            <div className={style.title}>
                <h2>Confira as visitas</h2>
            </div>

            <div className={style.content}>
                {images.map((img, index) => (
                    <div key={index} className={style.contentItens}>
                        <h2>Clique na imagem e veja mais informações</h2>
                        <a href="#">
                            <Image src={img} alt={`Foto ${index + 1}`} width={250} height={250} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}