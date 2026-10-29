# Contexto da modernização

Repositório: `Challenger-BrBabel-server`. Revisão em 28/10/2026. O objetivo é tornar o clone reproduzível e o comportamento compreensível em uma entrevista técnica, preservando o contexto histórico de exercício/protótipo.

## Decisões e validação

- TypeORM atualizado para DataSource explícito e inicialização do banco antes de aceitar requisições.
- Remoção de credenciais embutidas; senhas não são incluídas nos JWTs.
- Validação/allowlist dos campos de empresa; IDs enviados no body não sobrescrevem identidade.
- Tipagem e scripts de build/execução corrigidos; Node 24 e encerramento gracioso.
- Testes de configuração de segredo e de entradas inválidas.


Consulte os scripts reais em `package.json` (ou nos módulos do monorepo). Build, teste unitário e teste com serviços externos são evidências diferentes. A CI não valida credenciais de terceiros nem garante comportamento em produção. O README informa dependências externas e funcionalidades ainda não implementadas.

## Segurança de configurações antigas

Configurações locais e segredos foram retirados da versão atual quando presentes. Isso não remove conteúdo de commits antigos. Se algum segredo histórico ainda estiver ativo, revogue-o no provedor e gere outro; não reutilize credenciais publicadas. A revisão preserva o histórico Git e não faz force push.
