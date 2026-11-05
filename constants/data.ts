export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
};

const gh = "https://github.com/Pereira-gu";

export const profile = {
  name: "Gustavo Pereira",
  role: "Construo APIs em Java e analiso dados com Python.",
  intro:
    "Estudante de Ciência da Computação na UNICID. Meus projetos cobrem autenticação, cache, processamento assíncrono e análise de dados. Todo o código está no GitHub.",
  email: "dev.gustavospereira@gmail.com",
  github: gh,
  linkedin: "https://www.linkedin.com/in/guspereira-dev/",
};

export const projects: Project[] = [
  {
    title: "API Library",
    description:
      "API REST de biblioteca com autenticação JWT, perfis de administrador e usuário, empréstimos transacionais e documentação Swagger.",
    tags: ["Java 21", "Spring Boot 3", "Spring Security", "MySQL", "Docker"],
    links: [{ label: "Código", href: `${gh}/api-library` }],
  },
  {
    title: "Ecommerce Analytics",
    description:
      "Análise exploratória de dados de e-commerce em Jupyter Notebook, com Python.",
    tags: ["Python", "Jupyter Notebook"],
    links: [{ label: "Código", href: `${gh}/ecommerce-analytics` }],
  },
  {
    title: "Shortify & Track",
    description:
      "Encurtador de URLs que registra cliques em segundo plano e entrega métricas por navegador e dispositivo, com consultas agregadas no banco.",
    tags: ["Java 21", "Spring Boot 3", "PostgreSQL", "JUnit", "Mockito"],
    links: [{ label: "Código", href: `${gh}/URL_Shorter` }],
  },
  {
    title: "Busca Inteligente",
    description:
      "Autocomplete que reduz consultas ao banco com debounce no frontend e cache-aside em Redis.",
    tags: ["Java 21", "Spring Boot 3", "Redis"],
    links: [{ label: "Código", href: `${gh}/busca-inteligente` }],
  },
  {
    title: "MyFinn",
    description:
      "Gestor financeiro pessoal com gráficos, despesas recorrentes e parcelas de cartão. React no frontend e Spring Boot com JWT no backend.",
    tags: ["React", "Spring Boot", "PostgreSQL", "JWT"],
    links: [
      { label: "Demonstração", href: "https://my-finn.vercel.app" },
      { label: "Código", href: `${gh}/MyFinn` },
    ],
  },
  {
    title: "GA.EVENT",
    description:
      "Controle de presença em eventos com QR Code que expira em 5 minutos, cálculo de permanência e gamificação. API em Spring Boot e aplicativo Android.",
    tags: ["Java 21", "Spring Boot", "PostgreSQL", "Android"],
    links: [
      { label: "API", href: `${gh}/ga-evento-api` },
      { label: "Aplicativo", href: `${gh}/GA-evento-app` },
    ],
  },
];

export const stack = [
  { group: "Backend", items: "Java 21, Spring Boot 3, Spring Security e JWT, JPA e Hibernate, JUnit e Mockito" },
  { group: "Dados", items: "Python, Jupyter Notebook, SQL com PostgreSQL e MySQL" },
  { group: "Infraestrutura", items: "Docker, Docker Compose, Redis, Git e GitHub. Em estudo: AWS e Kubernetes" },
];
