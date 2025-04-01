# Guia de Execução da Aplicação

## Requisitos
Antes de iniciar a aplicação, certifique-se de que possui os seguintes requisitos instalados:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js v18.20.4](https://nodejs.org/en/download/)

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

### Banco de Dados
```
DB_HOST=localhost
DB_USER=promad
DB_PASSWORD=promad_password
DB_DATABASE=clientes
DB_PORT=5433
```

### API
```
API_URL_BASE=https://randomuser.me/api/
```

## Instruções para Execução

1. Acesse a raiz do projeto no terminal.
2. Instale as dependências do projeto executando:
   ```sh
   npm ci
   ```
3. Execute o seguinte comando para iniciar os containers Docker:
   ```sh
   docker compose up
   ```

Isso iniciará todos os serviços necessários para a aplicação.

## Testando a Aplicação

Após a execução bem-sucedida dos serviços, verifique se a API está rodando corretamente acessando:
```
http://localhost:3000
```

Caso precise parar os serviços, utilize:
```sh
docker compose down
```

Se houver dúvidas ou problemas na execução, consulte a documentação do projeto ou entre em contato com o responsável pelo desenvolvimento.

