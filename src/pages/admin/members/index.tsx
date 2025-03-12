import { useState } from 'react';
import { Box, Typography, useMediaQuery, Button, Modal, TextField } from '@mui/material';
import { color, h4, h5 } from '@/constants';
import MemberData, { MemberDatatype } from '@/data/members';
import AdminMemberCard from '@/components/Admin/AdminMemberCard';

export default function Members() {
  const breakPoint = useMediaQuery('(min-width:600px)');
  const breakPoint2 = useMediaQuery('(min-width:750px)');

  const [members, setMembers] = useState<MemberDatatype[]>(MemberData);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    memberName: '',
    memberRole: '',
    memberImage: '',
    memberQuote: ''
  });

  function handleDelete(index: number) {
    setMembers(members.filter((_, i) => i !== index));
  }

  function handleEdit(index: number, updatedMember: Partial<MemberDatatype>) {
    setMembers((prevMembers) =>
      prevMembers.map((member, i) =>
        i === index ? { ...member, ...updatedMember } : member
      )
    );
  }

  function handleAddMember() {
    setMembers((prevMembers) => [
      ...prevMembers,
      {
        memberName: newMember.memberName,
        memberRole: newMember.memberRole,
        memberImage: newMember.memberImage,
        memberQuote: newMember.memberQuote
      }
    ]);
    setIsAddModalOpen(false);
    setNewMember({ memberName: '', memberRole: '', memberImage: '', memberQuote: '' });
  }

  return (
    <Box sx={{ backgroundColor: 'black', minHeight: '100vh', py: 4, px: 2 }}>
      <Box width="85%" marginX="auto">
        <Typography variant="h2" fontSize={breakPoint ? h4 : h5} mb="35px" color="white">
          Admin Members
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
            <AdminMemberCard
              key={index}
              adminName={member.memberName}
              adminRole={member.memberRole}
              adminDescription={member.memberQuote}
              adminThumbnail={member.memberImage ? `members/${member.memberImage}.jpg` : ''}
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
              bgcolor: 'white',
              color: 'black',
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
              value={newMember.memberName}
              onChange={(e) =>
                setNewMember((prev) => ({ ...prev, memberName: e.target.value }))
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label="Role"
              value={newMember.memberRole}
              onChange={(e) =>
                setNewMember((prev) => ({ ...prev, memberRole: e.target.value }))
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label="Image Name"
              value={newMember.memberImage}
              onChange={(e) =>
                setNewMember((prev) => ({ ...prev, memberImage: e.target.value }))
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label="Quote"
              value={newMember.memberQuote}
              onChange={(e) =>
                setNewMember((prev) => ({ ...prev, memberQuote: e.target.value }))
              }
              margin="normal"
            />
            <Box mt={2} display="flex" justifyContent="space-between">
              <Button variant="contained" color="primary" onClick={handleAddMember}>
                Add
              </Button>
              <Button variant="outlined" onClick={() => setIsAddModalOpen(false)}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
