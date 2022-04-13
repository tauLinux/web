-- CreateTable
CREATE TABLE "Email" (
    "email" TEXT NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("email")
);

-- CreateIndex
CREATE UNIQUE INDEX "Email_email_key" ON "Email"("email");
