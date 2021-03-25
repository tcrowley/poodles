import { PictureInfo } from 'models/picture.model';
import React, { useEffect, useRef } from 'react';
import GalleryImage from './GalleryImage';

function Gallery({ pictures = [] }: { pictures: PictureInfo[] | undefined }) {
  const gallery = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(function(entries, self) {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          (entry.target as HTMLImageElement).src = (entry.target as HTMLImageElement).dataset.src!;
          self.unobserve(entry.target);
        }
      });
    });

    gallery.current?.querySelectorAll('[data-src]').forEach(img => {
      observer.observe(img);
    });
  }, []);

  return (
    <>
      <div className="app-gallery show-placeholder" ref={gallery}>
        { pictures.map((pic: PictureInfo) => <GalleryImage pic={pic} key={pic.id} />)}
      </div>
    </>
  );
}

export default Gallery;
