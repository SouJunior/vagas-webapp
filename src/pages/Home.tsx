import React from "react";
import Cardcandidate from "../components/CardCandidate";
import { candidates } from "../helpers/candidates.js";
import Navbar from "../components/Navbar";
import SuggestionLabel from "../components/SuggestionLabel";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            {" "}
            <section className="w-full h-full relative">
                <Navbar />
                <h2 className="mt-56 text-center font-extrabold text-3xl text-sky-700 mb-16">
                    VAGAS POPULARES
                </h2>
                <section className="w-9/12 my-0 mx-auto mb-24 ">
                    <div className="flex justify-center mb-5 gap-5">
                        <SuggestionLabel label="suggestion label" />
                        <SuggestionLabel label="suggestion label" />
                        <SuggestionLabel label="suggestion label" />
                        <SuggestionLabel label="suggestion label" />
                        <SuggestionLabel label="suggestion label" />
                    </div>
                    <div className="flex justify-center mb-5 gap-5">
                        <SuggestionLabel label="suggestion label" />
                        <SuggestionLabel label="suggestion label" />
                        <SuggestionLabel label="suggestion label" />
                        <SuggestionLabel label="suggestion label" />
                    </div>
                    <div className="flex justify-center mb-5 gap-5 ">
                        <SuggestionLabel label="suggestion label" />
                        <SuggestionLabel label="suggestion label" />
                        <SuggestionLabel label="suggestion label" />
                    </div>
                </section>
                <section className="mt-20 w-2/3 my-0 mx-auto text-sky-700 flex justify-center items-center mb-20">
                    <div className="mr-20">
                        <h2 className="text-7xl">
                            SOBRE
                            <br /> NÓS
                        </h2>
                    </div>
                    <div className="w-2/4">
                        <p className="text-gray-700 leading-4 mb-5">
                            Somos um projeto opensource que ajuda pessoas com
                            pouca ou nenhuma experiência profissional a
                            conseguir encontrar vagas de junior com mais
                            facilidade. Colabore abrindo uma issue ou propondo
                            soluções{" "}
                            <a
                                href="http://www.github.com.br"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                no github.
                            </a>
                        </p>
                        <p className="text-gray-700 leading-4">
                            O time SouJunior é composto de voluntários de todo o
                            Brasil e exterior, sendo os fundadores:
                        </p>
                    </div>
                </section>
                <section className="grid grid-cols-3 w-4/6 my-0 mx-auto gap-5">
                    {candidates.map(
                        ({ avatar, email, links, location, name }) => {
                            return (
                                <Cardcandidate
                                    key={name}
                                    avatar={`${avatar}`}
                                    email={email}
                                    links={links}
                                    location={location}
                                    name={name}
                                />
                            );
                        }
                    )}
                </section>
            </section>
            <Footer />
        </>
    );
};

export default Home;

