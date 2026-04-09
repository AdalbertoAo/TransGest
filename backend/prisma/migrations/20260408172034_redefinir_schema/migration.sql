/*
  Warnings:

  - You are about to drop the column `Bilhete_identificacao` on the `alunos` table. All the data in the column will be lost.
  - You are about to drop the column `Contrato` on the `alunos` table. All the data in the column will be lost.
  - You are about to drop the column `contacto_responsavel` on the `alunos` table. All the data in the column will be lost.
  - You are about to drop the column `alunoId` on the `pagamentos` table. All the data in the column will be lost.
  - You are about to drop the column `cordenadas_bancarias` on the `proprietarios` table. All the data in the column will be lost.
  - You are about to drop the `telefones` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[aluno_id,referencia]` on the table `pagamentos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bilhete_identificacao` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contrato` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `escola_id` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone_responsavel` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `escolas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `funcionarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aluno_id` to the `pagamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coordenadas_bancarias` to the `proprietarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `proprietarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pagamentos" DROP CONSTRAINT "pagamentos_alunoId_fkey";

-- DropIndex
DROP INDEX "pagamentos_alunoId_referencia_key";

-- AlterTable
ALTER TABLE "alunos" DROP COLUMN "Bilhete_identificacao",
DROP COLUMN "Contrato",
DROP COLUMN "contacto_responsavel",
ADD COLUMN     "bilhete_identificacao" TEXT NOT NULL,
ADD COLUMN     "contrato" TEXT NOT NULL,
ADD COLUMN     "escola_id" INTEGER NOT NULL,
ADD COLUMN     "telefone" TEXT,
ADD COLUMN     "telefone_responsavel" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "escolas" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "telefone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "funcionarios" ADD COLUMN     "telefone" TEXT NOT NULL,
ALTER COLUMN "salario" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "pagamentos" DROP COLUMN "alunoId",
ADD COLUMN     "aluno_id" INTEGER NOT NULL,
ALTER COLUMN "observacao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "proprietarios" DROP COLUMN "cordenadas_bancarias",
ADD COLUMN     "coordenadas_bancarias" TEXT NOT NULL,
ADD COLUMN     "telefone" TEXT NOT NULL;

-- DropTable
DROP TABLE "telefones";

-- DropEnum
DROP TYPE "TipoDono";

-- CreateIndex
CREATE UNIQUE INDEX "pagamentos_aluno_id_referencia_key" ON "pagamentos"("aluno_id", "referencia");

-- AddForeignKey
ALTER TABLE "alunos" ADD CONSTRAINT "alunos_escola_id_fkey" FOREIGN KEY ("escola_id") REFERENCES "escolas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
