# 💰 InvestTrack

<div align="center">

![InvestTrack Logo](https://img.shields.io/badge/InvestTrack-Financial%20Manager-4CAF50?style=for-the-badge&logo=chart-line&logoColor=white)

**Seu gerenciador de investimentos inteligente e intuitivo**

[![Live Demo](https://img.shields.io/badge/demo-online-success?style=for-the-badge&logo=vercel)](https://invest-track-sigma.vercel.app)
[![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://github.com/Bernardo07dev/InvestTrack)
[![Backend](https://img.shields.io/badge/Backend-Django-092E20?style=for-the-badge&logo=django&logoColor=white)](https://github.com/Bernardo07dev/Backend-InvestTrack)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel%20%26%20Render-black?style=for-the-badge)](https://invest-track-sigma.vercel.app)

[🚀 Demo ao Vivo](https://invest-track-sigma.vercel.app) • [📖 Documentação](#-documentação-da-api) • [🐛 Reportar Bug](https://github.com/Bernardo07dev/InvestTrack/issues) • [✨ Sugerir Funcionalidade](https://github.com/Bernardo07dev/InvestTrack/issues)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Funcionalidades](#-funcionalidades)
- [Stack Tecnológica](#-stack-tecnológica)
- [Começando](#-começando)
- [Documentação da API](#-documentação-da-api)
- [Deploy](#-deploy)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

O **InvestTrack** é uma plataforma completa de gerenciamento de investimentos que permite aos usuários acompanhar, analisar e otimizar seus portfólios financeiros. Com uma interface moderna e intuitiva em React e uma API robusta em Django, o sistema oferece controle total sobre seus ativos financeiros.

### 🎪 Demonstração

**🌐 Acesse agora:** [invest-track-sigma.vercel.app](https://invest-track-sigma.vercel.app)

### ✨ Por que InvestTrack?

- ⚡ **Performance**: Interface rápida e responsiva construída com React + Vite
- 📊 **Analytics**: Visualizações intuitivas do seu portfólio de investimentos
- 🎨 **Design Moderno**: UI/UX clean e profissional
- 🚀 **Escalável**: Arquitetura preparada para crescimento
- 📱 **Responsivo**: Funciona perfeitamente em qualquer dispositivo

---

## 🌟 Funcionalidades


### 💼 Gerenciamento de Investimentos
- 📈 Cadastro e acompanhamento de múltiplos tipos de investimentos
- 💵 Registro de aportes e resgates
- 📊 Dashboard com visão geral do portfólio
- 📉 Gráficos de performance e evolução
- 🏦 Suporte para diferentes classes de ativos
- 💰 Cálculo automático de rentabilidade

### 📱 Interface
- 🎨 Design responsivo e moderno
- 🌓 Tema claro/escuro (planejado)
- 📊 Gráficos interativos
- 🔔 Notificações em tempo real
- ⚡ Performance otimizada

---

## 🛠️ Stack Tecnológica

### Frontend
<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

- **React 18+** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool extremamente rápida
- **Axios** - Cliente HTTP para comunicação com API
- **React Router** - Roteamento de páginas

### Backend
<div align="center">

![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![DRF](https://img.shields.io/badge/Django_REST-ff1709?style=for-the-badge&logo=django&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

</div>

- **Django 4+** - Framework web Python robusto
- **Django REST Framework** - Criação de APIs RESTful
- **PostgreSQL** - Banco de dados relacional

### DevOps & Deploy
- **Vercel** - Deploy do Frontend
- **Render** - Deploy do Backend
- **Git/GitHub** - Controle de versão

---

## 🚀 Começando

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** 16+ e npm/yarn
- **Python** 3.9+ e pip
- **Git**
- **PostgreSQL** (para produção)

### 📥 Instalação

#### 1️⃣ Clone os repositórios

```bash
# Clone o Frontend
git clone https://github.com/Bernardo07dev/InvestTrack.git
cd InvestTrack

# Clone o Backend (em outro terminal)
git clone https://github.com/Bernardo07dev/Backend-InvestTrack.git
cd Backend-InvestTrack
```

#### 2️⃣ Configure o Backend

```bash
# Entre na pasta do backend
cd Backend-InvestTrack

# Crie um ambiente virtual
python -m venv venv

# Ative o ambiente virtual
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate

# Instale as dependências
pip install -r requirements.txt

# Configure as variáveis de ambiente
# Crie um arquivo .env na raiz do projeto
cat > .env << EOL
SECRET_KEY=sua-chave-secreta-super-segura
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:5173
EOL

# Execute as migrações
python mana