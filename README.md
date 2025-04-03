# Consulta CEP API

Esta é uma API simples para consulta de endereços a partir de um CEP, utilizando o pacote `cep-promise`.

## 📌 Tecnologias Utilizadas

- Node.js
- Express.js
- cep-promise

## 🚀 Como Executar

### 1️⃣ Clone o Repositório
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Instale as Dependências
```sh
npm install
```

### 3️⃣ Execute a Aplicação
```sh
node server.js
```
A API estará rodando na porta `3200`.

## 🔍 Como Usar

A API possui um endpoint para consulta de CEP:

### 📌 Exemplos

**Exemplo de Requisição:**
```sh
GET http://localhost:3200/cep/01001000
```

**Exemplo de Resposta:**
```json
{
  "cep": "01001-000",
  "state": "SP",
  "city": "São Paulo",
  "neighborhood": "Sé",
  "street": "Praça da Sé"
}
```

