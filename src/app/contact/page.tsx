"use client";

import style from "@/app/contact/contact.module.css";
import { useState } from "react";
import Swal from 'sweetalert2';

export default function Contact() {
    const [result, setResult] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
    
        fetch('/api/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
        .then(response => response.json())
        .then(data => {
            setResult(data);
            if (data.accepted) {
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'Sua mensagem foi enviada com sucesso.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } else {
                Swal.fire({
                    title: 'Erro!',
                    text: 'Houve um problema ao enviar sua mensagem.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        })
        .catch(error => {
            setResult({ error: error.message });
            Swal.fire({
                title: 'Erro!',
                text: `Houve um problema ao enviar sua mensagem: ${error.message}`,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        })
        .finally(() => setLoading(false));
    };
    

    return (
        <section className="bg-white pt-8">
            <div className="max-w-7xl mx-auto px-4 md:flex md:space-x-8">
                <div className="md:w-1/2">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold">Entre em contato!</h2>
                        <h3 className="text-xl text-gray-600">Quer enviar uma mensagem para a Sarah? Preencha o formulário!</h3>
                    </div>
                    
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Seu nome" 
                                    value={form.name}
                                    onChange={handleChange}
                                    required 
                                    className="w-full p-3 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none"
                                    style={{ outlineColor: "#7f015f" }} 
                                />
                            </div>
                            <div className="flex-1">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Seu email" 
                                    value={form.email}
                                    onChange={handleChange}
                                    required 
                                    className="w-full p-3 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none"
                                    style={{ outlineColor: "#7f015f" }} 
                                />
                            </div>
                        </div>

                        <div>
                            <input 
                                type="tel" 
                                name="phone" 
                                placeholder="Seu telefone com DDD" 
                                value={form.phone}
                                onChange={handleChange}
                                required 
                                className="w-full p-3 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none"
                                style={{ outlineColor: "#7f015f" }} 
                            />
                        </div>

                        <div>
                            <textarea 
                                name="message" 
                                placeholder="Escreva sua mensagem" 
                                value={form.message}
                                onChange={handleChange}
                                required 
                                className="w-full p-3 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none"
                                style={{ outlineColor: "#7f015f" }}         
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            style={{ backgroundColor: "#7f015f" }} 
                            className="w-full py-3 text-white font-bold rounded-md hover:opacity-90 transition-opacity"
                        >
                            {loading ? "Enviando..." : "Enviar"}
                        </button>
                    </form>
                </div>

                <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                    <img 
                        src="https://somosdevteam.com/image/sarahraddi/site6.png" 
                        alt="Imagem de contato" 
                        className="w-full h-auto max-w-md" 
                    />
                </div>
            </div>
        </section>
    );
}
