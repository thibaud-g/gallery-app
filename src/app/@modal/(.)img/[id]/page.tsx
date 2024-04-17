import { FullPageImageView } from "~/components/full-image-page";
import { Modal } from "./modal";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}
