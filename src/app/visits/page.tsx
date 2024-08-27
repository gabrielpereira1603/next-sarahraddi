"use client";

import style from "@/app/visits/visits.module.css";
import Image from "next/image";

export default function Visits() {
    return (
        <section className={style.visits}>
            <div className={style.title}>
                <h2>Confira as visitas</h2>
            </div>

            <div className={style.content}>

                <div className={style.contentItens}>
                    <h2>Clique na imageme veja mais informações</h2>
                    <a href="#">
                        <img src="https://nikolasferreira.com.br/wp-content/uploads/2024/06/ART-1.png" alt="" />
                    </a>
                </div>

                <div className={style.contentItens}>
                    <h2>Clique na imageme veja mais informações</h2>
                    <a href="#">
                        <img src="https://nikolasferreira.com.br/wp-content/uploads/2024/06/ART-1.png" alt="" />
                    </a>
                </div>

                <div className={style.contentItens}>
                    <h2>Clique na imageme veja mais informações</h2>
                    <a href="#">
                        <img src="https://nikolasferreira.com.br/wp-content/uploads/2024/06/ART-1.png" alt="" />
                    </a>
                </div>

                <div className={style.contentItens}>
                    <h2>Clique na imageme veja mais informações</h2>
                    <a href="#">
                        <img src="https://nikolasferreira.com.br/wp-content/uploads/2024/06/ART-1.png" alt="" />
                    </a>
                </div>

                <div className={style.contentItens}>
                    <h2>Clique na imageme veja mais informações</h2>
                    <a href="#">
                        <img src="https://nikolasferreira.com.br/wp-content/uploads/2024/06/ART-1.png" alt="" />
                    </a>
                </div>

                <div className={style.contentItens}>
                    <h2>Clique na imageme veja mais informações</h2>
                    <a href="#">
                        <img src="https://nikolasferreira.com.br/wp-content/uploads/2024/06/ART-1.png" alt="" />
                    </a>
                </div>
            </div>
        </section>
    );
}