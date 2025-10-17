# 🚀 Developer Tiago Site

Site de perfil profissional moderno para Analista de Dados e Desenvolvedor, com foco em Automações, RPA e Agentes de IA.

## ✨ Características

- **Design Moderno**: Tema escuro com gradientes roxo/rosa inspirado em código/terminal
- **Animações Suaves**: Transições e micro-interações usando Framer Motion
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Seções Completas**: Hero, Profile, Projects e Contact
- **Tecnologias Destacadas**: Python, Django, FastAPI, React, JavaScript, Zapier, Make, N8N

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool rápido
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide Icons** - Ícones modernos
- **shadcn/ui** - Componentes UI

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview do build
pnpm run preview
```

## 🎨 Personalização

### 1. Informações Pessoais

Edite o arquivo `src/App.jsx` e atualize:

- **Nome**: Procure por "Seu Nome" e substitua
- **Email**: Substitua "seu.email@exemplo.com"
- **Links Sociais**: Atualize os links do GitHub e LinkedIn

### 2. Sobre Você

Na seção `.about_me`, personalize o texto sobre sua trajetória profissional.

### 3. Habilidades

Modifique o objeto `skills` no código:

```javascript
const skills = {
  languages: ['Python', 'JavaScript', 'SQL'],
  frameworks: ['Django', 'FastAPI', 'React'],
  automation: ['Zapier', 'Make', 'N8N', 'RPA'],
  specialties: ['Data Analysis', 'API Development', 'AI Agents', 'Process Automation']
}
```

### 4. Projetos

Edite o array `projects` para adicionar seus próprios projetos:

```javascript
const projects = [
  {
    name: 'nome_do_projeto',
    title: 'Título do Projeto',
    description: 'Descrição detalhada...',
    role: 'Seu papel no projeto',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    icon: IconComponent // Database, Bot, Workflow, Code2
  }
]
```

### 5. Cores e Estilo

As cores principais estão definidas no `src/App.css`. Você pode personalizar:

- Gradientes de fundo
- Cores de destaque (roxo, rosa, verde)
- Espaçamentos e tamanhos

## 🚀 Deploy

### Opção 1: GitHub Pages

```bash
pnpm run build
# Faça upload da pasta dist/ para o GitHub Pages
```

### Opção 2: Vercel

```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opção 3: Netlify

```bash
# Build
pnpm run build

# Arraste a pasta dist/ para o Netlify
```

## 📝 Estrutura do Projeto

```
profile-site/
├── public/           # Arquivos estáticos
├── src/
│   ├── assets/       # Imagens e recursos
│   ├── components/   # Componentes React
│   │   └── ui/       # Componentes UI (shadcn)
│   ├── App.jsx       # Componente principal
│   ├── App.css       # Estilos globais
│   └── main.jsx      # Entry point
├── index.html        # HTML principal
└── package.json      # Dependências
```

## 💡 Dicas de Personalização

1. **Adicione sua foto**: Substitua o ícone de código por uma imagem real
2. **Links funcionais**: Atualize os links dos projetos para seus repositórios
3. **Animações**: Ajuste os delays e durações em `framer-motion`
4. **Seções extras**: Adicione seções como "Experiência" ou "Educação"
5. **Dark/Light mode**: Implemente um toggle de tema

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 🤝 Contribuições

Contribuições, issues e feature requests são bem-vindos!

---

**Desenvolvido com ♥ por Tiago**
