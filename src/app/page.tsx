export default function HomePage() {
  const mockUrl = [
    "https://utfs.io/f/71e2035b-9d7b-48b5-9011-968015b148f0-a48833.png",
    "https://utfs.io/f/46b41882-096c-476d-9c5f-00aa543035e4-a4qp6e.png",
    "https://utfs.io/f/f9742223-3548-42c5-8784-3ae64d50f1e3-lfg35a.png",
    "https://utfs.io/f/b564ddbd-6df0-4189-8540-fda8d0a26a05-9jv45q.png",
  ];

  const mockImages = mockUrl.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <img key={image.id} src={image.url} className="w-64" alt="mock" />
        ))}
      </div>
    </main>
  );
}
