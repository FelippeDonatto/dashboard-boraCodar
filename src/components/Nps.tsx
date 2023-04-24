import { Smile } from '@/components/Smile'
import { Heading } from './Heading'

export function Nps() {
  return (
    <div className="flex flex-col justify-center items-center bg-violet-700 w-full max-w-[296px] h-[397px] rounded-2xl">
      <Heading>NPS geral</Heading>

      <div className="flex items-center justify-center flex-col h-[197px] my-8">
        <Smile />

        <h2 className="text-green-500 font-semibold text-2xl mt-4">
          Excelente!
        </h2>
      </div>

      <hgroup className="flex items-center gap-2 text-sm font-medium">
        <h3>NPS Score</h3>
        <h3>75</h3>
      </hgroup>
    </div>
  )
}
