import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidationPasswordAndEmail } from '../formValidation/formValidation';
import { MessageError, MessageError2 } from './styles';


const Card = () => {
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');

    // function handleFormOnSubmit(e: any) {
    //     e.preventDefault();
    // }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaValidationPasswordAndEmail),
    });

    function handleFormOnSubmit() {
        console.log('logando...')
    }

    return (
        <div className="container h-screen flex flex-col items-center justify-center">
            <div className="login-card w-[464px] p-10 bg-[#F3F3F3] rounded-md shadow-md lg:max-w-xl">
                <h1 className=" mb-4 mt-0 hd:mt-6 text-5xl font-extrabold text-center text-blue-600">
                    <span className='font-normal'>Sou</span>Junior
                </h1>
                <h2 className="text-center text-2xl">Entrar</h2>
                <hr className="my-4 h-px hd:mb-20 xl:my-4 bg-gray-200 border-0 gray:bg-gray-700" />
                <form id="login-form" onSubmit={handleSubmit(handleFormOnSubmit)}>
                    <div>
                        <label className="block text-sm font-semibold text-gray-800"></label>
                        <div className="relative flex w-full flex-wrap items-strech mb-3">
                            <span className="absolute inset-y-[30%] right-[6%] z-10 h-full leading-snuf font-normal">
                                <svg
                                    width="23"
                                    height="23"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.523375 6.7108L10.9262 0.4738C11.1011 0.368893 11.3012 0.313477 11.5051 0.313477C11.709 0.313477 11.909 0.368893 12.0839 0.4738L22.4766 6.71192C22.56 6.76189 22.629 6.83261 22.6769 6.9172C22.7248 7.00178 22.75 7.09734 22.75 7.19455V21.5001C22.75 21.7984 22.6315 22.0846 22.4205 22.2955C22.2095 22.5065 21.9234 22.6251 21.625 22.6251H1.375C1.07663 22.6251 0.790483 22.5065 0.579505 22.2955C0.368526 22.0846 0.25 21.7984 0.25 21.5001V7.19342C0.24998 7.09621 0.275153 7.00066 0.323064 6.91607C0.370975 6.83149 0.439989 6.76077 0.523375 6.7108ZM18.6393 8.27455L11.5686 14.3934L4.35287 8.2678L2.89713 9.9823L11.5821 17.3567L20.1107 9.97668L18.6393 8.27455V8.27455Z"
                                        fill="#E6E6E6"
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                {...register("email")}
                                className="h-14 relative w-full px-4 py-2 mt-2 text-blue-700 border rounded-md focus:border-purple-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="E-mail"
                            />
                            {/* @ts-ignore */}
                            <MessageError>{errors?.email?.message}</MessageError>
                        </div> 
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-800"></label>
                        <div className="relative">
                            <span className="absolute inset-y-[20%] right-[6%] z-10 h-full leading-snuf font-normal">
                                <svg
                                    width="21"
                                    height="24"
                                    viewBox="0 0 21 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.25 8H19.5C19.7984 8 20.0845 8.11853 20.2955 8.32951C20.5065 8.54048 20.625 8.82663 20.625 9.125V22.625C20.625 22.9234 20.5065 23.2095 20.2955 23.4205C20.0845 23.6315 19.7984 23.75 19.5 23.75H1.5C1.20163 23.75 0.915483 23.6315 0.704505 23.4205C0.493526 23.2095 0.375 22.9234 0.375 22.625V9.125C0.375 8.82663 0.493526 8.54048 0.704505 8.32951C0.915483 8.11853 1.20163 8 1.5 8H3.75V6.875C3.75 5.08479 4.46116 3.3679 5.72703 2.10203C6.9929 0.836159 8.70979 0.125 10.5 0.125C12.2902 0.125 14.0071 0.836159 15.273 2.10203C16.5388 3.3679 17.25 5.08479 17.25 6.875V8ZM15 8V6.875C15 5.68153 14.5259 4.53693 13.682 3.69302C12.8381 2.84911 11.6935 2.375 10.5 2.375C9.30653 2.375 8.16193 2.84911 7.31802 3.69302C6.47411 4.53693 6 5.68153 6 6.875V8H15ZM9.375 14.75V17H11.625V14.75H9.375ZM4.875 14.75V17H7.125V14.75H4.875ZM13.875 14.75V17H16.125V14.75H13.875Z"
                                        fill="#E6E6E6"
                                    />
                                </svg>
                            </span>
                            <input
                                type="password"
                                {...register("password")}
                                className="h-14 block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Password"
                            />
                            {/* @ts-ignore */}
                            <MessageError2>{errors?.password?.message}</MessageError2>
                        </div>
                    </div>

                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">
                        <a href="#">Esqueci minha senha</a>
                    </label>

                    <hr className="my-6 h-px hd:mt-16 hd:my-8 bg-gray-200 border-0 gray:bg-gray-700"/>
                    <div className='flex items-center'>
                        <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">
                            Me mantenha conectado
                        </label>
                    </div>
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="w-full h-16 rounded mb-5 text-white bg-blue-600 border-2 border-blue-600"
                            id="submit-button"
                        >
                            Entrar
                        </button>
                        <button className="border-2 h-16 border-blue-600 text-blue w-full rounded">
                        <a href='#'>Criar conta</a>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Card;
