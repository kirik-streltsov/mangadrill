import Image from "next/image";

interface MangaCardProps {
  title: string;
  thumbnailUrl: string;
}

function MangaCard({ title, thumbnailUrl }: MangaCardProps) {
  return (
    <figure className="flex flex-col relative w-35 h-50 rounded-sm overflow-hidden">
      <Image src={thumbnailUrl} alt={title} fill />
      <figcaption
        className="text-white mt-44 z-10 text-center"
        style={{
          background:
            "linear-gradient(0deg, rgb(78, 78, 78) 10%, rgba(255,255,255,0) 100%)",
        }}
      >
        {title}
      </figcaption>
    </figure>
  );
}

export default MangaCard;
