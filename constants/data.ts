// constants/data.ts
export const USER_DATA = {
  name: "Gustavo Pereira",
  role: "Developer & Cloud Specialist",
  description: "Estudante de Ciência da Computação focado em Cloud Computing, Automação e Performance. Desenvolvimento de soluções escaláveis com Python, AWS e infraestrutura moderna.",
  links: {
    github: "https://github.com/Pereira-gu",
    linkedin: "https://linkedin.com/in/gustavospereira-dev",
  },
  stack: {
  // O que você realmente "pilota" no dia a dia
  corestack: ["Python", "PHP", "C Language", "TypeScript"], 
  
  // O que prova que você é um estudante de CC sério
  learning: ["AWS Cloud Practitioner", "Algoritmos em Grafos", "Kubernetes (K8s)"],
  
  // Ferramentas que agregam valor ao projeto
  tools: ["Git & GitHub", "MySQL / SQLite", "Docker", "Power BI"]
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
          title: "Student Registration API",
          description: "API REST resiliente para gestão de matrículas, com foco em arquitetura limpa, tratamento global de exceções e conteinerização. Desenvolvida para ser 'Cloud-Ready', garantindo consistência entre ambientes de desenvolvimento e produção.",
          stack: ["Java 21", "Spring Boot 3", "MySQL", "Docker", "OpenAPI/Swagger"],
          image_urls: ["/api_student/swaggerui.png", "/api_student/docker.png", "/api_student/400%20error.png"],
          github_url: "https://github.com/Pereira-gu/api-student",
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