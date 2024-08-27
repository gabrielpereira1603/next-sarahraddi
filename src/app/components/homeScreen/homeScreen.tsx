"use client";

import style from "@/app/components/homeScreen/homeScreen.module.css";
import BackgroundPhoto from "./images/sarah_raddi_photo_notback.png";
import Image from "next/image";

export default function HomeScreen() {
    const scrollToNextSection = () => {
        const element = document.getElementById("nextSection");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <section className={style.homeScreen}>
            <div className={style.content}>
                <h2 className={style.title}>Candidata a Vereadora</h2>
                <h2 className={style.name}>Sarah Raddi</h2>
                <p>
                    Seja bem-vindo(a) ao site da Sarah Raddi! Aqui você terá acesso a todas as informações sobre a candidata a vereadora, podendo se atualizar sobre todo o seu mandato!
                </p>
                <button className="flex items-center gap-2" onClick={scrollToNextSection}>
                    Explorar Site
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className={style.imageContainer}>

            </div>

       
        </section>
    );
}
