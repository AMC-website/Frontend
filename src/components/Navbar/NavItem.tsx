import { Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const linkStyles = {
    textDecoration: 'none',
    '&:hover': {
        cursor: 'pointer',
    },
    color: 'white',
};

interface NavItemProps {
    isHovered: boolean;
    title: string;
    onSomethingElse: boolean;
}

function NavItem({ isHovered, title, onSomethingElse }: NavItemProps) {
    const theme = useTheme();

    return (
        <span
            style={{
                opacity: onSomethingElse ? '0.4' : '1',
                transition: 'opacity 0.3s ease',
                position: 'relative',
            }}
        >
            <motion.span
                initial={{ width: isHovered ? 0 : '100%' }}
                animate={{ width: isHovered ? '100%' : 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    height: 1,
                    backgroundColor: theme.palette.secondary.main,
                }}
            />{' '}
            <Link
                sx={linkStyles}
                href={title.charAt(0).toLowerCase() + title.slice(1)}
            >
                <Typography variant="h3" padding="10px">
                    {title}
                </Typography>
            </Link>
        </span>
    );
}

export default NavItem;
