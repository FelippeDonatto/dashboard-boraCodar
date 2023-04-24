import Image from 'next/image'
import { Heading } from './Heading'

import circle from '/public/circleDois.png'

export function Meta() {
  return (
    <div className="bg-violet-700 px-10 p-7 h-[397px] w-full max-w-[409px] rounded-2xl flex flex-col justify-center items-center">
      <Heading>Meta mensal</Heading>

      <div className="my-8">
        <Image src={circle} alt="" width={197}/>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-violet-500 rounded-full"></div>
          <p>Esperado R$ 70K</p>
        </div>

        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full"></div>
          <p>Alcançado R$ 63K</p>
        </div>
      </div>
    </div>
  )
}
