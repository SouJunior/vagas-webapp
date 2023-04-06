import { useState } from 'react';
import { useForm } from 'react-hook-form';
//import { yupResolver } from '@hookform/resolvers/yup';
import {AiFillEye} from 'react-icons/ai'
import {RiEyeCloseLine} from "react-icons/ri";

const ResetPassword = () => {

  const [visible,setVisible] = useState(false);
  const [repeatVisible,setRepeatVisible] = useState(false);

  const {
    register,
    handleSubmit,
    //formState: { errors },
} = useForm({
    //resolver: yupResolver(),
});

function onSubmitHandler() {
    //TODO: falta integração com o back-end.
}

  return (
    <main className="bg-grad bg-cover bg-no-repeat w-screen h-screen overflow-y-auto">
       <div className="px-4">
          <div>
            <h1 className="flex justify-center text-center text-white text-5xl font-bold py-14">Redefinir senha</h1>
          </div>
        <form
          onSubmit={handleSubmit(onSubmitHandler)} 
          className="flex flex-col place-items-center gap-10 py-8"
        >
          <label className="flex flex-col gap-3">
            <span className="text-white font-semibold text-2xl">Nova senha</span>
            <div className="flex bg-white border p-2 rounded-md">
              <input  
                size={50} 
                type={visible ? "text" : "password"}
                className="outline-transparent"
                {...register("newpassword")}
              />
              <button 
              className="px-3"
              onClick={() => {setVisible(!visible)}}
              >
                {
                  visible ? 
                  (<RiEyeCloseLine className="h-9 w-9 fill-slate-300"/>) : 
                  (<AiFillEye className="h-9 w-9 fill-slate-300"/>)
                 
                }
              </button>
            </div>
          </label>
          <label className="flex flex-col gap-3">
            <span className="text-white font-semibold text-2xl">Repetir senha</span>
            <div className="flex bg-white border p-2 rounded-md">
              <input  
                size={50} 
                type={repeatVisible ? "text" : "password"}
                className="outline-transparent"
                {...register ("repeatpassword")}
              />
              <button 
                className="px-3"
                onClick={() => {setRepeatVisible(!repeatVisible)}}  
              >
                {
                  repeatVisible ? 
                  (<RiEyeCloseLine className="h-9 w-9 fill-slate-300"/>) : 
                  (<AiFillEye className="h-9 w-9 fill-slate-300"/>)
                }
              </button>
            </div>
          </label>
          <div className=" flex flex-col pt-4">
          <button
            type="submit"
            className="border rounded-md text-white text-3xl px-10 py-4 font-bold hover:opacity-75"
          >
          Definir nova senha
          </button>
          </div>
        </form>
       </div>
    </main>
  )
}

export default ResetPassword