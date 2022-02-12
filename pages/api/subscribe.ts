import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../util/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ success: false, error: "Email is required" });
      return;
    }

    await prisma.email.upsert({
      where: {
        email,
      },
      update: {},
      create: { email },
    });

    res.status(200).json({ success: true });
  } else {
    res.status(404).send(undefined);
  }
};

export default handler;
