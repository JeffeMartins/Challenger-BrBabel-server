# API de cadastro de empresas

Backend do desafio BrBabel: cadastro, consulta, atualização e exclusão de empresas, com autenticação JWT e PostgreSQL.

[![CI](https://github.com/JeffeMartins/Challenger-BrBabel-server/actions/workflows/ci.yml/badge.svg)](https://github.com/JeffeMartins/Challenger-BrBabel-server/actions/workflows/ci.yml)

## Melhorias de engenharia

- TypeORM atualizado para DataSource explícito e inicialização do banco antes de aceitar requisições.
- Remoção de credenciais embutidas; senhas não são incluídas nos JWTs.
- Validação/allowlist dos campos de empresa; IDs enviados no body não sobrescrevem identidade.
- Tipagem e scripts de build/execução corrigidos; Node 24 e encerramento gracioso.
- Testes de configuração de segredo e de entradas inválidas.

## Executar localmente

Pré-requisitos: Node.js 24 LTS e npm; Docker Compose v2 para os serviços que usam banco.

```sh
node scripts/setup-env.mjs
docker compose up -d --build
```

A API fica em `http://localhost:3334`. Faça `POST /authorization/api` com `user` e `password` do `.env`; depois envie `Authorization: Bearer TOKEN`.

Rotas: `POST /insert/company`, `GET /select-all/company`, `GET /select/company/:id`, `PUT /update/company/:id`, `DELETE /delete/company/:id`.

Payload: `{"name":"Empresa Demo","cnpj":"12345678000190","demand":10,"annualBilling":100000.50,"about":"Empresa fictícia"}`. O CNPJ é validado apenas como formato de 14 dígitos, sem consulta de registro. Atualização espera o conjunto completo de campos.

`npm ci`, `npm run build`, `npm test` e `npm run dev` funcionam com PostgreSQL configurado em `DATABASE_URL`. O Compose usa `synchronize` apenas para o banco local de demonstração. Antes de produção, crie migrations revisadas; `NODE_ENV=production` desabilita sincronização automática. A autenticação usa uma conta demonstrativa de ambiente, não um sistema completo de identidades.

## Qualidade e limites da evidência

As mudanças preservam a proposta do exercício e corrigem problemas observados no código. A CI usa Node 24 e `npm ci`, executa o build quando disponível e os testes existentes. O lockfile é versionado; dependências e pastas de build não são. Dependabot acompanha atualizações semanais. Não há promessa de cobertura total, auditoria completa de segurança ou capacidade de produção.

Não publique `.env`, cookies, tokens ou dados reais de clientes. Antes de expor a aplicação à internet, revise autenticação/autorização, TLS, limites de chamadas, logs e backups conforme o domínio. Os exemplos são para execução local. Use `docker compose down` para parar os containers; volumes persistem e `down -v` apaga seus dados.
