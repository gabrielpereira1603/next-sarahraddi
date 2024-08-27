"use client";

import Mission from "../components/mission/mission";
import style from "@/app/purpose/purpose.module.css";
import Vision from "../components/vision/vision";
import Values from "../components/values/values";

export default function Purpose() {
    return (
        <section className={style.purpose}>
            <Mission/>
            <Vision/>
            <Values/>
        </section>
    );
}