import 'react-image-gallery/styles/css/image-gallery.css';
import { Box } from '@mui/material';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { PhotoAlbum } from 'react-photo-album';
import { photos } from '@/data/photos';
import { bgColor } from '@/constants';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Gallery() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:1000px)');
    return (
        <Box bgcolor={bgColor} padding="0 7.5% 100px">
            <Box
                padding="100px 10px"
                margin="0 auto"
                width={breakPoint ? '50%' : '90%'}
            >
                <LiteYouTubeEmbed
                    id="L2vS_050c-M"
                    title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                ></LiteYouTubeEmbed>
            </Box>
            {/* <ImageGallery items={Images} /> */}
            <PhotoAlbum layout="columns" photos={photos} padding={5} />
        </Box>
    );
}
