import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
