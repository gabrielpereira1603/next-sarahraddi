import Image from "next/image";
import style from "@/app/about/about.module.css";

export default function About() {
    return <>
        <section className={style.about}>

            <div className={style.content}>
                <div className={style.imageAbout}>

                </div>

                <div className={style.bio}>
                    <div className={style.contentBio}>
                        <h2 className={style.name}>Sarah Raddi</h2>

                        <h2 className={style.description}>
                            Sarah Raddi é uma mulher determinada, nascida em Anápolis, Goiás, e criada em Inhumas, Goiás, onde desde cedo aprendeu com sua avó Lázara o valor do trabalho árduo e das tradições familiares. 
                            <br />
                            <br />
                            Ao lado de seu esposo, Rigor Raddi, Sarah desbravou novos caminhos ao fundar uma empresa em um novo município, onde está estabelecida há quase 15 anos. 
                            <br />
                            <br />
                            Com muito esforço e dedicação, conquistou seu espaço na comunidade local e se tornou uma referência de integridade e perseverança. Empreendedora há mais de 14 anos, Sarah tem uma conexão profunda com as necessidades dos trabalhadores e das famílias que, como ela, lutam diariamente por um futuro melhor. 
                            <br />
                            <br />
                            Sua experiência como mãe de três filhos, incluindo a primeira médica da família, reflete seu compromisso com a educação e o desenvolvimento pessoal.
                            <br />
                            <br />
                            Guiada por valores como respeito, honestidade, humildade, empatia e justiça, Sarah Raddi agora se apresenta como candidata a vereadora em Paranaíba, MS, pelo União Brasil. Com um forte senso de responsabilidade e uma vontade inabalável de fazer a diferença, ela está determinada a trabalhar incansavelmente para melhorar a qualidade de vida dos cidadãos de Paranaíba, promovendo ações que realmente impactem o dia a dia das pessoas.
                            <br />
                            <br />
                            "Vamos juntos construir um futuro melhor para Paranaíba!" – este é o lema que guia Sarah Raddi em sua missão de transformar a cidade, trazendo consigo sua experiência, sua fé e seu comprometimento com a comunidade.
                        </h2>
                    </div>
                </div>
            </div>

           


        </section>
    </>
    
}