-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "Age" INTEGER NOT NULL,
    "Image" TEXT,
    "contactNumber" TEXT NOT NULL,
    "Time" TEXT NOT NULL,
    "membershipType" TEXT NOT NULL,
    "admissionDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "memeberId" TEXT NOT NULL,
    "paymentDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Payment_memeberId_fkey" FOREIGN KEY ("memeberId") REFERENCES "Member" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
