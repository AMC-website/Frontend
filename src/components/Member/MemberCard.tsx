// import { color, h2_, h4, h6, h6_, titleColor } from '@/constants';
// import { Backdrop, Box, Typography, useMediaQuery } from '@mui/material';
// import { useState } from 'react';

// interface MemberCardProps {
//     memberName: string;
//     memberRole: string;
//     memberThumbnail: string;
//     memberDescription: string;
//     key: number;
// }

// const MemberCard = ({
//     memberName,
//     memberRole,
//     memberThumbnail,
//     memberDescription,
// }: MemberCardProps) => {
//     const breakPoint = useMediaQuery('(min-width:600px)');
//     const [isClicked, setIsClicked] = useState(false);
//     const [mouseOver, setMouseOver] = useState(false);

//     function handleClick() {
//         setIsClicked(!isClicked);
//     }

//     return (
//         <>
//             <Box
//                 display="flex"
//                 width="auto"
//                 minHeight="91px"
//                 sx={{
//                     borderStyle: 'solid',
//                     borderColor: mouseOver ? titleColor : color,
//                     borderWidth: '0.5px',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                     transition: 'border-color 0.3s',
//                 }}
//                 alignItems="center"
//                 justifyContent="space-evenly"
//                 onClick={handleClick}
//                 onMouseEnter={() => setMouseOver(true)}
//                 onMouseLeave={() => setMouseOver(false)}
//             >
//                 <Backdrop
//                     sx={{
//                         color: '#fff',
//                         zIndex: (theme) => theme.zIndex.drawer + 2,
//                         backgroundColor: 'black',
//                         display: 'flex',
//                         fontSize: '30px',
//                         padding: '20px',
//                         flexDirection: breakPoint ? 'row' : 'column',
//                         gap: '20px',
//                     }}
//                     className="closeIconCursor"
//                     open={isClicked}
//                 >
//                     <Box
//                         height={breakPoint ? '100%' : '55%'}
//                         width={breakPoint ? '55%' : '100%'}
//                         display="flex"
//                         justifyContent="center"
//                         alignItems="center"
//                     >
//                         <Box width="70%" height="auto">
//                             <Typography
//                                 variant="h1"
//                                 fontSize={breakPoint ? h2_ : h4}
//                                 fontWeight="bolder"
//                                 color={titleColor}
//                                 mb="25px"
//                                 position="relative"
//                             >
//                                 {memberName}
//                             </Typography>

//                             <Typography
//                                 variant="h3"
//                                 fontSize={breakPoint ? h6 : h6_}
//                                 mb="25px"
//                                 fontStyle="italic"
//                                 color={color}
//                             >
//                                 {memberRole}
//                             </Typography>

//                             <Typography
//                                 variant="h3"
//                                 fontSize={breakPoint ? h6 : h6_}
//                                 lineHeight={1.5}
//                                 color={color}
//                                 mb="25px"
//                             >
//                                 {memberDescription}
//                             </Typography>
//                         </Box>
//                     </Box>
//                     <Box
//                         height={breakPoint ? '100%' : '45%'}
//                         width={breakPoint ? '45%' : '100%'}
//                     >
//                         <img
//                             src={memberThumbnail}
//                             alt="drone image"
//                             style={{
//                                 objectFit: 'cover',
//                                 height: '100%',
//                                 width: '100%',
//                                 borderRadius: '10px',
//                             }}
//                         />
//                     </Box>
//                 </Backdrop>
//                 <Typography fontSize={breakPoint ? h6 : h6_} color={color}>
//                     {memberName}
//                 </Typography>
//                 <Typography
//                     variant="h4"
//                     fontSize={breakPoint ? h6 : h6_}
//                     fontStyle="italic"
//                     color={titleColor}
//                 >
//                     {memberRole}
//                 </Typography>
//             </Box>
//         </>
//     );
// };

// export default MemberCard;

import { color, h2_, h4, h6, h6_, titleColor } from '@/constants';
import { Backdrop, Box, Typography, Button, Modal, TextField, useMediaQuery } from '@mui/material';
import { useState } from 'react';

interface MemberCardProps {
    memberName: string;
    memberRole: string;
    memberThumbnail: string;
    memberDescription: string;
    key: number;
    onDelete: () => void;
    onEdit: (updatedMember: Partial<MemberCardProps>) => void;
}

