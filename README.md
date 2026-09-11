# Dra. Luiza Teixeira

Site único em Next.js, React e TypeScript, adaptado do projeto completo premium-vendas. Identidade em preto, marfim e dourado, retratos reais, sete registros de antes e depois, animações responsivas, favicon LT e imagens de compartilhamento.

## Executar

Node.js 20.9 ou superior.

```bash
npm ci
npm run dev
```

## Vercel

Importe este repositório, selecione **Next.js** e mantenha a raiz como diretório do projeto. Instalação: `npm ci`. Compilação: `npm run build`. Diretório de saída: padrão do Next.js. Não há variáveis obrigatórias nem backend externo.

O endereço de produção fornecido pela Vercel é usado nos metadados automaticamente. Para domínio próprio, configure `seo.url` em `data/site.ts`. Nenhum vínculo com a hospedagem do template foi mantido.

## Conteúdo

Contatos, registro profissional, biografia, fotos e galeria ficam em `data/site.ts`. Todos os botões de agendamento usam `appointmentUrl`, direcionando para o WhatsApp **+55 (54) 99956-8188**. O endereço é Rua Sinimbu, 2302, sala 1207, Storia Offices, Caxias do Sul/RS.

Dados profissionais conferidos em 11/09/2026:

- [Site oficial e procedimentos](https://draluizateixeira.com.br/)
- [Formação e CRO-RS 26012](https://draluizateixeira.com.br/sobre-mim/)
- [Endereço e link de WhatsApp](https://draluizateixeira.com.br/contato/)
- [Instagram informado pelo cliente](https://www.instagram.com/dra.luizateixeira/)

As fotografias foram fornecidas pelo cliente. Os registros clínicos foram convertidos integralmente para WebP, mantendo enquadramento, montagem e marca incorporada. A galeria apresenta a foto completa e oferece comparação entre as duas metades laterais; os enquadramentos podem variar. Não foram criados resultados, avaliações, números de pacientes ou depoimentos.

O retrato do anexo 11 aparece na abertura. Os anexos 2 e 3 compõem as seções editoriais. Os anexos 4 a 10 compõem os resultados. A imagem pequena de perfil foi dispensada para preservar a qualidade visual.

## Estrutura

- `components/campaign-hero.tsx`: abertura e selo.
- `components/essence-chapter.tsx`: essência e pilares.
- `components/author-chapter.tsx`: apresentação da doutora.
- `components/experience-statement.tsx`: seção editorial de experiência.
- `components/chapters.tsx`: galeria, jornada e contato.
- `app/luiza.css`: identidade e enquadramentos responsivos.
- `app/icon.svg`, `app/favicon.ico` e `app/apple-icon.png`: favicon próprio.
- `app/opengraph-image.png` e `app/twitter-image.png`: compartilhamento 1200 × 630.

Fontes locais e respectivas licenças preservadas em `public/fonts`. As animações respeitam `prefers-reduced-motion`. A navegação mobile e a galeria usam diálogos nativos, com fechamento por Escape e restauração de foco.

## Validação

`npm run build` compila a aplicação e confere TypeScript. O projeto não cria site privado, backend de cadastro ou hospedagem adicional. A publicação na Vercel é feita pela importação deste repositório.
