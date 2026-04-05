-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'SECRETARIA', 'FINANCEIRO', 'DIRETOR_GERAL');

-- CreateEnum
CREATE TYPE "TipoEscola" AS ENUM ('ATL', 'Encino_primario', 'Encino_secundario', 'Ensino_medio');

-- CreateEnum
CREATE TYPE "TipoMorada" AS ENUM ('RESIDENCIAL', 'TEMPORARIA');

-- CreateEnum
CREATE TYPE "Periodo" AS ENUM ('MANHA', 'TARDE');

-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('MASCULINO', 'FEMENINO');

-- CreateEnum
CREATE TYPE "Cargo" AS ENUM ('MOTORISTA', 'VIGILANTE', 'SECRETARIO', 'FINANCEIRO', 'DIRETOR_GERAL');

-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('Hiase', 'mini_autocarro', 'autocarro', 'particular');

-- CreateEnum
CREATE TYPE "StatusVeiculo" AS ENUM ('Ativo', 'Manutencao', 'Inativo');

-- CreateEnum
CREATE TYPE "PosseVeiculo" AS ENUM ('EMPRESA', 'ALUGADO');

-- CreateEnum
CREATE TYPE "MeioPagamento" AS ENUM ('Transferencia_Bancaria', 'Transferencia_Express', 'Kwik', 'NaHora_Bai');

-- CreateEnum
CREATE TYPE "StatusPagamento" AS ENUM ('Pago', 'Pendente', 'Estornado');

-- CreateEnum
CREATE TYPE "TipoDono" AS ENUM ('ALUNO', 'FUNCIONARIO', 'PROPRIETARIO');

-- CreateEnum
CREATE TYPE "TipoFuncionarioToVeiculo" AS ENUM ('MOTORISTA', 'VIGILANTE');

-- CreateTable
CREATE TABLE "users" (
    "id" CHAR(36) NOT NULL,
    "user_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alunos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "sexo" "Sexo" NOT NULL,
    "contacto_responsavel" TEXT NOT NULL,
    "turma" TEXT NOT NULL,
    "turno" "Periodo" NOT NULL,
    "rota" TEXT NOT NULL,
    "Bilhete_identificacao" TEXT NOT NULL,
    "Contrato" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "documento_identificacao" TEXT NOT NULL,
    "sexo" "Sexo" NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "carta_conducao" TEXT,
    "certificado" TEXT NOT NULL,
    "cargo" "Cargo" NOT NULL,
    "salario" INTEGER NOT NULL,
    "user_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "funcionarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proprietarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sexo" "Sexo" NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "cordenadas_bancarias" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "proprietarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moradas" (
    "id" SERIAL NOT NULL,
    "municipio" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" INTEGER,
    "tipo" "TipoMorada" NOT NULL,

    CONSTRAINT "moradas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "veiculos" (
    "id" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "tipo" "Tipo" NOT NULL,
    "status" "StatusVeiculo" NOT NULL,
    "posse" "PosseVeiculo" NOT NULL,
    "proprietario_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "veiculos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagamentos" (
    "id" SERIAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "referencia" TIMESTAMP(3) NOT NULL,
    "valor_base" DECIMAL(65,30) NOT NULL,
    "multa_aplicada" DECIMAL(65,30),
    "valor_total" DECIMAL(65,30) NOT NULL,
    "metodo_pagamento" "MeioPagamento" NOT NULL,
    "comprovante" TEXT NOT NULL,
    "numero_referencia" INTEGER NOT NULL,
    "observacao" TEXT NOT NULL,
    "status" "StatusPagamento" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pagamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "telefones" (
    "id" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "dono_id" INTEGER NOT NULL,
    "dono_tipo" "TipoDono" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "telefones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "escolas" (
    "id" SERIAL NOT NULL,
    "nome_escola" TEXT NOT NULL,
    "tipo" "TipoEscola" NOT NULL,
    "localizacao" TEXT NOT NULL,

    CONSTRAINT "escolas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuncionarioMorada" (
    "id" SERIAL NOT NULL,
    "funcionarioId" INTEGER NOT NULL,
    "moradaId" INTEGER NOT NULL,

    CONSTRAINT "FuncionarioMorada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProprietarioMorada" (
    "id" SERIAL NOT NULL,
    "proprietarioId" INTEGER NOT NULL,
    "moradaId" INTEGER NOT NULL,

    CONSTRAINT "ProprietarioMorada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlunoMorada" (
    "id" SERIAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "moradaId" INTEGER NOT NULL,

    CONSTRAINT "AlunoMorada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionariostoveiculo" (
    "id" SERIAL NOT NULL,
    "id_funcionario" INTEGER NOT NULL,
    "tipo_funcionario" "TipoFuncionarioToVeiculo" NOT NULL,
    "id_veiculo" INTEGER NOT NULL,

    CONSTRAINT "funcionariostoveiculo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_name_key" ON "users"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "funcionarios_carta_conducao_key" ON "funcionarios"("carta_conducao");

-- CreateIndex
CREATE UNIQUE INDEX "funcionarios_user_id_key" ON "funcionarios"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "pagamentos_alunoId_referencia_key" ON "pagamentos"("alunoId", "referencia");

-- CreateIndex
CREATE UNIQUE INDEX "telefones_numero_dono_id_dono_tipo_key" ON "telefones"("numero", "dono_id", "dono_tipo");

-- CreateIndex
CREATE UNIQUE INDEX "FuncionarioMorada_funcionarioId_moradaId_key" ON "FuncionarioMorada"("funcionarioId", "moradaId");

-- CreateIndex
CREATE UNIQUE INDEX "ProprietarioMorada_proprietarioId_moradaId_key" ON "ProprietarioMorada"("proprietarioId", "moradaId");

-- CreateIndex
CREATE UNIQUE INDEX "AlunoMorada_alunoId_moradaId_key" ON "AlunoMorada"("alunoId", "moradaId");

-- CreateIndex
CREATE UNIQUE INDEX "funcionariostoveiculo_id_funcionario_key" ON "funcionariostoveiculo"("id_funcionario");

-- CreateIndex
CREATE UNIQUE INDEX "funcionariostoveiculo_id_veiculo_tipo_funcionario_key" ON "funcionariostoveiculo"("id_veiculo", "tipo_funcionario");

-- AddForeignKey
ALTER TABLE "funcionarios" ADD CONSTRAINT "funcionarios_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "veiculos" ADD CONSTRAINT "veiculos_proprietario_id_fkey" FOREIGN KEY ("proprietario_id") REFERENCES "proprietarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuncionarioMorada" ADD CONSTRAINT "FuncionarioMorada_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuncionarioMorada" ADD CONSTRAINT "FuncionarioMorada_moradaId_fkey" FOREIGN KEY ("moradaId") REFERENCES "moradas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProprietarioMorada" ADD CONSTRAINT "ProprietarioMorada_proprietarioId_fkey" FOREIGN KEY ("proprietarioId") REFERENCES "proprietarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProprietarioMorada" ADD CONSTRAINT "ProprietarioMorada_moradaId_fkey" FOREIGN KEY ("moradaId") REFERENCES "moradas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunoMorada" ADD CONSTRAINT "AlunoMorada_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunoMorada" ADD CONSTRAINT "AlunoMorada_moradaId_fkey" FOREIGN KEY ("moradaId") REFERENCES "moradas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionariostoveiculo" ADD CONSTRAINT "funcionariostoveiculo_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionariostoveiculo" ADD CONSTRAINT "funcionariostoveiculo_id_veiculo_fkey" FOREIGN KEY ("id_veiculo") REFERENCES "veiculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