const MemberCard = ({
    memberName,
    memberRole,
    memberThumbnail,
    memberDescription,
    onDelete,
    onEdit,
}: MemberCardProps) => {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const [isClicked, setIsClicked] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editedMember, setEditedMember] = useState({
        name: memberName,
        role: memberRole,
        thumbnail: memberThumbnail,
        description: memberDescription,
    });

    function handleClick() {
        setIsClicked(!isClicked);
    }

    function handleEditSave() {
        onEdit({
            memberName: editedMember.name,
            memberRole: editedMember.role,
            memberThumbnail: editedMember.thumbnail,
            memberDescription: editedMember.description,
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
                    className="closeIconCursor"
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
                                {memberName}
                            </Typography>

                            <Typography
                                variant="h3"
                                fontSize={breakPoint ? h6 : h6_}
                                mb="25px"
                                fontStyle="italic"
                                color={color}
                            >
                                {memberRole}
                            </Typography>

                            <Typography
                                variant="h3"
                                fontSize={breakPoint ? h6 : h6_}
                                lineHeight={1.5}
                                color={color}
                                mb="25px"
                            >
                                {memberDescription}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        height={breakPoint ? '100%' : '45%'}
                        width={breakPoint ? '45%' : '100%'}
                    >
                        <img
                            src={memberThumbnail}
                            alt="drone image"
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
                    {memberName}
                </Typography>
                <Typography
                    variant="h4"
                    fontSize={breakPoint ? h6 : h6_}
                    fontStyle="italic"
                    color={titleColor}
                >
                    {memberRole}
                </Typography>

                {/* Edit and Delete buttons placed at the bottom */}
                <Box
                    display="flex"
                    justifyContent="space-evenly"
                    width="100%"
                    mt="auto"
                    p={1}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setIsEditModalOpen(true)}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={onDelete}
                    >
                        Delete
                    </Button>
                </Box>
            </Box>

            {/* Edit Modal */}
            <Modal open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
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
                        Edit Member
                    </Typography>
                    <TextField
                        fullWidth
                        label="Name"
                        value={editedMember.name}
                        onChange={(e) =>
                            setEditedMember((prev) => ({ ...prev, name: e.target.value }))
                        }
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Role"
                        value={editedMember.role}
                        onChange={(e) =>
                            setEditedMember((prev) => ({ ...prev, role: e.target.value }))
                        }
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Thumbnail URL"
                        value={editedMember.thumbnail}
                        onChange={(e) =>
                            setEditedMember((prev) => ({ ...prev, thumbnail: e.target.value }))
                        }
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        value={editedMember.description}
                        onChange={(e) =>
                            setEditedMember((prev) => ({ ...prev, description: e.target.value }))
                        }
                        margin="normal"
                    />
                    <Box mt={2} display="flex" justifyContent="space-between">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleEditSave}
                        >
                            Save
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => setIsEditModalOpen(false)}
                        >
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default MemberCard;



// import { color, h2_, h4, h6, h6_, titleColor } from '@/constants';
// import { Backdrop, Box, Typography, Button, TextField, useMediaQuery } from '@mui/material';
// import { useState } from 'react';

// interface MemberCardProps {
//     memberName: string;
//     memberRole: string;
//     memberThumbnail: string;
//     memberDescription: string;
//     key: number;
//     onEdit: (updatedMember: any) => void;
//     onDelete: () => void;
// }

// const MemberCard = ({
//     memberName,
//     memberRole,
//     memberThumbnail,
//     memberDescription,
//     onEdit,
//     onDelete,
// }: MemberCardProps) => {
//     const breakPoint = useMediaQuery('(min-width:600px)');
//     const [isClicked, setIsClicked] = useState(false);
//     const [mouseOver, setMouseOver] = useState(false);
//     const [isEditing, setIsEditing] = useState(false);
//     const [editData, setEditData] = useState({
//         memberName,
//         memberRole,
//         memberThumbnail,
//         memberDescription,
//     });

//     const handleClick = () => {
//         setIsClicked(!isClicked);
//     };

//     const handleEditClick = () => {
//         setIsEditing(true);
//     };

//     const handleSaveClick = () => {
//         onEdit(editData);  // Update the member details
//         setIsEditing(false);
//     };

