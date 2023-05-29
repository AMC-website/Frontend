import { Box, Stack, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import MemberCard from '@/components/MembersPage/MembersCard';

const membersData = [
    {
        id: 1,
        name: 'John Doe',
        profileImage: 'johnDoe.jpg',
        role: 'Designer',
    },
    {
        id: 2,
        name: 'Jane Smith',
        profileImage: 'janeSmith.jpg',
        role: 'Developer',
    },
    {
        id: 3,
        name: 'John Doe',
        profileImage: 'johnDoe.jpg',
        role: 'Designer',
    },
    {
        id: 4,
        name: 'Jane Smith',
        profileImage: 'janeSmith.jpg',
        role: 'Developer',
    },
];

export default function Members() {
    const theme = useTheme();

    return (
        <Box>
            <Box>
                <Typography
                    height="40vh"
                    variant="h1"
                    bgcolor="black"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    color={theme.palette.secondary.main}
                >
                    Members
                </Typography>
            </Box>

            <Stack
                direction={'column'}
                divider={<Divider orientation="horizontal" flexItem></Divider>}
                paddingBottom="100px"
                sx={{
                    backgroundColor: 'white',
                    paddingTop: '90px',
                }}
            >
                {membersData.map((member, index) => (
                    <MemberCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        image={member.profileImage}
                    ></MemberCard>
                ))}
            </Stack>
        </Box>
    );
}
