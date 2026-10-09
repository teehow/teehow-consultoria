'use strict';
// Single source for product identity, commercial configuration and catalog metadata.
const ebooks = [
  {
    id:'database-foundations', slug:'databases', title:'Database Foundations: A Practical Beginner’s Guide',
    category:'fundamentals', tags:['fundamentals','sql','oracle','tables','joins','keys','relational'], level:'beginner',
    language:'en', format:'PDF', coverImage:'assets/database-foundations-cover-v2.webp', width:600, height:900,
    price:2.90, currency:'USD', payhipUrl:'https://payhip.com/b/oiJ15', previewUrl:'https://payhip.com/preview/oiJ15',
    published:true, featured:false, order:1,
    description:{pt:'Aprenda os fundamentos de bancos de dados relacionais e SQL por meio de explicações acessíveis, exemplos práticos, exercícios e um miniprojeto orientado.',en:'Learn relational database and SQL fundamentals through accessible explanations, practical examples, exercises, and a guided mini-project.'},
    highlights:{pt:['10 exercícios com respostas comentadas','Miniprojeto orientado e glossário','Plano de estudos de 30 dias'],en:['10 exercises with explained answers','Guided mini-project and glossary','30-day study plan']}
  },
  {
    id:'advanced-sql-oracle', slug:'advanced-sql', title:'Advanced SQL with Oracle: A Practical Guide',
    category:'oracle', tags:['sql','oracle','ctes','analytic functions','merge','performance','reconciliation','funções analíticas','conciliação'], level:'intermediate',
    language:'en', format:'PDF', coverImage:'assets/advanced-sql-oracle-cover-v2.webp', width:600, height:900,
    price:5.90, currency:'USD', payhipUrl:'https://payhip.com/b/YsMiQ', previewUrl:'https://payhip.com/preview/YsMiQ',
    published:true, featured:false, order:2,
    description:{pt:'Aprofunde suas habilidades em SQL com consultas Oracle, funções analíticas, CTEs, relatórios, conciliação de dados e análise de desempenho.',en:'Take your SQL skills further with advanced Oracle queries, analytic functions, CTEs, reporting, data reconciliation, and performance analysis.'},
    highlights:{pt:['10 exercícios com respostas comentadas','Projeto de conciliação de vendas e pagamentos','Referência Oracle 19c e plano de estudos'],en:['10 exercises with explained answers','Sales and payment reconciliation project','Oracle 19c baseline and study plan']}
  }
];
const ebookTaxonomy = {
  levels:{beginner:{pt:'Iniciante',en:'Beginner'},intermediate:{pt:'Intermediário',en:'Intermediate'},advanced:{pt:'Avançado',en:'Advanced'}},
  subjects:{fundamentals:{pt:'Fundamentos',en:'Fundamentals'},sql:{pt:'SQL',en:'SQL'},oracle:{pt:'Oracle',en:'Oracle'}},
  languages:{en:{pt:'Inglês',en:'English'},pt:{pt:'Português',en:'Portuguese'}}
};
const catalogCopy = {
  pt:{title:'E-books técnicos para aprender e evoluir em banco de dados',intro:'Explore publicações práticas sobre SQL, Oracle e tecnologias de banco de dados. Desenvolva seus conhecimentos com exemplos, exercícios e conteúdos organizados por assunto e nível de experiência.',explore:'Explorar e-books',growing:'Uma coleção em expansão, com publicações focadas em diferentes assuntos.',catalog:'Encontre seu próximo assunto',catalogIntro:'Escolha pelo tema e pelo seu conhecimento atual. Os PDFs publicados nesta coleção estão em inglês.',search:'Buscar título ou palavra-chave',placeholder:'SQL, Oracle, fundamentos…',level:'Nível',subject:'Assunto',all:'Todos',clear:'Limpar filtros',buy:'Comprar e-book',details:'Conhecer o material',bookLanguage:'Idioma do e-book',format:'Formato',priceNote:'Preço de referência em dólares americanos. O valor final é confirmado na Payhip.',noPrice:'Consulte o preço na Payhip',empty:'Nenhum e-book corresponde à sua busca. Tente outro assunto ou limpe os filtros.',count:'publicações encontradas',featured:'Em destaque',newTab:'abre em nova aba',benefits:'Por que escolher os e-books TeeHow?',benefitIntro:'Conhecimento aplicado, com foco em temas específicos — sem prometer uma formação completa.',benefitItems:[['Aprendizado prático','Exemplos e situações que conectam teoria e aplicação.'],['Conteúdo técnico organizado','Publicações focadas em assuntos e níveis específicos.'],['Exercícios e aplicação','Materiais selecionados incluem exercícios, respostas comentadas e projetos. Confira cada produto.'],['Acesso digital','Materiais em PDF, com compra e entrega digital pela Payhip.']],coming:'Novos conteúdos estão a caminho',comingText:'Estamos desenvolvendo novas publicações técnicas para ampliar os assuntos e aprofundar os conhecimentos disponíveis na coleção TeeHow.',closing:'Encontre o próximo assunto que você deseja aprender',closingText:'Escolha um material alinhado ao seu nível de experiência e aos seus objetivos de aprendizado.',closingCta:'Ver e-books disponíveis',seoTitle:'E-books de Banco de Dados e SQL | TeeHow Consultoria',seoDescription:'Explore e-books técnicos sobre SQL, Oracle e fundamentos de banco de dados. Aprenda com exemplos práticos, exercícios e materiais digitais.'},
  en:{title:'Practical Database E-books for Continuous Learning',intro:'Explore hands-on publications covering SQL, Oracle, and database technologies. Build your skills with practical examples, exercises, and focused learning materials for different experience levels.',explore:'Explore E-books',growing:'A growing collection of publications focused on different topics.',catalog:'Find your next topic',catalogIntro:'Choose by topic and your current knowledge. The PDFs currently published in this collection are in English.',search:'Search title or keyword',placeholder:'SQL, Oracle, foundations…',level:'Level',subject:'Topic',all:'All',clear:'Clear filters',buy:'Get this E-book',details:'Explore the material',bookLanguage:'E-book language',format:'Format',priceNote:'Reference price in US dollars. The final amount is confirmed on Payhip.',noPrice:'Check pricing on Payhip',empty:'No e-books match your search. Try another topic or clear the filters.',count:'publications found',featured:'Featured',newTab:'opens in a new tab',benefits:'Why choose TeeHow e-books?',benefitIntro:'Applied knowledge focused on specific topics — without promising a complete curriculum.',benefitItems:[['Hands-on learning','Examples and scenarios connect theory and application.'],['Organized technical content','Publications focus on specific topics and experience levels.'],['Exercises and application','Selected materials include exercises, explained answers and projects. Check each product.'],['Digital access','PDF materials, with purchase and digital delivery through Payhip.']],coming:'More Technical Publications Are Coming',comingText:"We're developing new technical publications to expand the topics and learning resources available in the TeeHow collection.",closing:'Find the next topic you want to learn',closingText:'Choose material that matches your experience and learning goals.',closingCta:'View available e-books',seoTitle:'Database & SQL E-books | TeeHow Consultoria',seoDescription:'Explore practical e-books covering SQL, Oracle, and database fundamentals. Learn with hands-on examples, exercises, and digital guides.'}
};
let catalogFilters={level:'',subject:'',query:''};
function normalizeEbookSearch(value) { return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(); }
function filterEbooks(products,filters={},language='pt') {
  const query=normalizeEbookSearch(filters.query||'').trim();
  return products.filter(p=>p.published===true && (!filters.level||p.level===filters.level) && (!filters.subject||p.category===filters.subject||p.tags.includes(filters.subject)) && (!query||normalizeEbookSearch([p.title,p.description[language],...p.tags].join(' ')).includes(query))).sort((a,b)=>(a.order??100)-(b.order??100));
}
function ebookFilterOptions(products=ebooks) {
  const published=products.filter(p=>p.published===true);
  return {levels:Object.keys(ebookTaxonomy.levels).filter(key=>published.some(p=>p.level===key)),subjects:Object.keys(ebookTaxonomy.subjects).filter(key=>published.some(p=>p.category===key||p.tags.includes(key)))};
}
function ebookBySlug(slug) { return ebooks.find(p=>p.published&&p.slug===slug); }
function ebookResultCount(count,language) { return language==='pt'?(count===1?'1 publicação encontrada':count+' publicações encontradas'):(count===1?'1 publication found':count+' publications found'); }
function ebookPrice(p,language) { return Number.isFinite(p.price)?new Intl.NumberFormat(language==='pt'?'pt-BR':'en-US',{style:'currency',currency:p.currency||'USD',currencyDisplay:'code'}).format(p.price):catalogCopy[language].noPrice; }
function ebookEvent(name,product=null,extra={}) {
  const detail={event:name,page_language:state.language,...extra};
  if(product) Object.assign(detail,{ebook_id:product.id,ebook_title:product.title,ebook_category:product.category,ebook_level:product.level});
  // Local event only: no network, persistence, raw query or personal data.
  window.dispatchEvent(new CustomEvent('teehow:analytics',{detail}));
}
function ebookBuyLink(p,language) {
  const t=catalogCopy[language];
  return '<a class="button primary" data-ebook-buy="'+escapeText(p.id)+'" href="'+escapeText(p.payhipUrl)+'" target="_blank" rel="noopener noreferrer" aria-label="'+escapeText(t.buy+' — '+p.title+' ('+t.newTab+')')+'">'+t.buy+' <span aria-hidden="true">↗</span></a>';
}
function catalogCard(p,language,heading='h3') {
  const t=catalogCopy[language];
  const tag=(taxonomy,key)=>escapeText(taxonomy[key]?.[language]||key);
  return '<article class="publication-card" data-ebook-id="'+escapeText(p.id)+'"><div class="publication-art"><img src="'+escapeText(p.coverImage)+'" alt="'+escapeText((language==='pt'?'Capa de ':'Cover of ')+p.title)+'" width="'+p.width+'" height="'+p.height+'" loading="lazy" decoding="async">'+(p.featured?'<span class="pill">'+t.featured+'</span>':'')+'</div><div class="publication-body"><div class="publication-tags"><span>'+tag(ebookTaxonomy.subjects,p.category)+'</span><span>'+tag(ebookTaxonomy.levels,p.level)+'</span></div><'+heading+'>'+escapeText(p.title)+'</'+heading+'><p>'+escapeText(p.description[language])+'</p><ul class="publication-highlights">'+(p.highlights?.[language]||[]).map(text=>'<li>'+escapeText(text)+'</li>').join('')+'</ul><dl class="publication-meta"><div><dt>'+t.bookLanguage+'</dt><dd>'+tag(ebookTaxonomy.languages,p.language)+'</dd></div><div><dt>'+t.format+'</dt><dd>'+escapeText(p.format)+'</dd></div></dl><div class="publication-purchase"><strong>'+escapeText(ebookPrice(p,language))+'</strong>'+ebookBuyLink(p,language)+(p.slug?'<a class="text-link" data-ebook-detail="'+escapeText(p.id)+'" href="'+link(p.slug)+'" aria-label="'+escapeText(t.details+' — '+p.title)+'">'+t.details+' →</a>':'')+'</div></div></article>';
}
function catalogGrid(products,language,heading='h3') { return products.length?products.map(p=>catalogCard(p,language,heading)).join(''):'<div class="catalog-empty"><p>'+catalogCopy[language].empty+'</p><button class="button secondary" data-clear-catalog>'+catalogCopy[language].clear+'</button></div>'; }
function coursesLanding() {
  const lang=state.language,t=catalogCopy[lang],options=ebookFilterOptions();
  const select=(id,label,keys,taxonomy,value)=>'<label for="'+id+'">'+label+'<select id="'+id+'"><option value="">'+t.all+'</option>'+keys.map(key=>'<option value="'+key+'"'+(value===key?' selected':'')+'>'+taxonomy[key][lang]+'</option>').join('')+'</select></label>';
  const products=filterEbooks(ebooks,catalogFilters,lang);
  return '<section class="hero publications-hero"><div class="wrap hero-grid"><div><div class="eyebrow">Tee How / '+(lang==='pt'?'Publicações técnicas':'Technical publications')+'</div><h1>'+t.title+'</h1><p class="lead">'+t.intro+'</p><button class="button primary" data-catalog-scroll>'+t.explore+' ↓</button><p class="publication-growth">'+t.growing+'</p></div><div class="publication-visual" aria-hidden="true"><span>SQL / DATA / ORACLE</span><div class="data-stack"><i></i><i></i><i></i></div><code>SELECT knowledge<br>FROM practice;</code></div></div></section><section class="section gray" id="ebook-products"><div class="wrap"><div class="section-heading"><h2 id="catalog-heading" tabindex="-1">'+t.catalog+'</h2><p>'+t.catalogIntro+'</p></div><div class="catalog-controls"><label for="ebook-search">'+t.search+'<input type="search" id="ebook-search" maxlength="120" value="'+escapeText(catalogFilters.query)+'" placeholder="'+t.placeholder+'" autocomplete="off"></label>'+select('ebook-level',t.level,options.levels,ebookTaxonomy.levels,catalogFilters.level)+select('ebook-subject',t.subject,options.subjects,ebookTaxonomy.subjects,catalogFilters.subject)+'<button class="button secondary" data-clear-catalog>'+t.clear+'</button></div><p id="catalog-count" role="status" aria-live="polite" aria-atomic="true">'+ebookResultCount(products.length,lang)+'</p><div id="catalog-results" class="publication-grid">'+catalogGrid(products,lang)+'</div><p class="notice">'+t.priceNote+'</p></div></section><section class="section"><div class="wrap"><div class="section-heading"><h2>'+t.benefits+'</h2><p>'+t.benefitIntro+'</p></div><div class="benefit-grid">'+t.benefitItems.map(([title,text],i)=>'<article><span class="benefit-mark" aria-hidden="true">'+['</>','≡','✓','↓'][i].replace('<','&lt;').replace('>','&gt;')+'</span><h3>'+title+'</h3><p>'+text+'</p></article>').join('')+'</div></div></section><section class="publication-coming"><div class="wrap"><span class="kicker">'+t.growing+'</span><h2>'+t.coming+'</h2><p>'+t.comingText+'</p></div></section><section class="contact-band"><div class="wrap contact-grid"><div><h2>'+t.closing+'</h2><p>'+t.closingText+'</p></div><button class="button" data-catalog-scroll>'+t.closingCta+' ↑</button></div></section>';
}
function bindEbookInteractions() {
  const main=document.getElementById('main');
  main.onclick=event=>{
    const buy=event.target.closest('[data-ebook-buy]'),detail=event.target.closest('[data-ebook-detail]');
    if(buy||detail) { const p=ebooks.find(p=>p.id===(buy||detail).dataset[buy?'ebookBuy':'ebookDetail']); if(p) ebookEvent(buy?'ebook_buy_click':'ebook_card_click',p); }
    if(event.target.closest('[data-catalog-scroll]')) { document.getElementById('ebook-products').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}); document.getElementById('catalog-heading').focus({preventScroll:true}); }
    if(event.target.closest('[data-clear-catalog]')) { catalogFilters={level:'',subject:'',query:''}; document.getElementById('ebook-search').value=''; document.getElementById('ebook-level').value=''; document.getElementById('ebook-subject').value=''; updateCatalog(); ebookEvent('ebook_filter_used',null,{filter:'reset'}); document.getElementById('ebook-search').focus(); }
  };
  if(state.page!=='courses') return;
  ebookEvent('ebook_catalog_view',null,{product_count:filterEbooks(ebooks).length});
  for(const field of ['level','subject']) document.getElementById('ebook-'+field).onchange=event=>{catalogFilters[field]=event.target.value;updateCatalog();ebookEvent('ebook_filter_used',null,{filter:field,value:catalogFilters[field]});};
  document.getElementById('ebook-search').oninput=event=>{catalogFilters.query=event.target.value;updateCatalog();};
  // Emit once on committed input, never include the typed search term.
  document.getElementById('ebook-search').onchange=()=>ebookEvent('ebook_search_used',null,{has_query:!!catalogFilters.query.trim(),result_count:filterEbooks(ebooks,catalogFilters,state.language).length});
}
function updateCatalog() { const products=filterEbooks(ebooks,catalogFilters,state.language); document.getElementById('catalog-results').innerHTML=catalogGrid(products,state.language); document.getElementById('catalog-count').textContent=ebookResultCount(products.length,state.language); }
function updateEbookMetadata() {
  const lang=state.language,t=catalogCopy[lang],p=ebookBySlug(state.page);
  if(state.page==='courses') { document.title=t.seoTitle; document.querySelector('meta[name="description"]').content=t.seoDescription; }
  const title=document.title,description=document.querySelector('meta[name="description"]').content;
  for(const [key,value] of Object.entries({'og:title':title,'og:description':description,'og:url':'https://www.teehowconsultoria.com.br/','og:locale':lang==='pt'?'pt_BR':'en_US','og:image':'https://www.teehowconsultoria.com.br/'+(p?.coverImage||'assets/teehow-logo-web-v2.png'),'twitter:title':title,'twitter:description':description,'twitter:image':'https://www.teehowconsultoria.com.br/'+(p?.coverImage||'assets/teehow-logo-web-v2.png')})) document.querySelector('meta['+(key.startsWith('og:')?'property':'name')+'="'+key+'"]').content=value;
  const schema=document.getElementById('ebook-schema');
  const book=p=>({'@type':'Book',name:p.title,description:p.description[lang],inLanguage:p.language,bookFormat:'https://schema.org/EBook',image:'https://www.teehowconsultoria.com.br/'+p.coverImage,url:p.payhipUrl,author:{'@type':'Person',name:'Vitor Tee How Siao Júnior'}});
  schema.textContent=state.page==='courses'?JSON.stringify({'@context':'https://schema.org','@type':'ItemList',itemListElement:filterEbooks(ebooks).map((p,i)=>({'@type':'ListItem',position:i+1,item:book(p)}))}):p?JSON.stringify({'@context':'https://schema.org',...book(p)}):'';
}
