import { Box, Typography } from '@mui/material';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { PhotoAlbum } from 'react-photo-album';
import { photos } from '@/data/photos';
import { bgColor, color, h4, h5 } from '@/constants';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function Gallery() {
    const breakPoint = useMediaQuery('(min-width:600px)');
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
            <Box
                color="white"
                display="flex"
                flexDirection="column"
                textAlign="center"
                marginBottom="6rem"
            >
                <div>
                    <Typography
                        variant="h1"
                        fontSize={breakPoint ? h4 : h5}
                        color={color}
                        textAlign="left"
                        mb="35px"
                    >
                        Photo Album{' '}
                    </Typography>
                </div>
                <PhotoAlbum
                    layout="columns"
                    columns={3}
                    photos={photos}
                    padding={5}
                />
            </Box>
        </Box>
    );
}
