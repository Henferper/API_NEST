# Orders API

API responsável pelo gerenciamento de pedidos e itens de pedidos.  
O projeto utiliza **Node.js**, **Express**, **Prisma ORM** e **PostgreSQL**, executando em ambiente **Docker**.

---

# Arquitetura do Projeto

A aplicação segue uma arquitetura em camadas para separar responsabilidades:


src
├── controllers
│ └── order.js
│
├── services
│ └── order.js
│
├── routes
│ └── order.js
│
├── middleware
│ └── auth.js
│
├── utils
│ └── mapper.js
│
└── prisma
└── schema.prisma

## Controllers
Responsáveis por receber as requisições HTTP, validar dados básicos e chamar a camada de serviços.

Exemplo:
- Receber `POST /orders`
- Enviar os dados para `orderService`

## Services
Contém a lógica de negócio da aplicação.

Funções principais:
- Criar pedidos
- Buscar pedidos
- Atualizar pedidos
- Deletar pedidos

Essa camada utiliza o **Prisma Client** para comunicação com o banco de dados.

## Routes
Define os endpoints disponíveis na API e liga cada rota ao controller correspondente.

Exemplo:

POST /orders
GET /orders
PUT /orders/:orderId
DELETE /orders/:orderId

## Middleware
Responsável por funcionalidades transversais, como autenticação.

## Utils (Mapper)
Converte dados recebidos de APIs externas ou requests para o formato esperado pelo banco de dados.

Exemplo:

Entrada externa:

{
"numeroPedido": "v10089015vdb",
"valorTotal": 10000
}

Convertido para:

{
orderId: "v10089015vdb",
value: 10000
}

## Prisma
Responsável pelo mapeamento do banco de dados e execução das migrations.

---

# Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- Docker
- Docker Compose

---

# Como Rodar o Projeto

## 1 - Instalar dependências

```bash
npm install
```

crie o .env na raiz
```bash
DATABASE_URL="postgresql://postgres:postgres@db:5432/orders_db"
```

## 2 - Subir containers
```bash
docker-compose down
```

```bash
docker-compose up --build
```

Isso irá iniciar:

API (orders_api)

Banco de dados PostgreSQL

## 3 - Rodar Migrations
```bash
docker compose exec orders_api npx prisma migrate dev
```

O Prisma irá solicitar um nome para a migration.

Como Testar a API

URL
```bash
http://localhost:3000/api-docs/#/
```

## 4 - Autenticação
```bash
{
  "user": "admin",
  "password": "123"
}
```