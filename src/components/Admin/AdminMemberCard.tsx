import { color, h2_, h4, h6, h6_, titleColor } from '@/constants';
import { Backdrop, Box, Typography, Button, Modal, TextField, useMediaQuery } from '@mui/material';
import { useState } from 'react';

interface AdminMemberCardProps {
  adminName: string;
  adminRole: string;
  adminThumbnail: string;
  adminDescription: string;
  key: number;
  onDelete: () => void;
  onEdit: (updatedAdmin: Partial<AdminMemberCardProps>) => void;
}

const AdminMemberCard = ({
  adminName,
  adminRole,
  adminThumbnail,
  adminDescription,
  onDelete,
  onEdit,
}: AdminMemberCardProps) => {
  const breakPoint = useMediaQuery('(min-width:600px)');
  const [isClicked, setIsClicked] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedAdmin, setEditedAdmin] = useState({
    name: adminName,
    role: adminRole,
    thumbnail: adminThumbnail,
    description: adminDescription,
  });

  function handleClick() {
    setIsClicked(!isClicked);
  }

  function handleEditSave() {
    onEdit({
      adminName: editedAdmin.name,
      adminRole: editedAdmin.role,
      adminThumbnail: editedAdmin.thumbnail,
      adminDescription: editedAdmin.description,
    });
    setIsEditModalOpen(false);
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        width="auto"
        minHeight="91px"
        sx={{
          borderStyle: 'solid',
          borderColor: mouseOver ? titleColor : color,
          borderWidth: '0.5px',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'border-color 0.3s',
        }}
        alignItems="center"
        justifyContent="space-evenly"
        onClick={handleClick}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <Backdrop
          sx={{
            color: '#fff',
            zIndex: (theme) => theme.zIndex.drawer + 2,
            backgroundColor: 'black',
            display: 'flex',
            fontSize: '30px',
            padding: '20px',
            flexDirection: breakPoint ? 'row' : 'column',
            gap: '20px',
          }}
          open={isClicked}
        >
          <Box
            height={breakPoint ? '100%' : '55%'}
            width={breakPoint ? '55%' : '100%'}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="70%" height="auto">
              <Typography
                variant="h1"
                fontSize={breakPoint ? h2_ : h4}
                fontWeight="bolder"
                color={titleColor}
                mb="25px"
                position="relative"
              >
                {adminName}
              </Typography>

              <Typography
                variant="h3"
                fontSize={breakPoint ? h6 : h6_}
                mb="25px"
                fontStyle="italic"
                color={color}
              >
                {adminRole}
              </Typography>

              <Typography
                variant="h3"
                fontSize={breakPoint ? h6 : h6_}
                lineHeight={1.5}
                color={color}
                mb="25px"
              >
                {adminDescription}
              </Typography>
            </Box>
          </Box>
          <Box
            height={breakPoint ? '100%' : '45%'}
            width={breakPoint ? '45%' : '100%'}
          >
            <img
              src={adminThumbnail}
              alt="admin image"
              style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
                borderRadius: '10px',
              }}
            />
          </Box>
        </Backdrop>
        <Typography fontSize={breakPoint ? h6 : h6_} color={color}>
          {adminName}
        </Typography>
        <Typography
          variant="h4"
          fontSize={breakPoint ? h6 : h6_}
          fontStyle="italic"
          color={titleColor}
        >
          {adminRole}
        </Typography>

        {/* Admin-only Edit and Delete buttons */}
        <Box display="flex" justifyContent="space-evenly" width="100%" mt="auto" p={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsEditModalOpen(true)}
          >
            Edit
          </Button>
          <Button variant="outlined" color="secondary" onClick={onDelete}>
            Delete
          </Button>
        </Box>
      </Box>

      {/* Edit Modal with white background */}
      <Modal open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
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
            Edit Admin
          </Typography>
          <TextField
            fullWidth
            label="Name"
            value={editedAdmin.name}
            onChange={(e) =>
              setEditedAdmin((prev) => ({ ...prev, name: e.target.value }))
            }
            margin="normal"
          />
          <TextField
            fullWidth
            label="Role"
            value={editedAdmin.role}
            onChange={(e) =>
              setEditedAdmin((prev) => ({ ...prev, role: e.target.value }))
            }
            margin="normal"
          />
          <TextField
            fullWidth
            label="Thumbnail URL"
            value={editedAdmin.thumbnail}
            onChange={(e) =>
              setEditedAdmin((prev) => ({ ...prev, thumbnail: e.target.value }))
            }
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            value={editedAdmin.description}
            onChange={(e) =>
              setEditedAdmin((prev) => ({ ...prev, description: e.target.value }))
            }
            margin="normal"
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" onClick={handleEditSave}>
              Save
            </Button>
            <Button variant="outlined" onClick={() => setIsEditModalOpen(false)}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AdminMemberCard;
