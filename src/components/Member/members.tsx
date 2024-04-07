import MemberCard from '@/components/Member/MemberCard';
import { color, h4, h5 } from '@/constants';
import { Box, Typography, useMediaQuery } from '@mui/material';
import MemberData from '@/data/members';

export default function Members() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:750px)');

    return (
        <Box width="85%" marginX="auto">
            <Typography
                variant="h2"
                fontSize={breakPoint ? h4 : h5}
                mb="35px"
                color={color}
            >
                Members
            </Typography>
            <Box
                display="grid"
                gap="35px"
                gridTemplateColumns={
                    breakPoint2 ? '30% 30% 30%' : breakPoint ? '45% 45%' : '80%'
                }
                justifyContent={breakPoint ? 'space-between' : 'center'}
            >
                {MemberData.map((member, index) => (
                    <MemberCard
                        key={index}
                        memberName={member.memberName}
                        memberRole={member.memberRole}
                        memberDescription={member.memberQuote}
                        memberThumbnail={`members/${member.memberName.toLowerCase()}.jpg`}
                    />
                ))}
            </Box>
        </Box>
    );
}
