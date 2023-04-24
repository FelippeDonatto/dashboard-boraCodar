import Image from 'next/image'
import { Heading } from './Heading'

import grafic from '/public/grafic.png'

export function Panorama() {
  return (
    <div className="flex flex-col justify-center w-full bg-violet-700 rounded-2xl px-12 py-7">
      <Heading>Vendas por dia da semana</Heading>

      <div className='flex'>
        <div className="flex justify-between flex-col w-full mt-">
          <div className='my-6'>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 0.5L12.9952 11.75H0.00480938L6.5 0.5Z"
                fill="url(#paint0_linear_201_16)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_201_16"
                  x1="6.5"
                  y1="0.5"
                  x2="6.5"
                  y2="15.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#81FBB8" />
                  <stop offset="1" stop-color="#28C76F" />
                </linearGradient>
              </defs>
            </svg>

            <h4>Dia com mais vendas</h4>
            <Heading>quarta-feira</Heading>
          </div>

          <div>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 11.5L12.9952 0.25H0.00480938L6.5 11.5Z"
                fill="url(#paint0_linear_201_24)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_201_24"
                  x1="6.5"
                  y1="11.5"
                  x2="6.5"
                  y2="-3.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EA5455" />
                  <stop offset="1" stop-color="#FEB692" />
                </linearGradient>
              </defs>
            </svg>

            <h4>Dia com menos vendas</h4>
            <Heading>domingo</Heading>
          </div>
        </div>
        <div className="w-full">
          <Image src={grafic} alt="" width={543} />
        </div>
      </div>
    </div>
  )
}
