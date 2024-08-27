import style from "@/app/components/vision/vision.module.css";

import Link from 'next/link';
import Image from "next/image";

export default function Vision() {
    return (
        <section className={style.vision}>     
            <div className={style.title}>
                Visão
            </div>
            <div className={style.content}>
                <h2>
                    Ser uma força transformadora na comunidade de Paranaíba, 
                    inspirando mudanças positivas e contribuindo para o desenvolvimento sustentável da cidade. 
                    Sarah Raddi enxerga uma Paranaíba onde cada cidadão tem acesso a oportunidades justas, 
                    uma educação de qualidade, e onde os valores humanos são sempre priorizados.
                </h2>
            </div>
        </section>
    )
}
