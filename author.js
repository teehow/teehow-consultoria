'use strict';
const authorCopy = {
  pt: {
    about:'Sobre', author:'Autor e livros', personal:'Espaço pessoal · Literatura',
    aboutTitle:"Experiência em banco de dados.<br>Atenção ao seu negócio.",
    aboutIntro:"Sou Vitor Tee How Siao Junior, responsável pela Tee How Consultoria em Banco de Dados. Tenho mais de 20 anos de experiência em sistemas e bancos de dados, com atuação em projetos para instituições financeiras e outros ambientes de negócio.",
    professional:"Conhecimento técnico para resolver problemas reais",
    professionalText:"Minha atuação reúne Oracle, SQL Server e PostgreSQL, com foco em performance, modelagem, desenvolvimento e integração de dados. Cada projeto começa pela compreensão do problema e do seu impacto no negócio, para definir melhorias com prioridades claras e resultados verificáveis.",
    literary:'Além dos dados, outros mundos.',
    literaryText:'Na literatura, assino como Vitor Tee How. Em Ecos do Mundo Partido, exploro aventuras, mistérios e encontros em um mundo de fantasia.',
    services:'Conhecer os serviços', discover:'Conhecer o livro', homeNote:'Além da tecnologia, também escrevo histórias.',
    back:'Voltar para Sobre', series:'Ecos do Mundo Partido', volume:'Livro 1 · O Diário da Ruína',
    hook:'Um mundo ferido.<br>Um diário cobiçado.<br><em>Cinco caminhos que se cruzam.</em>',
    intro:'Os mapas já não explicam tudo. Em um mundo marcado pelos Portais da Ruína, cinco desconhecidos se veem unidos por um diário que pode guardar pistas sobre essas feridas na realidade.',
    genres:['Fantasia','Aventura','Mistério'], edition:'E-book em português · Amazon Kindle',
    purchase:'Ver na Amazon Kindle', priceLabel:'Preço informado pelo autor', price:'R$ 15,45',
    priceNote:'Confira o preço atualizado e as condições na Amazon. A compra e o acesso ao e-book são realizados pela Amazon, fora deste site.',
    coverAlt:'Capa de Ecos do Mundo Partido, Livro 1: O Diário da Ruína, de Vitor Tee How',
    synopsis:'Uma jornada entre ruínas, segredos e alianças improváveis.',
    synopsisText:'Kandor, Ventura, Thrisquel, Jaccobiles e Lantor vêm de caminhos diferentes. Um encontro em torno de um diário cobiçado os coloca diante de ameaças que ultrapassam as disputas dos reinos. Entre magia, investigação e perigos, os desconhecidos precisam descobrir em quem confiar — e que histórias o mundo ainda esconde.',
    promise:'Para quem gosta de mundos de fantasia, grupos de aventureiros, mistérios e diálogos com humor.',
    excerptLabel:'Um começo que convida à descoberta', excerptSource:'Trecho do prólogo · As feridas do mundo',
    authorText:'Escrito por Vitor Tee How. Uma criação literária pessoal, apresentada separadamente dos serviços de consultoria e dos materiais técnicos.',
    meta:'Conheça Ecos do Mundo Partido — Livro 1: O Diário da Ruína, fantasia de Vitor Tee How disponível na Amazon Kindle.'
  },
  en: {
    about:'About', author:'Author and books', personal:'Personal space · Fiction',
    aboutTitle:"Database experience.<br>Attention to your business.",
    aboutIntro:"I am Vitor Tee How Siao Junior, the person behind Tee How Consultoria em Banco de Dados. I have more than 20 years of experience with systems and databases, working on projects for financial institutions and other business environments.",
    professional:"Technical expertise for real problems",
    professionalText:"My work spans Oracle, SQL Server and PostgreSQL, focusing on performance, modeling, development and data integration. Each project starts by understanding the problem and its business impact, so improvements have clear priorities and verifiable results.",
    literary:'Beyond data, other worlds.',
    literaryText:'I publish fiction as Vitor Tee How. In Ecos do Mundo Partido, I explore adventures, mysteries and encounters in a fantasy world.',
    services:'Explore the services', discover:'Explore the book', homeNote:'Beyond technology, I also write stories.',
    back:'Back to About', series:'Ecos do Mundo Partido', volume:'Book 1 · O Diário da Ruína',
    hook:'A wounded world.<br>A coveted diary.<br><em>Five paths that cross.</em>',
    intro:'Maps no longer explain everything. In a world scarred by the Portais da Ruína, five strangers are brought together by a diary that may hold clues to these wounds in reality.',
    genres:['Fantasy','Adventure','Mystery'], edition:'Portuguese-language e-book · Amazon Kindle',
    purchase:'View on Amazon Kindle', priceLabel:'Price provided by the author', price:'R$ 15.45',
    priceNote:'Check the current price and terms on Amazon. Purchase and e-book access are handled by Amazon, outside this website.',
    coverAlt:'Cover of Ecos do Mundo Partido, Book 1: O Diário da Ruína, by Vitor Tee How',
    synopsis:'A journey through ruins, secrets and unlikely alliances.',
    synopsisText:'Kandor, Ventura, Thrisquel, Jaccobiles and Lantor come from different backgrounds. An encounter involving a coveted diary brings them face to face with threats beyond the conflicts between kingdoms. Amid magic, investigation and danger, these strangers must discover whom to trust — and which stories the world still hides.',
    promise:'For readers who enjoy fantasy worlds, adventuring parties, mysteries and humorous dialogue.',
    excerptLabel:'An opening that invites discovery', excerptSource:'Portuguese excerpt from the prologue · As feridas do mundo',
    authorText:'Written by Vitor Tee How. A personal work of fiction, presented separately from consulting services and technical learning materials.',
    meta:'Discover Ecos do Mundo Partido — Book 1: O Diário da Ruína, a Portuguese-language fantasy book by Vitor Tee How on Amazon Kindle.'
  }
};
function authorTeaser() {
  const a=authorCopy[state.language];
  return '<aside class="author-teaser"><div class="wrap"><p>'+a.homeNote+'</p><a class="text-link" href="'+link('author')+'">'+a.author+' →</a></div></aside>';
}
function aboutPage(c) {
  const a=authorCopy[state.language];
  return pageHead(a.aboutTitle,a.aboutIntro,c)+'<section class="section"><div class="wrap product-grid"><div><span class="kicker">Tee How</span><h2>'+a.professional+'</h2><p>'+a.professionalText+'</p>'+button(a.services,link('services'),'secondary')+'</div><article class="about-literary"><span class="kicker">'+a.personal+'</span><h2>'+a.literary+'</h2><p>'+a.literaryText+'</p>'+button(a.author,link('author'))+'</article></div></section>'+contactBand(c);
}
function authorPage() {
  const a=authorCopy[state.language];
  return '<section class="hero ebook-hero author-hero"><div class="wrap"><a class="back" href="'+link('about')+'">'+a.back+'</a><div class="hero-grid"><div><div class="eyebrow">'+a.personal+'</div><p class="ebook-name" lang="pt-BR">'+a.series+'<span>'+a.volume+'</span></p><h1>'+a.hook+'</h1><p class="lead">'+a.intro+'</p><div class="ebook-tags">'+a.genres.map(g=>'<span>'+g+'</span>').join('')+'</div><p class="edition-note">'+a.edition+'</p><div class="book-price"><span>'+a.priceLabel+'</span><strong>'+a.price+'</strong></div><a class="button primary" href="https://www.amazon.com.br/dp/B0HKSP4H3Z" target="_blank" rel="noopener noreferrer">'+a.purchase+' ↗</a><p class="notice">'+a.priceNote+'</p></div><figure class="ebook-cover"><img src="assets/ecos-do-mundo-partido-cover.png" width="705" height="1000" alt="'+a.coverAlt+'"><figcaption>Vitor Tee How · '+a.edition+'</figcaption></figure></div></div></section><section class="section"><div class="wrap detail-grid"><div><span class="kicker">'+a.author+'</span><h2>'+a.synopsis+'</h2><p>'+a.synopsisText+'</p><p><strong>'+a.promise+'</strong></p><p class="notice">'+a.authorText+'</p></div><aside class="book-excerpt"><span class="kicker">'+a.excerptLabel+'</span><blockquote lang="pt-BR">“Os mapas mentiam.”</blockquote><p>'+a.excerptSource+'</p></aside></div></section>';
}
