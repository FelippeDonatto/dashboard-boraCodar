<div align="center">
  <img src="https://user-images.githubusercontent.com/7221671/228865434-48fb40fe-58f8-49b1-8a7b-0627b1846165.png" width="150" />
</div>

<h2 align="center"> Dashboard - Desafio 8 - #bora codar Rocketseat</h2>

<div align="center"> 
  <img src="https://user-images.githubusercontent.com/7221671/234083111-b5f5c030-4e7c-40eb-a4e0-036d794b9580.png" width="1920" />
</div>

<h1>Bora Codar - Dashboard</h1>

<p align="center">Desenvolvi essa aplicação utilizando como base o modelo sugerido no evento da Rockeseat #boraCodar. Foi utilizadas as tecnologias como NEXT, Tailwind.</p>

<h2>Referência</h2>

- [Template Bora Codar](https://www.figma.com/community/file/1205146101173113980/%23boraCodar---Desafio-6)
- [GitHub BoraCoadar](https://github.com/maykbrito/boracodar)

<h2>Licença</h2>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

<h2>Documentação de cores</h2>

| Cor        | Hexadecimal                                                      |
| ---------- | ---------------------------------------------------------------- |
| Violet 900 | ![#292738](https://via.placeholder.com/10/292738?text=+) #292738 |
| Violet 700 | ![#363447](https://via.placeholder.com/10/363447?text=+) #363447 |
| Violet 600 | ![#7367F0](https://via.placeholder.com/10/7367F0?text=+) #7367F0 |
| Violet 500 | ![#4A4556](https://via.placeholder.com/10/4A4556?text=+) #4A4556 |
| Violet 400 | ![#A66DE9](https://via.placeholder.com/10/A66DE9?text=+) #A66DE9 |
| Violet 300 | ![#CE9FFC](https://via.placeholder.com/10/CE9FFC?text=+) #CE9FFC |
| green  500 | ![#81FBB8](https://via.placeholder.com/10/81FBB8?text=+) #81FBB8 |
| orange 500 | ![#DF9780](https://via.placeholder.com/10/DF9780?text=+) #DF9780 |

<h2>Instalação</h2>

Instale Card Produto com npm

_Para instalar as dependencias_

```bash
  npm intall
```

_Para rodar o projeto_

```bash
  npm run dev
```

<h2>Tecnologias utilizadas</h2>

_Instalação do Tailwind para Next_

```bash
  npm install -D tailwindcss postcss autoprefixer
```

```bash
  npx tailwindcss init -p
```

_Adicionar ao arquivo tailwind.config.js_

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      violet: {
        900: '#292738',
        700: '#363447',
        600: "#7367F0",
        500: "#4A4556",
        400: "#A66DE9",
        300: "#CE9FFC"
      },

      green: {
        500: '#81FBB8'
      },

      orange: {
        500: '#DF9780'
      },

      white: '#FFFFFF'
    },
    extend: {}
  },
  plugins: []
}




```

_Adicione ao seu CSS global_

```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```