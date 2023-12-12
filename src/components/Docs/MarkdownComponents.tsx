import React from 'react'
import { Box } from '@mui/material'

/* Components for Markdown pages should be defined here
 * Use MUI for styling
 * All components should be in the same format as the given sample below 
 */


export const MarkdownComponents = ({ children, ...props }) => {

  // This is a sample component for Markdown elements
  return (
    <Box
      {...props}

    >
      {children}
    </Box>
  )
}

