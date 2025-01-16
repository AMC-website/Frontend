// import MemberCard from '@/components/Member/MemberCard';
// import { color, h4, h5 } from '@/constants';
// import { Box, Typography, useMediaQuery } from '@mui/material';
// import MemberData from '@/data/members';

// export default function Members() {
//     const breakPoint = useMediaQuery('(min-width:600px)');
//     const breakPoint2 = useMediaQuery('(min-width:750px)');

//     return (
//         <Box width="85%" marginX="auto">
//             <Typography
//                 variant="h2"
//                 fontSize={breakPoint ? h4 : h5}
//                 mb="35px"
//                 color={color}
//             >
//                 Members
//             </Typography>
//             <Box
//                 display="grid"
//                 gap="35px"
//                 gridTemplateColumns={
//                     breakPoint2 ? '30% 30% 30%' : breakPoint ? '45% 45%' : '80%'
//                 }
//                 justifyContent={breakPoint ? 'space-between' : 'center'}
//             >
//                 {MemberData.map((member, index) => (
//                     <MemberCard
//                         key={index}
//                         memberName={member.memberName}
//                         memberRole={member.memberRole}
//                         memberDescription={member.memberQuote}
//                         memberThumbnail={`members/${member.memberName.toLowerCase()}.jpg`}
//                     />
//                 ))}
//             </Box>
//         </Box>
//     );
// }
// src/pages/members.tsx

import MemberCard from '@/components/Member/MemberCard';
import { color, h4, h5 } from '@/constants';
import { Box, Typography, useMediaQuery, Button, Modal, TextField } from '@mui/material';
import MemberData from '@/data/members';
import { useState } from 'react';

export default function Members() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:750px)');
    const [members, setMembers] = useState(MemberData);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newMember, setNewMember] = useState({
        name: '',
        role: '',
        thumbnail: '',
        description: ''
    });

    function handleDelete(index: number) {
        setMembers(members.filter((_, i) => i !== index));
    }

    function handleEdit(index: number, updatedMember: Partial<MemberCardProps>) {
        const updatedMembers = [...members];
        updatedMembers[index] = { ...updatedMembers[index], ...updatedMember };
        setMembers(updatedMembers);
    }

    function handleAddMember() {
        setMembers([
            ...members,
            {
                memberName: newMember.name,
                memberRole: newMember.role,
                memberThumbnail: newMember.thumbnail,
                memberQuote: newMember.description
            }
        ]);
        setIsAddModalOpen(false);
        setNewMember({ name: '', role: '', thumbnail: '', description: '' });
    }

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

            {/* Add Member Button */}
            <Button
                variant="contained"
                color="primary"
                onClick={() => setIsAddModalOpen(true)}
                sx={{ mb: 3 }}
            >
                Add Member
            </Button>

            <Box
                display="grid"
                gap="35px"
                gridTemplateColumns={
                    breakPoint2 ? '30% 30% 30%' : breakPoint ? '45% 45%' : '80%'
                }
                justifyContent={breakPoint ? 'space-between' : 'center'}
            >
                {members.map((member, index) => (
                    <MemberCard
                        key={index}
                        memberName={member.memberName}
                        memberRole={member.memberRole}
                        memberDescription={member.memberQuote}
                        memberThumbnail={`members/${member.memberName.toLowerCase()}.jpg`}
                        onDelete={() => handleDelete(index)}
                        onEdit={(updatedMember) => handleEdit(index, updatedMember)}
                    />
                ))}
            </Box>

            {/* Add Member Modal */}
            <Modal open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        p: 4,
                        borderRadius: 2,
                        boxShadow: 24,
                    }}
                >
                    <Typography variant="h6" mb={2}>
                        Add New Member
                    </Typography>
                    <TextField
                        fullWidth
                        label="Name"
                        value={newMember.name}
                        onChange={(e) =>
                            setNewMember((prev) => ({ ...prev, name: e.target.value }))
                        }
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Role"
                        value={newMember.role}
                        onChange={(e) =>
                            setNewMember((prev) => ({ ...prev, role: e.target.value }))
                        }
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Thumbnail URL"
                        value={newMember.thumbnail}
                        onChange={(e) =>
                            setNewMember((prev) => ({ ...prev, thumbnail: e.target.value }))
                        }
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        value={newMember.description}
                        onChange={(e) =>
                            setNewMember((prev) => ({ ...prev, description: e.target.value }))
                        }
                        margin="normal"
                    />
                    <Box mt={2} display="flex" justifyContent="space-between">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAddMember}
                        >
                            Add
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => setIsAddModalOpen(false)}
                        >
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
