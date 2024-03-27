import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Box } from '@mui/material';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Images from '@/data/imagegallery';

export default function Gallery() {
    return (
        <Box>
            <Box>
                <LiteYouTubeEmbed
                    id="L2vS_050c-M"
                    title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                ></LiteYouTubeEmbed>
            </Box>
            <ImageGallery items={Images} />
        </Box>
    );
}
