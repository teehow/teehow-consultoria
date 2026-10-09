# Catálogo de publicações técnicas

## Implementação

Site estático (HTML/CSS/JavaScript), sem framework, backend, instalação de pacotes ou build. `catalog.js` é carregado antes dos demais scripts e utiliza os helpers e o idioma do site. As rotas `#/pt/courses` e `#/en/courses` foram preservadas, assim como detalhes dos livros, cabeçalho, rodapé, páginas institucionais e políticas.

Componentes: `coursesLanding` (hero, catálogo, benefícios, expansão e CTA), `catalogCard`, `catalogGrid`, filtros, preço, botões externos, eventos locais e metadados. O catálogo da página inicial usa os mesmos dados/cards. As páginas dos livros usam os mesmos preços e links de compra.

## Cadastrar um e-book

Adicionar um objeto ao array `ebooks` em `catalog.js`:

```js
{
  id:'id-unico', slug:null,
  title:'Título comercial original',
  description:{pt:'Descrição em português',en:'English description'},
  category:'sql', tags:['sql','palavra-chave'], level:'beginner',
  language:'en', format:'PDF',
  coverImage:'assets/capa.webp', width:600, height:900,
  price:2.90, currency:'USD',
  payhipUrl:'URL oficial fornecida pelo autor', previewUrl:'URL oficial da amostra',
  published:false, featured:false, order:3,
  highlights:{pt:['Característica confirmada'],en:['Confirmed feature']}
}
```

1. Copiar a capa oficial para `assets`, otimizar sem distorção e configurar dimensões reais. Não publicar o PDF completo.
2. Configurar título, descrições, idioma do PDF e características verificadas. `published:true` torna o produto visível; `false` o oculta de cards, filtros e dados estruturados.
3. Preço e moeda são opcionais; sem preço aparece uma orientação para consultar a Payhip. Alterar **somente `price`/`currency` deste objeto**, sem scraping ou sincronização automática. Valores atuais fornecidos e conferidos em 09/10/2026: USD 2.90 e USD 5.90.
4. Alterar o link somente em `payhipUrl`; todos os botões reutilizam a configuração. Nenhum checkout/carrinho próprio.
5. `slug` é opcional e aponta para uma página de detalhes já registrada no roteador. Um novo produto sem página própria pode usar `slug:null` e aparece no catálogo sem editar componentes. Para criar detalhes próprios, registrar sua rota e conteúdo separadamente — não presumir que um slug novo cria a página.
6. Para nova categoria, acrescentar uma chave PT/EN em `ebookTaxonomy.subjects`, então associar `category`/`tags` do produto. Filtros mostram somente opções presentes em produtos publicados. O nível Avançado está preparado, mas não aparece enquanto não houver produto desse nível.
7. Novos idiomas do material: adicionar rótulo em `ebookTaxonomy.languages`. O idioma da interface não traduz o PDF.

Busca considera título, descrição localizada e tags, sem distinção de caixa/acentos. Filtros combinam nível e assunto. O estado é mantido ao alternar PT/EN durante a sessão, sem armazenamento adicional.

## Analytics sem rastreamento instalado

Não existia GA/GTM/pixel. Não foi instalado nenhum serviço externo. A interface emite `CustomEvent('teehow:analytics')` apenas no navegador, sem rede, fila ou persistência. Eventos: `ebook_catalog_view`, `ebook_card_click` (detalhes), `ebook_buy_click`, `ebook_filter_used`, `ebook_search_used`. Cliques de compra **não são vendas**. Busca envia apenas `has_query` e contagem, nunca o termo digitado. Eventos de produto incluem ID, título, categoria, nível e idioma da página.

Uma integração futura deve escutar o evento e encaminhá-lo apenas após resolver consentimento, privacidade e configurar o serviço escolhido. Não há credenciais necessárias hoje. UTMs não foram adicionados: preservar os links originais até aprovação de uma estratégia de atribuição; não encaminhar filtros ou pesquisas aos links.

## SEO e limites atuais

Título e descrição localizados para courses; Open Graph e Twitter Card atualizados no DOM; alt de capas, headings semânticos e JSON-LD `ItemList`/`Book` com dados reais. Não foram criados ratings, descontos, ofertas ou disponibilidade artificial. Foi preferido `Book` a `Product`/`Offer` pois os preços são referências locais, não um checkout sincronizado.

Canonical aponta ao documento real (`https://www.teehowconsultoria.com.br/`), **não** a uma falsa URL indexável por fragmento. Não foi adicionado hreflang para hashes: versões PT/EN ainda não são documentos independentes. Metadados dinâmicos não garantem prévias localizadas em redes sociais que não executam JavaScript. Nenhuma promessa de indexação das rotas hash.

Recomendação separada: gerar páginas estáticas reais `/pt/courses/`, `/en/courses/` e detalhes por produto, com HTML de conteúdo e metadados pré-renderizados, canonical próprio, hreflang recíproco e sitemap. Preservar rotas antigas como aliases no cliente. Não mudar todas as rotas nem criar redirecionamentos 404 nesta etapa.

Fontes oficiais consultadas:

- Google: https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=en (não usar fragmentos para distinguir conteúdos).
- Google: https://developers.google.com/search/blog/2020/05/frequently-asked-questions-about?hl=en (limitações de links hash).
- Payhip: https://help.payhip.com/article/126-direct-checkout-link (há checkout direto oficial; os links atuais não foram substituídos sem aprovação).
- Produtos: https://payhip.com/b/oiJ15 e https://payhip.com/b/YsMiQ.

## Performance, acessibilidade e testes

Capas oficiais derivadas em WebP 600×900; originais preservados. Dimensões explícitas, `loading=lazy`, `decoding=async`, sem dependências e sem animações pesadas. Cards em duas colunas no desktop e uma no mobile; filtros compactos; áreas de toque ≥50px; labels, nomes acessíveis por produto, foco visível e feedback `aria-live`. CTA rola ao catálogo sem alterar o hash e respeita movimento reduzido. Testes visuais complementam os testes, mas não equivalem a auditoria/certificação WCAG integral.

Executar testes (Node instalado ou runtime disponível):

```powershell
node --test tests/catalog.test.cjs
node --check catalog.js
node --check app.js
node --check foundations.js
```

Não existe build: o próprio diretório é o artefato de produção para GitHub Pages. Servir com `python -m http.server`, verificar busca/filtros/reset, idioma, detalhes, links, teclado e larguras 360/768/desktop antes de publicar.

## Fora do escopo e pendências

Sem checkout próprio, login, hospedagem de PDFs, newsletter, bundles, formação completa ou provas sociais inventadas. Novos produtos exigem dados comerciais e capas reais; analytics externo, checkout direto, UTMs e pré-renderização ficam para autorização/configuração futura. Os serviços existentes e o aplicativo não foram reformulados.
