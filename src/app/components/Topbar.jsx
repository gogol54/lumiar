'use client'

import Link from 'next/link'
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
} from '@mui/material'

export default function Topbar(){
 return (
  <AppBar
    position="sticky"
    elevation={0}
    sx={{
      bgcolor:'#fff',
      borderBottom:'1px solid #e7efe7'
    }}
  >
    <Toolbar
      sx={{
        maxWidth:1200,
        width:'100%',
        mx:'auto',
        justifyContent:'space-between'
      }}
    >
      <Typography
        fontWeight={700}
        color="#246044"
      >
        Cultura e Processos
      </Typography>

      <Box sx={{display:'flex', gap:1.5}}>
        <Button href="#cultura">Cultura</Button>
        <Button href="#etapas">Etapas</Button>
        <Button href="#investimento">Investimento</Button>

        <Link href="/denuncia">
          <Button
            variant="contained"
            sx={{
              background:'#86d464',
              color:'#246044',
              fontWeight:700,
              ml:1,
              '&:hover':{
                background:'#76c355'
              }
            }}
          >
            Ouvidoria
          </Button>
        </Link>
      </Box>

    </Toolbar>
  </AppBar>
 )
}