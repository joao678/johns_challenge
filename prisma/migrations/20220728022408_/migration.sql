/*
  Warnings:

  - Added the required column `author_name` to the `Publication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Publication" ADD COLUMN     "author_name" TEXT NOT NULL;
