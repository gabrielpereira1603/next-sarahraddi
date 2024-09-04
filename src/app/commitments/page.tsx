"use client";

import { useState } from "react";
import style from "@/app/commitments/commitments.module.css";

const commitmentsDetails: { [key: string]: { title: string; content: string } } = {
    "1": {
        title: "Educação e Qualificação Profissional",
        content: `
<strong> - Educação Infantil:</strong> Vou trabalhar para que nossas crianças tenham um começo de vida escolar de qualidade. Isso significa mais vagas em creches e escolas bem equipadas, onde os pequenos possam aprender e se desenvolver.
<strong> - Por que é importante:</strong> Quando nossas crianças têm acesso a uma educação de qualidade desde cedo, elas crescem com mais oportunidades e confiança. Isso é fundamental para construir uma Paranaíba melhor no futuro.

<strong>- Cursos Profissionalizantes:</strong> Quero criar oportunidades para as mães e mulheres da nossa cidade se qualificarem profissionalmente, sem custo ou a preços acessíveis. Isso inclui cursos em áreas como beleza, tecnologia, e negócios.
<strong>- Por que é importante:</strong> Muitas mulheres querem melhorar de vida, mas não têm acesso a formação. Com esses cursos, elas poderão encontrar empregos melhores ou até mesmo começar o próprio negócio.
        `
    },
    "2": {
        title: "Saúde e Bem-Estar",
        content: `
<strong> - Saúde da Mulher:</strong> Vou lutar por mais atenção à saúde da mulher em Paranaíba. Isso inclui campanhas de prevenção ao câncer de mama e colo do útero, além de melhorar o atendimento para as mulheres nos postos de saúde.
<strong> - Por que é importante:</strong> Cuidar da saúde das mulheres é cuidar de toda a família. Com mais prevenção e tratamentos adequados, podemos salvar vidas e garantir que as mulheres tenham a saúde que merecem.

<strong> - Acesso à Saúde:</strong> Quero garantir que o atendimento médico seja mais rápido e eficiente, com mais médicos e melhor estrutura nos postos de saúde e hospitais.
<strong> - Por que é importante:</strong> Ninguém deve esperar horas para ser atendido ou viajar para outras cidades para conseguir tratamento. Vamos trabalhar para que o acesso à saúde em Paranaíba seja mais justo e acessível para todos.
        `
    },
    "3": {
        title: "Segurança e Proteção",
        content: `
<strong> - Combate à Violência Doméstica:</strong> Quero criar um centro de apoio para mulheres que sofrem violência doméstica. Esse lugar será um refúgio onde elas encontrarão proteção, orientação e suporte para reconstruir suas vidas.
<strong> - Por que é importante:</strong> Nenhuma mulher deve viver com medo dentro da própria casa. Com esse centro, vamos oferecer o apoio necessário para que elas possam viver em segurança e com dignidade.

<strong> - Iluminação Pública:</strong> Vou trabalhar para melhorar a iluminação das ruas e bairros de Paranaíba, tornando nossa cidade mais segura para todos.
<strong> - Por que é importante:</strong> A boa iluminação ajuda a reduzir a criminalidade e faz com que todos se sintam mais seguros, especialmente à noite.
        `
    },
    "4": {
        title: "Moradia e Infraestrutura",
        content: `
<strong> - Projetos Habitacionais:</strong> Quero apoiar projetos que ofereçam moradias dignas e acessíveis para as famílias de baixa renda, com foco nas mães solteiras e famílias em situação de vulnerabilidade.
<strong> - Por que é importante:</strong> Todos merecem um lugar seguro e confortável para chamar de lar. Com moradias adequadas, as famílias terão mais estabilidade e qualidade de vida.

<strong> - Melhorias na Infraestrutura:</strong> Vou lutar por melhorias nas ruas e bairros, incluindo pavimentação, saneamento básico, e transporte público de qualidade.
<strong> - Por que é importante:</strong> Uma infraestrutura bem cuidada melhora a vida de todos, facilita o dia a dia e valoriza nossa cidade. É essencial para o bem-estar de toda a comunidade.
        `
    },
    "5": {
        title: "Apoio às Famílias",
        content: `
<strong> - Assistência Social:</strong> Quero ampliar os programas de assistência social, garantindo que as mulheres chefes de família tenham acesso aos benefícios e suporte que precisam.
<strong> - Por que é importante:</strong> Muitas famílias dependem desses programas para sobreviver. Com um suporte adequado, podemos ajudar essas famílias a superar dificuldades e viver com mais dignidade.

<strong> - Esporte e Lazer:</strong> Quero criar mais espaços de lazer e esporte para nossas crianças e jovens, promovendo atividades que incluam toda a comunidade.
<strong> - Por que é importante:</strong> O esporte e o lazer são fundamentais para o desenvolvimento saudável das crianças e jovens, além de fortalecer os laços comunitários.
        `
    },
    "6": {
        title: "Desenvolvimento Econômico",
        content: `
<strong> - Empreendedorismo Feminino:</strong> Vou apoiar o empreendedorismo entre as mulheres, oferecendo microcrédito e apoio técnico para que possam abrir e gerir seus próprios negócios.
<strong> - Por que é importante:</strong> Quando uma mulher empreende, toda a comunidade ganha. Com apoio, as mulheres podem transformar suas ideias em negócios de sucesso, gerando renda e empregos.

<strong> - Geração de Emprego:</strong> Vou apoiar iniciativas que criem mais empregos em Paranaíba, com foco em oportunidades para mulheres e jovens.
<strong> - Por que é importante:</strong> Mais empregos significam mais oportunidades para todos. Vamos trabalhar para que Paranaíba seja uma cidade de crescimento e prosperidade para todas as famílias.
        `
    },
    "7": {
        title: "Defesa dos Valores Cristãos",
        content: `
<strong> - Proteção da Família:</strong> Vou defender os valores cristãos e a importância da família em nossas leis e políticas, garantindo que a família seja sempre protegida e respeitada.
<strong> - Por que é importante:</strong> A família é a base da sociedade. Protegendo a família, protegemos nosso futuro e nossos valores.

<strong> - Iniciativas Sociais:</strong> Vou apoiar iniciativas sociais das igrejas e organizações de fé que ajudam famílias em situação de vulnerabilidade.
<strong> - Por que é importante:</strong> A fé e a solidariedade são forças poderosas para o bem. Apoiar essas iniciativas é fortalecer a nossa comunidade e ajudar quem mais precisa.
        `
    }
};

export default function Commitments() {
    const [openModal, setOpenModal] = useState<string | null>(null);

    const handleOpenModal = (id: string) => {
        setOpenModal(id);
    };

    const handleCloseModal = () => {
        setOpenModal(null);
    };

    return (
        <section className={style.commitments}>
            <div className={style.title}>
                <h2>Compromissos</h2>
            </div>

            <div className={style.content}>
                {Object.keys(commitmentsDetails).map((key) => (
                    <div key={key}>
                        <p className={style.detailText} onClick={() => handleOpenModal(key)}>
                            Clique para obter mais detalhes
                        </p>
                        <div className={style.commitmentsItens} onClick={() => handleOpenModal(key)}>
                            <h2>{commitmentsDetails[key].title}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {openModal !== null && (
                <div className={style.modalOverlay}>
                    <div className={style.modalContent}>
                        <h2 className={style.modalTitle}>
                            {commitmentsDetails[openModal].title}
                        </h2>
                        {/* Renderiza o HTML dentro do conteúdo */}
                        <div
                            className={style.modalText}
                            dangerouslySetInnerHTML={{ __html: commitmentsDetails[openModal].content }}
                        />
                        <button className={style.closeButton} onClick={handleCloseModal}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
