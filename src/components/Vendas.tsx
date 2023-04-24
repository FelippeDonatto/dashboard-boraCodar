import Image from 'next/image'
import { Heading } from './Heading'

import circle from '/public/circleUm.png'

export function Vendas() {
  return (
    <div className="bg-violet-700 px-12 p-7 h-[397px] w-full max-w-[351px] rounded-2xl flex flex-col justify-center items-center">
      <Heading>Vendas fechadas</Heading>

      <div className="my-8">
        <Image src={circle} alt="" width={197} />
      </div>

      <div className="flex gap-1">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-violet-500 rounded-full"></div>
          <p>Esperado 100</p>
        </div>

        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-gradient-to-r from-violet-300 to-violet-600 rounded-full"></div>
          <p>Alcançado 70</p>
        </div>
      </div>
    </div>
  )
}
