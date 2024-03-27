import MemberCard from '@/components/Member/MemberCard';
import { color, h4, h5 } from '@/constants';
import { Box, Typography, useMediaQuery } from '@mui/material';

interface MemberData {
    memberName: string;
    memberRole: string;
    memberQuote: string;
}

//TODO: Decouple code and data
const MemberData: MemberData[] = [
    {
        memberName: 'Devyan Mishra',
        memberRole: 'Secretary',
        memberQuote: 'Leading with integrity.',
    },
    {
        memberName: 'Aryan Kumar',
        memberRole: 'Joint Secretary',
        memberQuote: 'Bringing innovation to the table.',
    },
    {
        memberName: 'Harsh Kumar Panchal',
        memberRole: 'Joint Secretary',
        memberQuote: 'Teamwork makes the dream work.',
    },
    {
        memberName: 'Varad Kharade',
        memberRole: 'Design & Creative Head',
        memberQuote: 'Inspiration in every pixel.',
    },
    {
        memberName: 'M Viswanath Sai',
        memberRole: 'Tech Head',
        memberQuote: 'Coding with passion.',
    },
    {
        memberName: 'Hari Sudarshan',
        memberRole: 'Tech Head',
        memberQuote: 'Empowering through technology.',
    },
];

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
                        memberThumbnail="flight1.jpg"
                    />
                ))}
            </Box>
        </Box>
    );
}

// <Box
//     sx={{
//         '& .MuiStack-root': {
//             backgroundColor: 'transparent',
//             padding: '0px',
//         },
//     }}
// >
//     <Box>
//         <Typography
//             height="40vh"
//             variant="h1"
//             bgcolor="black"
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             textAlign="center"
//             color={theme.palette.secondary.main}
//         >
//             Members
//         </Typography>
//     </Box>

//     <Stack
//         direction={'column'}
//         divider={<Divider orientation="horizontal" flexItem></Divider>}
//         bgcolor="#F0E4DC"
//         sx={{
//             '& .MuiStack-root': {
//                 backgroundColor: 'transparent',
//                 padding: '0px',
//             },
//         }}
//     >
//         {membersData.map((member, index) => (
//             <MemberCard
//                 key={index}
//                 name={member.name}
//                 role={member.role}
//                 image={member.profileImage}
//             ></MemberCard>
//         ))}
//     </Stack>
// </Box>
