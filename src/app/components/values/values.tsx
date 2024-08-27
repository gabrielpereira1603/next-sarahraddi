import style from "@/app/components/values/values.module.css";

import RespectIcon from "@/app/components/values/images/respect.png";
import HonestidadeIcon from "@/app/components/values/images/honestidade.png";
import HumildadeIcon from "@/app/components/values/images/humildade.png";
import EmpatiaIcon from "@/app/components/values/images/empatia.png";
import JusticaIcon from "@/app/components/values/images/justica.png";
import Link from 'next/link';

import Image from "next/image";

export default function Values() {
    return (
        <div className={style.values}>
            <div className={style.title}>
                <h2>Valores</h2>
            </div>
            <div className={style.cards}>
                <div className={style.card}>
                    <Image src={RespectIcon} alt={"Respeito Icon"}/>
                    <p>Valoriza cada indivíduo e suas necessidades, tratando todos com dignidade e consideração.</p>
                </div>

                <div className={style.card}>
                    <Image src={HonestidadeIcon} alt={"Honestidade Icon"}/>
                    <p>Preza pela transparência e verdade em todas as suas interações, tanto pessoais quanto profissionais.</p>
                </div>
                <div className={style.card}>
                    <Image src={HumildadeIcon} alt={"Humildade Icon"}/>
                    <p>Reconhece a importância de aprender com os outros e valoriza a simplicidade e o trabalho árduo.</p>
                </div>
                <div className={style.card}>
                    <Image src={EmpatiaIcon} alt={"Empatia Icon"}/>
                    <p>Se coloca no lugar do próximo, entendendo suas dificuldades e buscando soluções que beneficiem a todos.</p>
                </div>
                <div className={style.card}>
                    <Image src={JusticaIcon} alt={"Justiça Icon"}/>
                    <p>Comprometida com a equidade, sempre buscando o que é certo para a comunidade.</p>
                </div>
            </div>
      </div>
    )
}
