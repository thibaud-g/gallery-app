import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await getImages();
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-64">
          <Image
            style={{ objectFit: "contain" }}
            width={256}
            height={256}
            src={image.url}
            className="aspect-video w-64 object-cover"
            alt={image.name}
          />
          <p className="text-ellipsis">{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          <p>Sign in to see your images</p>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
