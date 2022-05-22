/*
  Warnings:

  - Added the required column `update_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "courses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "speakers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "photo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    "coursesId" TEXT,
    CONSTRAINT "users_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "courses" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_users" ("curso", "email", "id", "name") SELECT "curso", "email", "id", "name" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
