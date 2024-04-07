import type { Photo } from 'react-photo-album';

const photos: Photo[] = [];

for (let i = 1; i <= 41; i++) {
    const photo = {
        src: `/imageGallery/${i}.jpg`,
        height: 1000,
        width: 1400,
    };
    photos.push(photo);
}

const reducedPhotos: Photo[] = [
    {
        src: '/drone.jpg',
        height: 500,
        width: 500,
    },
    {
        src: '/drone2.jpg',
        height: 500,
        width: 500,
    },
    {
        src: '/flight1.jpg',
        height: 500,
        width: 500,
    },
    {
        src: '/flight2.jpg',
        height: 500,
        width: 500,
    },
    {
        src: '/flight1.jpg',
        height: 500,
        width: 500,
    },
    {
        src: '/flight2.jpg',
        height: 500,
        width: 500,
    },
];

export { photos, reducedPhotos };
