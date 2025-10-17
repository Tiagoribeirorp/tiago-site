# 📝 Guia Rápido de Personalização

## 🎯 Alterações Essenciais

### 1. Seu Nome e Título

**Arquivo:** `src/App.jsx`

**Linhas a modificar:**

```jsx
// Linha ~185 - Hero Section
<h2 className="text-2xl font-bold">Seu Nome</h2>

// Linha ~210
Meu nome é <span className="text-purple-400 font-semibold">Seu Nome</span>
```

**Substitua por:** Seu nome real

---

### 2. Email de Contato

**Arquivo:** `src/App.jsx`

**Linhas a modificar:**

```jsx
// Linha ~545 - Contact Section
{ icon: Mail, label: 'Email', value: 'seu.email@exemplo.com', color: 'pink' }

// Linha ~571
seu.email@exemplo.com
```

**Substitua por:** Seu email real

---

### 3. Links Sociais

**Arquivo:** `src/App.jsx`

**Linhas a modificar:**

```jsx
// Linha ~543-545 - Contact Section
{ icon: Github, label: 'GitHub', value: 'github.com/seuusuario', color: 'purple' },
{ icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/seuusuario', color: 'blue' },
```

**Substitua por:** Seus perfis reais

---

### 4. Sobre Você (About Me)

**Arquivo:** `src/App.jsx`

**Linhas ~370-385**

Personalize os 3 parágrafos com sua história e experiência profissional.

---

### 5. Adicionar/Remover Habilidades

**Arquivo:** `src/App.jsx`

**Linhas ~28-33**

```javascript
const skills = {
  languages: ['Python', 'JavaScript', 'SQL'], // Adicione ou remova linguagens
  frameworks: ['Django', 'FastAPI', 'React'], // Adicione ou remova frameworks
  automation: ['Zapier', 'Make', 'N8N', 'RPA'], // Ferramentas de automação
  specialties: ['Data Analysis', 'API Development', 'AI Agents', 'Process Automation']
}
```

---

### 6. Modificar Projetos

**Arquivo:** `src/App.jsx`

**Linhas ~35-70**

Para cada projeto, modifique:

```javascript
{
  name: 'nome_do_projeto',           // Nome técnico (sem espaços)
  title: 'Título do Projeto',        // Título exibido
  description: 'Descrição...',       // Descrição detalhada
  role: 'Seu Papel',                 // Seu papel no projeto
  tech: ['Tech1', 'Tech2'],          // Tecnologias usadas
  icon: Database                     // Ícone (Database, Bot, Workflow, Code2)
}
```

**Ícones disponíveis:**
- `Database` - Para projetos de dados
- `Bot` - Para projetos de IA/Bots
- `Workflow` - Para projetos de automação
- `Code2` - Para projetos de desenvolvimento

---

## 🎨 Personalizações Visuais

### Alterar Cores Principais

**Arquivo:** `src/App.css`

**Linha ~54:**

```css
--primary: oklch(0.7 0.2 280);  /* Cor roxa principal */
```

Ajuste os valores para mudar a cor do tema.

### Alterar Gradiente de Fundo

**Arquivo:** `src/App.jsx`

**Linha ~74:**

```jsx
className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"
```

Modifique as cores do gradiente conforme preferir.

---

## 🖼️ Adicionar Sua Foto

**Arquivo:** `src/App.jsx`

**Linhas ~155-157:**

Substitua o ícone por uma imagem:

```jsx
// De:
<Code2 size={64} className="text-white" />

// Para:
<img src="/sua-foto.jpg" alt="Seu Nome" className="w-full h-full object-cover rounded-full" />
```

Coloque sua foto em `public/sua-foto.jpg`

---

## 🔗 Links dos Repositórios

**Arquivo:** `src/App.jsx`

**Linha ~490:**

Adicione o link real do repositório:

```jsx
<Button
  variant="ghost"
  className="w-full text-purple-400 hover:bg-purple-500/10 font-mono text-sm"
  onClick={() => window.open('https://github.com/seu-usuario/seu-repo', '_blank')}
>
```

---

## 📱 Testar Localmente

```bash
cd profile-site
pnpm run dev
```

Acesse: `http://localhost:5173`

---

## 🚀 Build para Produção

```bash
pnpm run build
```

Os arquivos estarão em `dist/`

---

## ❓ Dúvidas Comuns

**Q: Como adicionar mais projetos?**
A: Copie um objeto do array `projects` e modifique os valores.

**Q: Como remover uma seção?**
A: Comente ou delete a seção correspondente no JSX.

**Q: Como mudar as animações?**
A: Ajuste os valores em `initial`, `animate` e `transition` dos componentes `motion`.

**Q: Como adicionar novos ícones?**
A: Importe de `lucide-react`: `import { NomeDoIcone } from 'lucide-react'`

---

**Boa sorte com seu site! 🚀**
