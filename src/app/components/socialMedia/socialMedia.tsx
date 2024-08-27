import style from "@/app/components/socialMedia/socialMedia.module.css";
import Link from 'next/link';

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function SocialMedia() {
    return (
        <section className={style.socialMedia} id="nextSection">
            <div className={style.socialMediaContainer}>

            <div className={style.titleSocialMedia}>
                <h5>Redes Sociais</h5>
                <p>Fique por dentro de tudo que a Sarah Raddi faz através das redes sociais.</p>
            </div>

            <div className={style.socialMedia}>
                <Link href="https://facebook.com" target="_blank">
                    <FaFacebookSquare size={40} color="#ffffff"/>
                </Link>

                <Link href="https://www.instagram.com/sarah_raddi/" target="_blank">
                    <FaInstagram size={40} color="#ffffff"/>
                </Link>

                <Link href="#" target='_blank'>
                    <AiFillTikTok size={40} color="#ffffff"/>
                </Link>

                <Link href="" target='_blank'>
                    <FaYoutube size={40} color="#ffffff"/>
                </Link>
            </div>
        </div>
        </section>
    )
}
