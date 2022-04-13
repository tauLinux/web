import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const onRequestPost: PagesFunction = async (e) => {
  const { email } = await e.request.json<{ email?: string }>();
  if (!email)
    return new Response(
      JSON.stringify({
        success: false,
        error: "Email is required",
      }),
      {
        status: 400,
      }
    );

  await prisma.email.upsert({
    where: {
      email,
    },
    update: {},
    create: { email },
  });

  return new Response(null, { status: 200 });
};