//     const handleCancelClick = () => {
//         setEditData({
//             memberName,
//             memberRole,
//             memberThumbnail,
//             memberDescription,
//         });
//         setIsEditing(false);
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setEditData({
//             ...editData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     return (
//         <>
//             <Box
//                 display="flex"
//                 width="auto"
//                 minHeight="91px"
//                 sx={{
//                     borderStyle: 'solid',
//                     borderColor: mouseOver ? titleColor : color,
//                     borderWidth: '0.5px',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                     transition: 'border-color 0.3s',
//                 }}
//                 alignItems="center"
//                 justifyContent="space-evenly"
//                 onClick={handleClick}
//                 onMouseEnter={() => setMouseOver(true)}
//                 onMouseLeave={() => setMouseOver(false)}
//             >
//                 <Box display="flex" flexDirection="column" alignItems="center" gap="8px">
//                     <Typography fontSize={breakPoint ? h6 : h6_} color={color}>
//                         {memberName}
//                     </Typography>
//                     <Typography
//                         variant="h4"
//                         fontSize={breakPoint ? h6 : h6_}
//                         fontStyle="italic"
//                         color={titleColor}
//                     >
//                         {memberRole}
//                     </Typography>
//                     <Box display="flex" gap="16px">
//                         <Button
//                             onClick={handleEditClick}
//                             variant="outlined"
//                             color="primary"
//                             sx={{
//                                 color: 'white',
//                                 borderColor: 'white',
//                             }}
//                         >
//                             Edit
//                         </Button>
//                         <Button onClick={onDelete} variant="outlined" color="secondary">
//                             Delete
//                         </Button>
//                     </Box>
//                 </Box>
//                 <img
//                     src={memberThumbnail}
//                     alt="drone image"
//                     style={{
//                         objectFit: 'cover',
//                         height: '100%',
//                         width: '100%',
//                         borderRadius: '10px',
//                     }}
//                 />
//             </Box>

//             {/* Editable Form Overlay */}
//             {isEditing && (
//                 <Backdrop
//                     open={isEditing}
//                     sx={{
//                         color: '#fff',
//                         zIndex: (theme) => theme.zIndex.drawer + 2,
//                         backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Blurred background
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Box
//                         display="flex"
//                         flexDirection="column"
//                         alignItems="center"
//                         gap="20px"
//                         sx={{
//                             backgroundColor: 'white',  // White background for the form
//                             padding: '20px',
//                             borderRadius: '10px',
//                             boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
//                             maxWidth: '400px',
//                             width: '100%',
//                         }}
//                     >
//                         <Typography variant="h4" color="black" fontWeight="bold">
//                             Edit Member Information
//                         </Typography>

//                         <TextField
//                             name="memberName"
//                             label="Name"
//                             value={editData.memberName}
//                             onChange={handleInputChange}
//                             fullWidth
//                             sx={{
//                                 input: { color: 'black' },
//                                 label: { color: 'black' },
//                                 fieldset: { borderColor: 'black' },
//                             }}
//                         />
//                         <TextField
//                             name="memberRole"
//                             label="Role"
//                             value={editData.memberRole}
//                             onChange={handleInputChange}
//                             fullWidth
//                             sx={{
//                                 input: { color: 'black' },
//                                 label: { color: 'black' },
//                                 fieldset: { borderColor: 'black' },
//                             }}
//                         />
//                         <TextField
//                             name="memberThumbnail"
//                             label="Thumbnail URL"
//                             value={editData.memberThumbnail}
//                             onChange={handleInputChange}
//                             fullWidth
//                             sx={{
//                                 input: { color: 'black' },
//                                 label: { color: 'black' },
//                                 fieldset: { borderColor: 'black' },
//                             }}
//                         />
//                         <TextField
//                             name="memberDescription"
//                             label="Description"
//                             value={editData.memberDescription}
//                             onChange={handleInputChange}
//                             multiline
//                             rows={4}
//                             fullWidth
//                             sx={{
//                                 input: { color: 'black' },
//                                 label: { color: 'black' },
//                                 fieldset: { borderColor: 'black' },
//                             }}
//                         />

//                         <Box display="flex" gap="16px">
//                             <Button
//                                 onClick={handleSaveClick}
//                                 variant="contained"
//                                 color="primary"
//                                 sx={{
//                                     color: 'white', // White text color for button
//                                 }}
//                             >
//                                 Save
//                             </Button>
//                             <Button
//                                 onClick={handleCancelClick}
//                                 variant="outlined"
//                                 color="secondary"
//                                 sx={{
//                                     color: 'black', // Black text color for cancel
//                                     borderColor: 'black',
//                                 }}
//                             >
//                                 Cancel
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Backdrop>
//             )}
//         </>
//     );
// };

// export default MemberCard;





