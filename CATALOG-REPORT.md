# Relatório da modernização — 9 de outubro de 2026

## Entrega

Página de publicações PT/EN com hero comercial, catálogo responsivo, cards de altura consistente, capas oficiais, assunto, nível, idioma do PDF, preço configurável, compra na Payhip e links para os detalhes existentes. Busca e filtros combináveis, limpeza, estado vazio e contagem com singular/plural. Benefícios, coleção em expansão e CTA final, sem pacotes, urgência artificial ou promessa de formação completa.

## Arquivos e componentes

Criados: `catalog.js`, `tests/catalog.test.cjs`, `CATALOG.md`, este relatório e duas capas WebP derivadas dos originais em `assets`.

Modificados: `app.js` (rota, metadados e integração), `foundations.js` (catálogo compartilhado, preço/link/capas das páginas individuais), `index.html` (ordem dos scripts, versões de cache e metatags), `styles.css` (estilos isolados da vitrine), `README.md` (manual atualizado). Não há dependências novas.

Componentes novos: hero, vitrine/cards, filtros/busca, resultado vazio, benefícios, expansão/CTA, preço e compra compartilhados, instrumentação desacoplada e metadados. O resto do site, inclusive link de produção do app, casos reais, serviços, contato e idiomas, permanece integrado.

## Cadastro e manutenção

`ebooks` em `catalog.js` centraliza ID, título original, descrições PT/EN, categoria, tags, nível, idioma do livro, formato, capa/dimensões, preço/moeda, URLs oficiais, publicação, destaque e ordem. Filtros usam `ebookTaxonomy` e somente opções presentes. Veja [CATALOG.md](CATALOG.md) para novos livros, categorias, idiomas, capas, preços e links. Novos livros sem detalhes próprios não precisam alterar templates; criar uma página de detalhes adicional exige registrar sua rota.

Preços: USD 2.90 e USD 5.90, fornecidos pelo usuário e conferidos nas páginas oficiais da Payhip. Não há sincronização automática. O checkout confirma o valor final. As edições dos PDFs são explicitamente em inglês, independentemente do idioma da interface.

## SEO

Título/descrição específicos PT/EN, Open Graph e Twitter Card, imagens alternativas, headings H1/H2/H3, canonical do documento real e JSON-LD `ItemList`/`Book`. Sem ofertas, reviews ou ratings inventados. O hash routing permanece por compatibilidade: não foram criados canonicals/hreflang falsamente indexáveis. Pré-renderização e URLs estáticas reais são recomendação futura, descrita com fontes oficiais no manual.

## Responsividade, acessibilidade e performance

Layout verificado em desktop, 768px e 360px, sem overflow horizontal do documento. Cards empilhados no mobile, filtros utilizáveis por toque, labels, foco visível, nomes acessíveis por produto, aviso de nova aba e contagem `aria-live`. CTA leva ao catálogo sem quebrar o roteamento e respeita movimento reduzido. Revisão realizada não constitui certificação WCAG.

Capas WebP 600×900: 40.606 e 44.446 bytes, total 85.052 bytes, contra 3.269.274 bytes dos PNGs originais — redução aproximada de 97,4%. Originais mantidos. Dimensões explícitas e carregamento lazy no catálogo; capas individuais também usam as versões otimizadas.

## Verificações

- 12 testes automatizados: todos passaram. Catálogo/ordenação, ocultação de não publicados, nível, assunto/tags, caixa/acentos na busca, combinações e vazio, novos produtos, tradução, preços opcionais, links seguros, escape e eventos locais.
- JavaScript validado por `node --check`; não há build/bundler no projeto. Os arquivos estáticos são o artefato de produção.
- No navegador: 2 produtos/capas carregados; filtro por Fundamentos e Intermediário retorna 1; busca por CTEs retorna 1; busca sem resultado exibe estado vazio; reset retorna 2; PT/EN conserva filtros e traduz interface; CTA mantém o hash e foca o catálogo.
- Páginas individuais verificadas nos dois idiomas, links corretos de compra/amostra e capas WebP. Nenhum erro de console identificado na sessão revisada.

## Serviços externos e próximos passos

Nenhuma credencial ou asset pendente para esta entrega. Payhip continua com pagamento/entrega; foram mantidos links de produto originais. Checkout direto oficial foi apenas avaliado/documentado. Analytics emite eventos locais sem rede, persistência ou texto de busca: integração externa exige escolha do serviço e definição de consentimento/privacidade. Eventos de compra são cliques, não vendas.

Fora do escopo: migração global de rotas, indexação estática, analytics externo, UTMs, checkout próprio, CMS, login, newsletter, PDFs públicos, pacotes e páginas de produtos inexistentes. Novos títulos exigem informações e capas reais fornecidas pelo autor.
