import { Modal } from "~/app/@modal/(.)img/[id]/modal";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  return <FullPageImageView id={idAsNumber} />;
}
