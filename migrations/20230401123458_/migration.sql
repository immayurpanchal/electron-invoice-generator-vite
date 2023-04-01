/*
  Warnings:

  - You are about to drop the column `productName` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `productPrice` on the `products` table. All the data in the column will be lost.
  - Added the required column `product_name` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_price` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "productName",
DROP COLUMN "productPrice",
ADD COLUMN     "product_name" TEXT NOT NULL,
ADD COLUMN     "product_price" DOUBLE PRECISION NOT NULL;
