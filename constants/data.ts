// constants/data.ts
export const USER_DATA = {
  name: "Gustavo Pereira",
  role: "Software Engineer | Backend & Cloud Specialist",
  description: "Desenvolvedor focado em construir sistemas seguros, escaláveis e prontos para a nuvem. Especialista em Java (Spring Boot) e infraestrutura moderna com Docker e AWS.",
  links: {
    github: "https://github.com/Pereira-gu",
    linkedin: "https://linkedin.com/in/gustavospereira-dev",
  },
  stack: {
      corestack: ["Java (Spring Boot 3)", "Python", "TypeScript (React/Next.js)", "C Language"], 
      infrastructure: ["Docker & Compose", "AWS (Cloud Practitioner)", "Linux Terminal", "CI/CD (GitHub Actions)"],
      data: ["PostgreSQL", "MySQL", "Hibernate (JPA)", "Flyway/Liquibase"],
      learning: ["Kubernetes (K8s)", "Arquitetura Limpa", "Design Patterns"]
  },
  projectSections: [
    {
      categoria: "Data Science & Analytics",
      projetos: [
        {
          title: "Guardian System",
          description: "Monitorização de segurança modular para processos com scores de risco.",
          stack: ["Python", "AWS", "SQLite", "psutil"],
          image_urls: ["/guardian_system/dashboard.png", "/guardian_system/teerminal.png"],
          github_url: "https://github.com/Pereira-gu/Guardian_System",
        },
        {
          title: "E-Commerce Optimization",
          description: "Solução de análise de dados de ponta a ponta utilizando o dataset da Olist.",
          stack: ["Python", "Power BI", "SQLite", "pandas"],
          image_urls: ["/e_commerce/dashboard.png"],
          github_url: "https://github.com/Pereira-gu/E-Commerce-Optimization",
        }
      ]
    },
    {
      categoria: "Sistema Backend & Infraestrutura",
      projetos: [
        {
          title: "MyFinn - Gestão Financeira Pessoal",
          description: "Plataforma Full Stack de controle financeiro com foco em segurança JWT e arquitetura desacoplada. O backend gerencia transações complexas, categorização dinâmica e fornece dashboards via API RESTful, enquanto o ambiente é orquestrado via Docker para garantir escalabilidade e isolamento.",
          stack: ["Java 17", "Spring Boot 3", "Spring Security", "PostgreSQL", "Docker", "React"],
          image_urls: ["/myfinn/preview.png", "/myfinn/Render.png", "/myfinn/categorys.png", "/myfinn/transactions.png"],
          github_url: "https://github.com/Pereira-gu/myfinn",
        },
        {
          title: "Student Registration API",
          description: "API REST resiliente para gestão de matrículas, com foco em arquitetura limpa, tratamento global de exceções e conteinerização. Desenvolvida para ser 'Cloud-Ready', garantindo consistência entre ambientes de desenvolvimento e produção.",
          stack: ["Java 21", "Spring Boot 3", "MySQL", "Docker", "OpenAPI/Swagger"],
          image_urls: ["/api_student/swaggerui.png", "/api_student/docker.png", "/api_student/400%20error.png"],
          github_url: "https://github.com/Pereira-gu/api-student",
        },
        {
          title: "Library Management API",
          description: "Ecossistema backend profissional para gestão de bibliotecas com foco em segurança stateless e regras de negócio complexas. Implementa fluxos de empréstimos com validações automáticas de limites de usuário, cálculos de multas por atraso e orquestração completa via containers.",
          stack: ["Java 21", "Spring Security", "JWT", "Docker & Compose", "MySQL", "JUnit 5"],
          image_urls: ["/api_library/excalidraw.png", "/api_library/swagger.png", "/api_library/test.png"],
          github_url: "https://github.com/Pereira-gu/api-libary",
        },
      ]
    },
    {
      categoria: "Desenvolvimento Web & Software",
      projetos: [
        {
          title: "Saboroso Burger",
          description: "Gestão Full Stack de pedidos e inventário com PHP e MySQL.",
          stack: ["PHP", "MySQL", "JavaScript"],
          image_urls: ["/saboroso_burger/mainpage.png"],
          github_url: "https://github.com/Pereira-gu/projeto-hamburgueria",
          live_url: "https://saborosobuger.com.br/index.php"
        }
      ]
    }
  ]
};