import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getImage(Number(photoId));
  return (
    <div>
      <h1>{image.name}</h1>
      <img src={image.url} alt={image.name} />
    </div>
  );
}
