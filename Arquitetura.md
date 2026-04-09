routes — define os endpoints (GET /alunos, POST /alunos, etc.)
controllers — recebe o pedido HTTP, chama o service, devolve a resposta
services — contém as regras de negócio ("um aluno não pode ter rota sem turma definida")
repositories — faz as queries à base de dados, mais nada
interfaces — os tipos TypeScript das tuas entidades (Aluno, Funcionario, etc.)
middlewares — código que corre entre o pedido e o controller (ex: verificar se o utilizador está autenticado)
lib — a instância do PrismaClient que é partilhada por todo o backend