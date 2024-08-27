"use client";

import Mission from "../components/mission/mission";
import style from "@/app/purpose/purpose.module.css";
import Vision from "../components/vision/vision";

export default function Purpose() {
    return (
        <section className={style.purpose}>
            <Mission/>
            <Vision/>
        </section>
    );
}