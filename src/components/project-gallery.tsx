import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

type ProjectGalleryProps = {
  images?: ProjectImage[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  if (!images?.length) return null;

  return (
    <section aria-label="Project imagery" className="project-gallery container-shell">
      {images.map((image, index) => (
        <figure
          className={`project-gallery__figure${index === 0 ? " project-gallery__figure--lead" : ""}`}
          key={image.src}
        >
          <Image
            alt={image.alt}
            className="project-gallery__image"
            height={image.height}
            priority={index === 0}
            quality={86}
            sizes={index === 0
              ? "(max-width: 760px) calc(100vw - 2.5rem), 92vw"
              : "(max-width: 760px) calc(100vw - 2.5rem), (max-width: 1200px) 58vw, 760px"}
            src={image.src}
            width={image.width}
          />
          {image.caption ? <figcaption className="project-gallery__caption">{image.caption}</figcaption> : null}
        </figure>
      ))}
    </section>
  );
}
