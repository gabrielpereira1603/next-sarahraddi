"use client";

import style from "@/app/contact/contact.module.css";

export default function Contact() {
    return (
        <section className="bg-white pt-8">
            <div className="max-w-7xl mx-auto px-4 md:flex md:space-x-8">
                {/* Formulário */}
                <div className="md:w-1/2">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold">Entre em contato!</h2>
                        <h3 className="text-xl text-gray-600">Quer enviar uma mensagem para a Sarah? Preencha o formulário!</h3>
                    </div>
                    
                    <form className="space-y-4">
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Seu nome" 
                                    required 
                                    className="w-full p-3 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none"
                                    style={{
                                        outlineColor: "#7f015f",
                                    }} 
                                />
                            </div>
                            <div className="flex-1">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Seu email" 
                                    required 
                                    className="w-full p-3 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none"
                                    style={{
                                        outlineColor: "#7f015f",
                                    }} 
                                />
                            </div>
                        </div>

                        <div>
                            <input 
                                type="tel" 
                                name="phone" 
                                placeholder="Seu telefone com DDD" 
                                required 
                                className="w-full p-3 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none"
                                style={{
                                    outlineColor: "#7f015f",
                                }} 
                            />
                        </div>

                        <div>
                            <textarea 
                                name="message" 
                                rows="4" 
                                placeholder="Escreva sua mensagem" 
                                required 
                                className="w-full p-3 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none"
                                style={{
                                    outlineColor: "#7f015f",
                                }}         
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            style={{ backgroundColor: "#7f015f" }} 
                            className="w-full py-3 text-white font-bold rounded-md hover:opacity-90 transition-opacity"
                        >
                            Enviar
                        </button>
                    </form>
                </div>

                {/* Imagem */}
                <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                    <img 
                        src="https://somosdevteam.com/image/sarahraddi/site6.png" 
                        alt="Imagem de contato" 
                        className="w-full h-auto max-w-md" // Limita o tamanho da imagem
                    />
                </div>
            </div>
        </section>
    );
}
