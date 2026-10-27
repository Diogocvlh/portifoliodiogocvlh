# Portfólio · Diogo Carvalho

Interface de portfólio pessoal em português, organizada em seções de apresentação, tecnologias, projetos e contato. O projeto utiliza React e TypeScript, com animações e componentes reutilizáveis.

[Executar](#executar-localmente) · [Estrutura](#estrutura) · [Personalizar](#personalização) · [Limites atuais](#limites-atuais)

## Tecnologias

- React 18, TypeScript e Vite 8.
- Tailwind CSS e componentes shadcn/ui com Radix UI.
- Framer Motion para animações.
- React Router para a página principal e a rota de página não encontrada.
- Vitest, Testing Library, ESLint e configuração de Playwright.

## Executar localmente

Utilize Node.js 22.12 ou superior e npm. Na raiz do projeto:

```bash
npm ci
npm run dev
```

O servidor está configurado para a porta `8080`. Abra o endereço informado no terminal; se a porta estiver ocupada, o Vite poderá escolher outra.

Não é necessário configurar banco, conta externa ou variáveis de ambiente. O arquivo [.env.example](.env.example) registra esse comportamento.

## Comandos

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Iniciar o servidor de desenvolvimento |
| `npm run build` | Gerar a versão de produção em `dist/` |
| `npm run preview` | Servir o build localmente para conferência |
| `npm run lint` | Executar o ESLint |
| `npm test` | Executar os testes Vitest existentes |
| `npx tsc -b` | Conferir os projetos TypeScript |
| `npm audit` | Consultar avisos de segurança das dependências |

O teste Vitest atual é um exemplo de configuração; ele não comprova os fluxos da interface. A configuração de Playwright está disponível, mas ainda não há testes de navegação implementados.

## Estrutura

```text
src/
├── assets/             # Imagens locais
├── components/         # Seções e componentes reutilizáveis
│   └── ui/             # Componentes de interface
├── hooks/              # Hooks compartilhados
├── lib/                # Utilitários
├── pages/              # Página principal e página não encontrada
└── test/               # Configuração e exemplo de teste
public/                 # Arquivos públicos
```

## Personalização

- Apresentação e tecnologias: `src/components/HeroSection.tsx`, `AboutSection.tsx` e `SkillsSection.tsx`.
- Projetos e links: `src/components/ProjectsSection.tsx`.
- Contatos: `src/components/ContactSection.tsx` e `Footer.tsx`.
- Cores e tipografia: `src/index.css` e `tailwind.config.ts`.
- Título e metadados de compartilhamento: `index.html`.

Ao publicar, configure o servidor estático para encaminhar rotas da aplicação para `index.html`. O Vite gera arquivos estáticos; não inclui um servidor de backend.

## Limites atuais

- O conteúdo das seções é estático; não há painel administrativo, autenticação, banco ou envio de formulários.
- Os contatos abrem serviços externos ou o aplicativo de e-mail do visitante.
- Links de demonstração ainda não cadastrados aparecem como pendentes.
- Imagens dos cards ilustram os temas dos projetos e não substituem capturas das aplicações.
- As fontes são carregadas do Google Fonts e dependem de acesso à internet.

Mantenha credenciais fora do código e dos commits. Qualquer variável com prefixo `VITE_` pode ser exposta no navegador.

## Verificação e integração contínua

A [CI](https://github.com/Diogocvlh/portifoliodiogocvlh/actions/workflows/ci.yml) executa instalação pelo lockfile, TypeScript, lint, build e auditoria de dependências em Node.js 22.

Na revisão de 27 de outubro de 2026, npm ci, TypeScript e build passaram. O ESLint terminou com zero erros e sete avisos de Fast Refresh; npm audit não apontou vulnerabilidades naquele momento. O teste de exemplo não foi usado como evidência de cobertura funcional.
