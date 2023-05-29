import { useTheme } from '@mui/material/styles';

interface TextProps {
    letter?: string;
    word: string;
}

export default function Text({ letter, word }: TextProps) {
    const theme = useTheme();

    return (
        <div
            style={{
                width: '100%',
            }}
        >
            <span
                style={{
                    color: `${theme.palette.secondary.main}`,
                }}
            >
                {letter !== undefined ? (
                    <>{letter.toUpperCase}</>
                ) : (
                    <>{word.charAt(0).toUpperCase()}</>
                )}
            </span>
            {word.slice(1)}
        </div>
    );
}
