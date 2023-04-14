import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailSchema } from '../validations/EmailValidation';
import { Button } from '../components/Button';
import circlesImage from '../assets/imgs/circles.svg';
import lockImage from '../assets/imgs/lock.svg';
import rowImage from '../assets/imgs/row.svg';

import '../App.css'

const ConfirmEmail = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitSuccessful },
    } = useForm({
        resolver: yupResolver(emailSchema),
    });

    function onSubmitHandler() {
        //TODO: falta integração com o back-end.
    }

    return (
        <main
            className="flex justify-center bg-cover bg-center bg-no-repeat w-screen h-screen overflow-y-auto"
            style={{ backgroundImage: `url(${circlesImage})` }}
        >
            <div className="container px-4">
                <div className="flex justify-center py-8">
                    <img src={rowImage} alt="linha horizontal" width="100%" />
                </div>
                <div className="font-semibold text-center text-3xl py-8 text-blue">
                    {isValid && !isSubmitSuccessful && (<h1>
                        Um e-mail de confirmação será enviado dentro de alguns minutos.
                    </h1>)}
                    {isSubmitSuccessful && (<h1>
                        Será encaminhada uma mensagem para o e-mail cadastrado, informando os próximos passos para a redefinição da senha.
                    </h1>)}
                </div>
                <div className="flex justify-center py-8">
                    <img src={lockImage} width="258.47px" height="228.33px" alt="cadeado dentro de um círculo" />
                </div>
                <form
                    onSubmit={handleSubmit(onSubmitHandler)}
                    className="flex flex-col place-items-center gap-5 py-8"
                >
                    <label className="flex flex-col gap-3">
                        <strong className="text-gray-500">Digite seu e-mail
                            <span className="text-red-600"> *</span>
                        </strong>
                        <input
                            size={40}
                            className="w-full border border-blue-400 rounded p-3"
                            type="email"
                            placeholder="E-mail"
                            {...register("email")}
                        />
                    </label>
                    {errors.email && <>{errors.email.message}</>}
                    <Button
                        type="submit"
                        className="block border w-60 rounded hover:bg-blue-700 "
                    >
                        Enviar
                    </Button>
                </form>
            </div>
        </main>

    )
}

export default ConfirmEmail