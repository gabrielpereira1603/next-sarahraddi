import style from "@/app/components/mission/mission.module.css";
import Link from 'next/link';

import Image from "next/image";

export default function Mission() {
    return (
        <section className={style.mission}>     
            <div className={style.title}>
                Missão
            </div>
            <div className={style.content}>
                <div className={style.missionItens}>
                    <h2>Promover o Desenvolvimento Econômico Sustentável</h2>
                </div>

                <div className={style.missionItens}>
                    <h2>Garantir uma Educação de Qualidade para Todos</h2>
                </div>

                <div className={style.missionItens}>
                    <h2>Fortalecer a Saúde Pública e o Bem-Estar Social</h2>
                </div>

                <div className={style.missionItens}>
                    <h2>Defender os Valores Familiares e Comunitários</h2>
                </div>

                <div className={style.missionItens}>
                    <h2>Atuar com Transparência e Responsabilidade</h2>
                </div>

                <div className={style.missionItens}>
                    <h2>Reduzir as Desigualdades e Promover a Justiça Social</h2>
                </div>
            </div>
        </section>
    )
}
