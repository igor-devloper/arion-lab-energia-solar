import { useState, FormEvent } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscribeMutation } from "../graphql/generated";

export function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createLogin, { loading }] = useCreateSubscribeMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    
    navigate('/event')
  }
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col">
      <div className="flex items-center justify-center mt-7">
        <Logo />
      </div>
      <div className="flex gap-2 text-center items-center justify-center mt-[95px]">
        <h1 className="text-[2.5rem] leading-tight">
          Formação <strong className="text-blue-500">completa em Energia solar</strong>
        </h1>
      </div>
      <div className="w-full flex items-start justify-center p-8 gap-3 absolute mt-56">
        <div className="p-8 bg-gray-700 border border-gray-500 rounded items-center justify-center">
          <strong className="text-2xl mb-6 block">Entrar no On-Boarding</strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              {...register('email')}
              className="bg-gray-900 rounded h-14 px-5"
              name="email"
              typeof="Email"
              autoComplete="email"
              required
              type="email"
              placeholder="Email address"
            />
            <input
              {...register('password')}  
              className="bg-gray-900 rounded h-14 px-5"
              type="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="Password"
            />
            <button
              className="mt-4 bg-orange-500 uppercase py-4 rounded font-bold text-sm hover:opacity-60 transition-opacity disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              Entrar
            </button>
          </form>
        </div>
      </div >


      <img 
        src="https://cdn.discordapp.com/attachments/886812975254634528/991247224040333382/unknown.png"  className="mt-[50px] max-w-[1099px] max-h-[1099px] mx-auto " />
    </div>
  )
}