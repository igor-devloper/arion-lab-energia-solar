import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscribeMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscribeMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
        password,
      }
    })
    navigate('/login')
  }
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col">
      <div className="w-full max-w-[1100px] justify-between flex items-center mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Formação <strong className="text-blue-500">completa em Energia solar</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Aprender a <strong className="text-blue-500">instalar um sistema de energia solar</strong>é muito simples, porém muito mais fácil se você adquirir o método certo, ferramenta e orientações corretas, que te ajudem a entender todo o passo a passo da instalação. Assim com o <strong className="text-blue-500">instalador solar de alta performance</strong> você aprende do básico ao avançado
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se no On-Boarding</strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded h-14 px-5"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded h-14 px-5"
              type="email"
              placeholder="Digite seu email"
              onChange={event => setEmail(event.target.value)}
            />  
            <input
              className="bg-gray-900 rounded h-14 px-5"
              type="password"
              placeholder="Crie uma senha"
              onChange={event => setPassword(event.target.value)}
            />
            <button
              className="mt-4 bg-orange-500 uppercase py-4 rounded font-bold text-sm hover:opacity-60 transition-opacity disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div >


      <img src="https://cdn.discordapp.com/attachments/886812975254634528/991234925518929930/unknown.png" alt="" className="mt-10 max-w-[1099px] max-h-[1099px] mx-auto" />
    </div>
  )
}