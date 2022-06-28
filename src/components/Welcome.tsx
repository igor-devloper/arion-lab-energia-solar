import { ArrowUpRight } from "phosphor-react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Welcome() {
  return (
    <div className="flex-1">
      <div className="flex items-center flex-col gap-2 bg-gray-700 ml-40 mr-40 mt-40 rounded p-5">
        <h1 className="text-2xl leading-tight">Bem vindo Ao On-Boarding da <strong className="text-orange-500">Arion Otimização e Energia</strong> </h1>
        <p className="text-sm text-gray-200 flex mt-2">Clique em alguma das aulas para começar</p>
      </div>
    </div>
  )
}