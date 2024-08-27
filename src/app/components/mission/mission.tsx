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
                    <h2>Missão 1</h2>
                </div>

                <div className={style.missionItens}>
                    <h2>Missão 2</h2>
                </div>

                <div className={style.missionItens}>
                    <h2>Missão 3</h2>
                </div>

                <div className={style.missionItens}>
                    <h2>Missão 4</h2>
                </div>

                <div className={style.missionItens}>
                    <h2>Missão 5</h2>
                </div>

                <div className={style.missionItens}>
                    <h2>Missão 6</h2>
                </div>
            </div>
        </section>
    )
}
