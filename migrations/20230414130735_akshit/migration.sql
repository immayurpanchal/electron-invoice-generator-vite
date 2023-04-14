/*
  Warnings:

  - You are about to drop the column `product_price` on the `products` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "bills" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    CONSTRAINT "bills_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "bill_items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "billId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    CONSTRAINT "bill_items_billId_fkey" FOREIGN KEY ("billId") REFERENCES "bills" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "bill_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "customers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_name" TEXT NOT NULL,
    "qty" INTEGER NOT NULL
);
INSERT INTO "new_products" ("id", "product_name", "qty") SELECT "id", "product_name", "qty" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
