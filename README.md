# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Sistema de Agendamento

Este projeto é um sistema simples de agendamento onde os usuários podem selecionar horários disponíveis. Ao clicar em um horário, a cor muda para indicar que o horário está aguardando confirmação. O projeto é construído com **React** e estilizado com **Tailwind CSS**.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

agendamento-app/ ├── public/ │ └── index.html # Arquivo HTML principal ├── src/ │ ├── components/ # Componentes React │ │ └── Scheduler.jsx # Componente de agendamento │ ├── App.jsx # Componente principal da aplicação │ ├── main.jsx # Ponto de entrada da aplicação │ └── index.css # Estilos globais └── package.json # Configurações do projeto e dependências

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS para estilização.
- **Vite**: Ferramenta de build para desenvolvimento rápido.

## Instalação

Para instalar e executar o projeto, siga as etapas abaixo:

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd agendamento-app
