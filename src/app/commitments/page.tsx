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
                    <h2>Educação e o Futuro das Crianças</h2>
                </div>

                <div className={style.commitmentsItens}>
                    <h2>Empreendedorismo e Desenvolvimento Econômico</h2>
                </div>

                <div className={style.commitmentsItens}>
                    <h2>Respeito às Tradições Familiares</h2>
                </div>

                <div className={style.commitmentsItens}>
                    <h2>Saúde e Bem-Estar da Comunidade</h2>
                </div>

                <div className={style.commitmentsItens}>
                    <h2>Integridade e a Transparência no Mandato</h2>
                </div>

                <div className={style.commitmentsItens}>
                    <h2>Desenvolvimento Social e a Igualdade</h2>
                </div>
            </div>
        </section>
    );
}