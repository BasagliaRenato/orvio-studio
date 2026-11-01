# ORVIO Studio

Portfólio do estúdio ORVIO, especializado em landing pages premium.
Next.js, React, TypeScript e Tailwind CSS. Conteúdo em português e inglês.

## Desenvolvimento

Use Node.js 24 e a versão do pnpm indicada em `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Publicação gratuita no GitHub Pages

O workflow `.github/workflows/pages.yml` gera a versão estática e publica
automaticamente quando há novos commits na branch `main`.

Nas configurações do repositório, **Settings → Pages → Source** deve estar
definido como **GitHub Actions**.

Endereço: https://basagliarenato.github.io/orvio-studio/

O build do Pages usa `NEXT_PUBLIC_GITHUB_PAGES=true` e
`NEXT_PUBLIC_BASE_PATH=/orvio-studio`. O prefixo é aplicado aos links,
scripts e imagens para que as páginas de projeto também abram diretamente.

Para gerar essa versão localmente em PowerShell:

```powershell
$env:NEXT_PUBLIC_GITHUB_PAGES = 'true'
$env:NEXT_PUBLIC_BASE_PATH = '/orvio-studio'
pnpm build
```

Os arquivos publicados ficam em `out/`. O desenvolvimento local normal
continua usando `pnpm dev`, sem essas variáveis.

## Conteúdo e contato

- `lib/content.ts`: textos em português e inglês.
- `lib/projects.ts`: dados e apresentação dos cases conceituais.
- `lib/site-config.ts`: nome do estúdio e endereço de contato.
- `components/work/visuals/landings.tsx`: visuais dos projetos.

O formulário de contato ainda está em modo demonstração e não envia mensagens.
Os três projetos são estudos conceituais.
