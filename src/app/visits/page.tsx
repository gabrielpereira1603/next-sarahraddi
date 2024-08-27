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
                        <img src="https://placehold.co/400" alt="" />
                    </a>
                </div>

                <div className={style.contentItens}>
                    <h2>Clique na imageme veja mais informações</h2>
                    <a href="#">
                        <img src="https://placehold.co/400" alt="" />
                    </a>
                </div>

                <div className={style.contentItens}>
                    <h2>Clique na imageme veja mais informações</h2>
                    <a href="#">
                        <img src="https://placehold.co/400" alt="" />
                    </a>
                </div>

                <div className={style.contentItens}>
                    <h2>Clique na imageme veja mais informações</h2>
                    <a href="#">
                        <img src="https://placehold.co/400" alt="" />
                    </a>
                </div>

                <div className={style.contentItens}>
                    <h2>Clique na imageme veja mais informações</h2>
                    <a href="#">
                        <img src="https://placehold.co/400" alt="" />
                    </a>
                </div>

                <div className={style.contentItens}>
                    <h2>Clique na imageme veja mais informações</h2>
                    <a href="#">
                        <img src="https://placehold.co/400" alt="" />
                    </a>
                </div>
            </div>
        </section>
    );
}