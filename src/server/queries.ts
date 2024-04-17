import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

const getImages = async () => {
  const user = auth();

  if (!user.userId) {
    throw new Error("Unauthorized");
  }

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
  return images;
};

export { getImages };
