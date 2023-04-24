import { Meta } from '@/components/Meta'
import { Nps } from '@/components/Nps'
import { Panorama } from '@/components/Panorama'
import { Vendas } from '@/components/Vendas'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-8 w-full h-screen max-lg:flex-wrap">
      <div className="flex justify-center gap-8 w-full">
        <Nps />
        <Vendas />
        <Meta />
      </div>

      <div className='w-full max-w-[1120px]'>
        <Panorama />
      </div>
    </main>
  )
}
