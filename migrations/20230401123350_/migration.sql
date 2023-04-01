-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "productPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
