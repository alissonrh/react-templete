# 🚀 Front-End React Template — Feature-Sliced Design

Este repositório é um **template base** para aplicações front-end em React, utilizando:

- ⚛️ React + TypeScript
- 🎨 TailwindCSS
- 📐 Arquitetura Feature-Sliced Design
- 🧹 ESLint + Prettier + Husky

> Criado com foco em escalabilidade, boas práticas e clareza estrutural.

---

## 🔧 Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Feature-Sliced Design](https://dev.to/m_midas/feature-sliced-design-the-best-frontend-architecture-4noj)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [Vitest](https://vitest.dev/)

---

## 🗂️ Estrutura do Projeto (Feature-Sliced)

```bash
src/
├── app/                 # Inicialização da aplicação (providers globais, rotas, tema, etc.)
│   ├── App.tsx
│   ├── index.tsx
│   └── providers/       # Contextos globais, temas, autenticação
├── shared/              # Recursos reutilizáveis (UI, helpers, lib, constants)
│   ├── ui/              # Componentes de UI genéricos (botão, modal, etc.)
│   ├── lib/             # Bibliotecas utilitárias (axios instance, zod schemas)
│   ├── config/          # Configurações globais (env, api urls)
│   ├── types/           # Tipagens globais
│   └── assets/          # Imagens, ícones, fontes
├── entities/            # Modelos de domínio (User, Debt, Installment, etc.)
│   └── user/            # Cada entidade tem lógica de domínio, serviços, etc.
│       ├── model/
│       ├── api/
│       ├── ui/
│       └── lib/
├── features/            # Funcionalidades isoladas com lógica completa
│   └── auth/            # login, register, reset-password...
│       ├── model/
│       ├── api/
│       ├── ui/
│       └── lib/
├── pages/               # Entrypoints de páginas (rotas)
│   ├── HomePage/
│   │   └── index.tsx
│   └── DashboardPage/
│       └── index.tsx
├── widgets/             # Blocos de interface que juntam várias features/entities
│   └── Header/
│   └── Sidebar/
└── test/                # Setup global de testes (setup.ts, mocks, etc.)

```

---

## 💡 Filosofia

- **Modularidade**: funcionalidades são agrupadas por contexto, não por tipo.
- **Baixo acoplamento**: cada módulo conhece apenas o que precisa.
- **Reutilização explícita**: componentes genéricos ficam em `shared/`.
- **Pronto para crescer**: ideal para times, MVPs e produção.

---

## ▶️ Como usar

```bash
git clone https://github.com/alissonrh/react-templete.git
cd nome-do-template
npm install
npm run dev
```

### Se o botão **count in 0** aparecer a aplicação esta funcionando.

## 🧠 Sobre Feature-Sliced Design

A arquitetura FSD propõe dividir o projeto em camadas funcionais em vez de técnicas, aumentando a escalabilidade e mantendo clareza na responsabilidade de cada parte da aplicação.

Referência: [Feature-Sliced Design (dev.to)](https://dev.to/m_midas/feature-sliced-design-the-best-frontend-architecture-4noj)

---
