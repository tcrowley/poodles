import React from 'react';
import { PictureInfo } from 'models/picture.model';
import GalleryImage from './GalleryImage';

function Gallery({ pictures }: { pictures: PictureInfo[] | undefined }) {
  return (
    <div className="app-gallery show-placeholder">
      { pictures?.map((pic: PictureInfo, index) => <GalleryImage pic={pic} key={index} /> ) }
    </div>
  );
}

export default Gallery;
