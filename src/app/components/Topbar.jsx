"use client";

import { useState } from "react";
import Link from "next/link";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  Stack,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export default function Topbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Cultura", href: "#cultura" },
    { label: "Etapas", href: "#etapas" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#fff",
          borderBottom: "1px solid #e7efe7",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={700} color="#246044">
            Cultura e Processos
          </Typography>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 1.5,
            }}
          >
            {menuItems.map((item) => (
              <Button key={item.label} href={item.href}>
                {item.label}
              </Button>
            ))}

            <Link href="/denuncia">
              <Button
                variant="contained"
                sx={{
                  background: "#86d464",
                  color: "#246044",
                  fontWeight: 700,
                  ml: 1,
                }}
              >
                Ouvidoria
              </Button>
            </Link>
          </Box>

          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 4 }}>
          <Stack spacing={2}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Button>
            ))}

            <Link href="/denuncia">
              <Button
                fullWidth
                variant="contained"
                sx={{
                  background: "#86d464",
                  color: "#246044",
                }}
              >
                Ouvidoria
              </Button>
            </Link>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
