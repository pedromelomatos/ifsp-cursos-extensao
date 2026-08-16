# Cursos de Extensão — IFSP

Protótipo front-end funcional para uma nova área pública de Cursos de Extensão do Instituto Federal de São Paulo.

Este projeto foi desenvolvido como parte de um projeto de extensão acadêmico, com o objetivo de estudar melhorias no processo de divulgação, consulta e inscrição em cursos de extensão.

**Protótipo acadêmico não oficial.** Este repositório não representa um sistema oficial do IFSP.

## Objetivo

Permitir que pessoas da comunidade visualizem cursos disponíveis, pesquisem oportunidades, filtrem por campus, modalidade e situação, acessem informações detalhadas e vejam claramente quando as inscrições estão abertas.

## Tecnologias

- React
- JavaScript
- Vite
- HTML
- CSS

## Instalação

```bash
npm install
```

## Execução local

```bash
npm run dev
```

## Build

```bash
npm run build
```

O projeto usa `base: '/ifsp-cursos-extensao/'` em `vite.config.js` para funcionar corretamente no GitHub Pages.

## Deploy

Uma opção simples é usar o script com `gh-pages`:

```bash
npm run deploy
```

Também é possível publicar a pasta `dist` por meio de GitHub Actions, caso o repositório seja configurado para isso.

## Estrutura básica

```text
src/
  components/
  data/
  pages/
  styles/
```

## Observação

O protótipo não possui backend, banco de dados, autenticação, integração com sistemas do IFSP ou inscrição real. Os cursos são dados mockados em JavaScript para apoiar apresentação e coleta de feedback.
