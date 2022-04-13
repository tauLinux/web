import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handleRequest = async (request: Request): Promise<Response> => {
  if (request.method !== "POST")
    return new Response(
      JSON.stringify({
        success: false,
        error: "Must be POST",
      }),
      {
        status: 405,
      }
    );

  const { email } = await request.json<{ email?: string }>();

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

addEventListener("fetch", (event: any) => {
  return event.respondWith(handleRequest(event.request));
});
