"use client";

import style from "@/app/commitments/commitments.module.css";
import Image from "next/image";

export default function Commitments() {
    return (
        <section className={style.commitments}>

            <div className={style.title}>
                <h2>Compromissos</h2>
            </div>

            <div className={style.content}>
                <div className={style.commitmentsItens}>
                    <h2>Compromisso 1</h2>
                </div>

                <div className={style.commitmentsItens}>
                    <h2>Compromisso 2</h2>
                </div>

                <div className={style.commitmentsItens}>
                    <h2>Compromisso 3</h2>
                </div>

                <div className={style.commitmentsItens}>
                    <h2>Compromisso 4</h2>
                </div>

                <div className={style.commitmentsItens}>
                    <h2>Compromisso 5</h2>
                </div>

                <div className={style.commitmentsItens}>
                    <h2>Compromisso 6</h2>
                </div>
            </div>
        </section>
    );
}