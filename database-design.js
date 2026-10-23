'use strict';
const designCopy={
  pt:{
    ...foundationCopy.pt,
    label:'Modelagem de dados · Iniciante a intermediário',title:'Database Design in Practice',subtitle:'A Practical Guide to Data Modeling, Normalization and Physical Design',
    authorText:'Vitor Tee How Siao Júnior é o autor do guia e responsável pela Tee How Consultoria em Banco de Dados, com mais de duas décadas de experiência em sistemas e bancos de dados corporativos.',
    tagline:'Do requisito ao modelo.<br>Decisões de projeto <em>com propósito.</em>',
    intro:'Entenda o projeto de um banco antes de implementá-lo. Conecte requisitos de negócio, modelagem conceitual e lógica, normalização e decisões de projeto físico.',
    coverAlt:'Capa de Database Design in Practice, de Vitor Tee How Siao Júnior',level:'Requer fundamentos de bancos relacionais e SQL básico',
    stats:[['15','exercícios práticos'],['30','dias no plano de estudo'],['PDF','formato digital'],['Inglês','idioma do e-book']],
    learnTitle:'Modele os dados antes de escrever a implementação.',learnIntro:'Conceitos aplicáveis a bancos relacionais, com Oracle em exemplos selecionados de implementação física.',
    modules:[['Requisitos e relacionamentos','Entidades, atributos, cardinalidade e opcionalidade em modelos conceituais e lógicos.'],['Chaves e integridade','Chaves candidatas, naturais, substitutas e compostas; referências e restrições de integridade.'],['Normalização','Dependências funcionais, 1FN, 2FN, 3FN, BCNF e decisões sobre desnormalização.'],['Projeto físico','Tipos de dados, PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL e o papel dos índices.'],['Cenários de modelagem','Modelos transacionais e analíticos, valores nulos, históricos e mudanças nos dados.'],['Revisão e prática','Erros comuns, engenharia reversa, diagramas, projeto de loja virtual e exercícios comentados.']],
    practiceIntro:'Tarefas de modelagem para conectar regras do negócio a estruturas que você consegue revisar e explicar.',
    practiceTasks:['Identificar entidades, atributos e cardinalidades','Escolher chaves e revisar dependências funcionais','Aplicar normalização e avaliar decisões de projeto físico','Revisar um modelo existente com checklist de modelagem'],
    projectKicker:'Projeto prático · Loja virtual',projectTitle:'Dos requisitos<br>ao projeto do banco.',projectIntro:'Aplique os conceitos em um projeto de modelagem de uma loja virtual.',
    projectTasks:['Organizar entidades e relacionamentos','Revisar chaves, integridade e normalização','Conectar modelos conceituais, lógicos e físicos'],
    projectStages:[['CONCEITUAL','Identificar as informações do negócio e seus relacionamentos'],['LÓGICO','Organizar entidades, chaves e regras de integridade'],['FÍSICO','Definir estruturas, tipos de dados e restrições']],
    includedTitle:'Exemplos, diagramas e revisão no próprio guia.',included:['Exemplos práticos de modelagem e diagramas entidade-relacionamento','Exemplos selecionados de projeto físico em Oracle','Projeto de banco de dados de uma loja virtual','15 exercícios com gabarito comentado','Plano de estudos de 30 dias, checklist e glossário'],
    audienceTitle:'Para quem quer entender as decisões por trás do banco.',audience:'Estudantes, desenvolvedores e profissionais interessados em modelagem de dados. Recomenda-se conhecer tabelas, linhas, colunas, chaves primárias e estrangeiras e conceitos básicos de SQL.',
    faq:[['O e-book está em português?','Não. O PDF é em inglês. Alterar o idioma desta página não traduz o livro.'],['Preciso conhecer Oracle?','Os conceitos se aplicam a bancos relacionais. Oracle é usado em exemplos selecionados de implementação física; recomenda-se conhecer fundamentos de bancos de dados e SQL básico.'],['Inclui exercícios e projeto?','Sim. A página oficial informa 15 exercícios, gabarito comentado, diagramas e um projeto de modelagem de uma loja virtual.'],['O plano garante resultados em 30 dias?','Não. O plano organiza os estudos, sem garantia de domínio, certificação, emprego ou renda.']],
    closing:'Escolhas de projeto melhores<br>começam pela compreensão dos dados.',closingIntro:'Confira a proposta do livro e consulte as condições de compra na Payhip.',
    meta:'Database Design in Practice: e-book em inglês sobre modelagem, normalização e projeto físico, com 15 exercícios e projeto de loja virtual.'
  },
  en:{
    ...foundationCopy.en,
    label:'Data modeling · Beginner to Intermediate',title:'Database Design in Practice',subtitle:'A Practical Guide to Data Modeling, Normalization and Physical Design',
    authorText:'Vitor Tee How Siao Júnior is the guide’s author and the person behind Tee How Consultoria em Banco de Dados, with more than two decades of experience in corporate systems and databases.',
    tagline:'From requirements to models.<br>Design decisions <em>with purpose.</em>',
    intro:'Understand how a database is designed before implementing it. Connect business requirements, conceptual and logical modeling, normalization and physical design decisions.',
    coverAlt:'Cover of Database Design in Practice, by Vitor Tee How Siao Júnior',level:'Relational database foundations and basic SQL recommended',
    stats:[['15','hands-on exercises'],['30','days in the study plan'],['PDF','digital format'],['English','e-book language']],
    learnTitle:'Model the data before implementing the database.',learnIntro:'Concepts apply to relational databases, with Oracle used for selected physical implementation examples.',
    modules:[['Requirements and relationships','Entities, attributes, cardinality and optionality in conceptual and logical models.'],['Keys and integrity','Candidate, natural, surrogate and composite keys; references and integrity constraints.'],['Normalization','Functional dependencies, 1NF, 2NF, 3NF, BCNF and denormalization decisions.'],['Physical design','Data types, PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL and the role of indexes.'],['Modeling scenarios','Transactional and analytical models, NULL values, historical and changing data.'],['Review and practice','Common mistakes, reverse engineering, diagrams, an online store project and explained exercises.']],
    practiceIntro:'Modeling tasks connect business rules to structures you can review and explain.',
    practiceTasks:['Identify entities, attributes and cardinalities','Choose keys and review functional dependencies','Apply normalization and assess physical design decisions','Review an existing model using a modeling checklist'],
    projectKicker:'Practical project · Online store',projectTitle:'From requirements<br>to database design.',projectIntro:'Apply the concepts in an online store database design project.',
    projectTasks:['Organize entities and relationships','Review keys, integrity and normalization','Connect conceptual, logical and physical models'],
    projectStages:[['CONCEPTUAL','Identify business information and relationships'],['LOGICAL','Organize entities, keys and integrity rules'],['PHYSICAL','Define structures, data types and constraints']],
    includedTitle:'Examples, diagrams and review within the guide.',included:['Practical modeling examples and entity-relationship diagrams','Selected Oracle physical design examples','An online store database design project','15 exercises with a commented answer key','30-day study plan, checklist and glossary'],
    audienceTitle:'For readers who want to understand database design decisions.',audience:'Students, developers and professionals interested in data modeling. Basic knowledge of tables, rows, columns, primary keys, foreign keys and SQL concepts is recommended.',
    faq:[['Is the e-book in Portuguese?','No. This PDF is in English. Changing the language of this page does not translate the book.'],['Do I need to know Oracle?','The concepts apply to relational databases. Oracle is used in selected physical implementation examples. Relational database foundations and basic SQL are recommended.'],['Are exercises and a project included?','Yes. The official product page lists 15 exercises, a commented answer key, diagrams and an online store database design project.'],['Does the plan guarantee results in 30 days?','No. The plan organizes study; it does not guarantee mastery, certification, employment or income.']],
    closing:'Better design decisions<br>start with understanding the data.',closingIntro:'Explore the book and check purchase terms on Payhip.',
    meta:'Database Design in Practice: an English e-book on data modeling, normalization and physical design, with 15 exercises and an online store project.'
  }
};
function designLanding(c) { return ebookLanding(designCopy[state.language],c); }
