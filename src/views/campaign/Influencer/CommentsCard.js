import React from 'react'
import {  Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from '@mui/material/Avatar';


export default function CommentsCard({comment}) {
  return (
    <Card sx={{padding:"10px", marginY:"10px"}}>
    <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", marginBottom:"10px"}}>
    <Avatar alt="Remy Sharp" sx={{ width: 26, height: 26, marginRight:"10px" }} src="https://images.unsplash.com/photo-1629114695419-9cd72ac2e32c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Typography sx={{fontSize:16, fontWeight:"bold"}}>
        User Name
      </Typography>
    </Box>
    <Typography sx={{fontSize:14}}>
      {comment}
    </Typography>
  </Card>
  )
}
