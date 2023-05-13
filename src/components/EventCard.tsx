import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styles from '@/styles/events.module.css';

export default function EventCard() {
    const theme = useTheme();
    return (
        <Box>
            <div className={styles.card}>
                <img src="/image.jpg" className={styles.card_img}></img>
                <div className={styles.cardItems}>
                    <Typography
                        variant="h3"
                        padding="20px 0"
                        fontSize="30px"
                        textAlign="center"
                    >
                        Title
                    </Typography>
                    <p className={styles.card_content}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </Box>
    );
}
