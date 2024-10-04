import { color, h5_, h6_, titleColor } from '@/constants';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavItemProps {
    isHovered: boolean;
    title: string;
    onSomethingElse: boolean;
    breakPoint: boolean;
}

function NavItem({
    isHovered,
    title,
    onSomethingElse,
    breakPoint,
}: NavItemProps) {
    const linkStyles = {
        textDecoration: 'none',
        '&:hover': {
            cursor: 'pointer',
        },
        color: color,
    };

    const NavbarLink = ({ page, children }) => {
        const lowerCasePage = page.toLowerCase();
        if (page === 'BLOGS') {
            return (
                <Link style={linkStyles} href={'/blogs'}>
                    {children}
                </Link>
            );
        }
        if (page === 'ADMIN') {
            return (
                <Link style={linkStyles} href={'/admin'}>
                    {children}
                </Link>
            );
        }
        if (page === 'MEMBERS') {
            return (
                <Link style={linkStyles} href={'/members'}>
                    {children}
                </Link>
            );
        }
        if (page === 'GALLERY') {
            return (
                <Link style={linkStyles} href={'/gallery'}>
                    {children}
                </Link>
            );
        } else {
            return (
                <Link style={linkStyles} href={`/#${lowerCasePage}`}>
                    {children}
                </Link>
            );
        }
    };
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
                    backgroundColor: titleColor,
                    display: breakPoint ? 'block' : 'none',
                }}
            />{' '}
            <NavbarLink page={title}>
                <Typography
                    variant="h4"
                    fontSize={breakPoint ? h6_ : h5_}
                    padding={breakPoint ? '10px 0 10px 10px' : '10px'}
                    textAlign="right"
                >
                    {title}
                </Typography>
            </NavbarLink>
        </span>
    );
}

export default NavItem;
