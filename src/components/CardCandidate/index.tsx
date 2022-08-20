import React from "react";

export type CardContributorsType = {
    avatar: string;
    name: string;
    links: string[];
    email: string;
    location: string;
};

const Cardcandidate = ({
    avatar,
    name,
    links,
    email,
    location,
}: CardContributorsType) => {
    return (
        <div className="px-3 py-4 border-slate-300 border flex shadow-md rounded">
            <img
                src={avatar}
                alt="foto de perfil do candidato"
                className="rounded-full mr-6"
            />
            <div className="flex flex-col justify-between">
                <div>
                    <h4 className="font-bold text-xl text-gray-600 mb-1">
                        {name}
                    </h4>
                    <p className="text-sm font-medium">{location}</p>
                </div>
                <div className="border-t pt-2 ">
                    {links.map((link, index) => {
                        return (
                            <a
                                key={index}
                                href="#"
                                className="gap-2 text-sm text-gray-500 anchor mr-3 relative"
                            >
                                {link}
                                <span className="w-1 h-1 bg-slate-300 rounded-full absolute  top-2 -right-2"></span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Cardcandidate;

