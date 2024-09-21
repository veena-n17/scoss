export interface GalleryUnit {
    title: string;
    images: GalleryImage[];
}

export interface GalleryImage {
    src: string;
    alt: string;
}