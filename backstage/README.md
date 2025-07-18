
# 🎸 Backstage + PostgreSQL com Docker

Este repositório contém uma configuração simplificada para subir o [Backstage](https://backstage.io/) com um banco de dados PostgreSQL usando Docker.

## 🧾 Requisitos

Antes de começar, certifique-se de que você tem instalado:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## 🚀 Subindo a aplicação

Para subir o Backstage e o banco de dados PostgreSQL, execute:

```git
git clone [url-do-repositorio]
```

```bash
docker-compose up --build
```
Isso fará:

Build do container do Backstage a partir do Dockerfile localizado em packages/backend/

Inicialização de um container PostgreSQL com as credenciais:

**Usuário**: admin

**Senha**: admin

Conexão entre os serviços via rede interna do Docker.

A aplicação estará acessível em: http://localhost:7007

## 💾 Persistência de Dados
O volume postgres_data é utilizado para persistir os dados do PostgreSQL, garantindo que mesmo após o encerramento do container os dados serão mantidos.

## 🛑 Parando a Aplicação
```bash
 docker-compose down
```

Se quiser remover os volumes (e os dados persistidos):

```bash
 docker-compose down -v
```

## 🛠️ Personalização
Você pode ajustar os valores de conexão com o banco e as URLs da aplicação no docker-compose.yaml, modificando as variáveis de ambiente da seguinte forma:

```yaml
environment:
  APP_CONFIG_backend_database_connection_user: <seu_usuario>
  APP_CONFIG_backend_database_connection_password: <sua_senha>
  APP_CONFIG_app_baseUrl: http://localhost:7007
  ...
```

## 📚 Referências
* [Documentação oficial do Backstage](https://backstage.io/docs/overview/what-is-backstage/)
* [Backstage plugins](https://backstage.io/plugins/)
* [Docker](https://www.docker.com/)
