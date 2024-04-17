import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.url}
              className="aspect-video w-64 object-cover"
              alt="mock"
            />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
