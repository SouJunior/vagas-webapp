import React from "react";
import { Header, Nav } from "./styles";
import logo from "../../assets/image/logo_soujunior.png";
import Input from "./InputField";
import locationPinIcon from "../../assets/svg/location_pin.svg";
import { Button } from "../Button/styles";
import { Link } from "react-router-dom";

const Navbar: React.FC = (): JSX.Element => {
    return (
        <Header>
            <Nav>
                <img src={logo} alt="imagem escrito 'souJunior', na cor azul" />
                <div>
                    <Input
                        placeholder="cargo, área de atuação ou empresa"
                        startLabel="O quê"
                        type="text"
                    />
                    <Input
                        placeholder="remoto, cidade, estado ou país"
                        startLabel="Onde"
                        type="text"
                        endIcon={locationPinIcon}
                        listName="citys"
                    />
                    <Button className="font-bold ml-4">Buscar vagas</Button>
                </div>
            </Nav>
            <div className="nav__filter">
                <div className="nav__filter-area">
                    <Link
                        to="#about"
                        className="font-medium text-slate-400 hover:underline ml-10"
                    >
                        Sobre nós
                    </Link>
                    <div>
                        <select name="ad_date">
                            <option value="0" selected>
                                Data do anúncio
                            </option>
                        </select>
                        <select name="ad_date">
                            <option value="0">Tipo de vaga</option>
                        </select>
                        <select name="ad_date">
                            <option value="0">Nível de experiência</option>
                        </select>
                        <select name="ad_date">
                            <option value="0">Presencial/remoto</option>
                        </select>
                        <span className="divide-x-4"></span>
                        <select name="ad_date">
                            <option value="0">Todos os filtros</option>
                        </select>
                    </div>
                </div>
            </div>
        </Header>
    );
};

export default Navbar;

