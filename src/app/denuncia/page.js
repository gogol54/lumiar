"use client";

import { useState } from "react";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import Image from "next/image";

export default function FormReport() {
  const [formData, setFormData] = useState({
    tipo: "",
    dataOcorrido: "",
    local: "",
    nome: "",
    email: "",
    empresa: "",
    setor: "",
    retorno: "sim",
    whatsapp: "",
    descricao: "",
    identificada: "sim",
    consentimento: false,
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload = new FormData();

      Object.entries(formData).forEach(([key, val]) => {
        payload.append(key, val);
      });

      if (file) {
        payload.append("arquivo", file);
      }

      const res = await fetch("/api/ouvidoria", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) {
        throw new Error("Falha ao enviar");
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#fff",
        py: { xs: 4, md: 7 },
      }}
    >
      <Container maxWidth="md">
        <Box>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f5e9db",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <Image
              src="/lumiar.png"
              alt="Ouvidoria"
              width={160}
              height={160}
              loading="eager"
            />
          </div>

          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              color: "#246044",
            }}
          >
            Canal de Ética e Ouvidoria
          </Typography>

          <Typography
            sx={{
              maxWidth: 620,
              mx: "auto",
              color: "#5f7165",
              lineHeight: 1.7,
            }}
          >
            Relate situações com segurança e confidencialidade.
          </Typography>
        </Box>

        <Alert
          severity="success"
          sx={{
            mb: 4,
            mt: 3,
            borderRadius: 3,
            background: "#eef8e8",
          }}
        >
          Você pode registrar sua manifestação com identificação.
        </Alert>

        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Manifestação enviada com sucesso.
          </Alert>
        )}

        <Stack spacing={3}>
          <Card
            sx={{
              borderRadius: 4,
              boxShadow: "none",
              border: "1px solid #e7efe7",
            }}
          >
            <CardContent sx={{ p: 3.5 }}>
              <Typography variant="h6" fontWeight={600} mb={2.5}>
                Natureza da denúncia
              </Typography>

              <Stack spacing={2.2}>
                <TextField
                  select
                  size="small"
                  fullWidth
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  label="Tipo de denúncia"
                >
                  <MenuItem value="moral">Assédio Moral</MenuItem>

                  <MenuItem value="discriminacao">Discriminação</MenuItem>

                  <MenuItem value="fraude">Fraude</MenuItem>

                  <MenuItem value="outros">Outros</MenuItem>
                </TextField>

                <Box>
                  <Typography fontSize={14} mb={1} color="#5f7165">
                    Data do ocorrido
                  </Typography>

                  <TextField
                    size="small"
                    fullWidth
                    type="date"
                    name="dataOcorrido"
                    value={formData.dataOcorrido}
                    onChange={handleChange}
                  />
                </Box>

                <TextField
                  size="small"
                  fullWidth
                  name="local"
                  value={formData.local}
                  onChange={handleChange}
                  label="Setor ou local do ocorrido"
                />
              </Stack>
            </CardContent>
          </Card>

          <Card
            sx={{
              borderRadius: 4,
              boxShadow: "none",
              border: "1px solid #e7efe7",
            }}
          >
            <CardContent sx={{ p: 3.5 }}>
              <Typography variant="h6" fontWeight={600} mb={2.5}>
                Identificação
              </Typography>

              <Stack spacing={2.2}>
                <TextField
                  size="small"
                  fullWidth
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  label="Nome"
                />

                <TextField
                  size="small"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  label="Email"
                />

                <TextField
                  size="small"
                  fullWidth
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  label="Empresa"
                />

                <TextField
                  size="small"
                  fullWidth
                  name="setor"
                  value={formData.setor}
                  onChange={handleChange}
                  label="Setor"
                />

                <FormControl>
                  <FormLabel>Deseja retorno da ocorrência?</FormLabel>

                  <RadioGroup
                    row
                    name="retorno"
                    value={formData.retorno}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="sim"
                      control={<Radio />}
                      label="Sim"
                    />

                    <FormControlLabel
                      value="nao"
                      control={<Radio />}
                      label="Não"
                    />
                  </RadioGroup>
                </FormControl>

                <TextField
                  size="small"
                  fullWidth
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  label="Whatsapp para contato"
                />
              </Stack>
            </CardContent>
          </Card>

          <Card
            sx={{
              borderRadius: 4,
              boxShadow: "none",
              border: "1px solid #e7efe7",
            }}
          >
            <CardContent sx={{ p: 3.5 }}>
              <Typography variant="h6" fontWeight={600} mb={2.5}>
                Relato dos fatos
              </Typography>

              <TextField
                fullWidth
                multiline
                minRows={6}
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                label="Descreva detalhadamente o ocorrido"
                helperText="Inclua datas, pessoas envolvidas e contexto."
              />
            </CardContent>
          </Card>

          <Card
            sx={{
              borderRadius: 4,
              boxShadow: "none",
              border: "1px solid #e7efe7",
            }}
          >
            <CardContent sx={{ p: 3.5 }}>
              <Typography variant="h6" fontWeight={600} mb={2.5}>
                Evidências e consentimentos{" "}
                <p className="text-sm mb-4">
                  (Somente imagem, PDFs ou documentos Word; para mais evidências
                  aguarde nosso retorno...)
                </p>
              </Typography>

              <Stack spacing={2.2}>
                <Button
                  component="label"
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    py: 1.2,
                  }}
                >
                  Anexar documentos
                  <input
                    hidden
                    type="file"
                    accept="image/*,.pdf,.doc,.docx"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                </Button>

                <FormControl>
                  <FormLabel>Autoriza encaminhamento identificado?</FormLabel>

                  <RadioGroup
                    row
                    name="identificada"
                    value={formData.identificada}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="sim"
                      control={<Radio />}
                      label="Sim"
                    />

                    <FormControlLabel
                      value="nao"
                      control={<Radio />}
                      label="Não"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="consentimento"
                      checked={formData.consentimento}
                      onChange={handleChange}
                    />
                  }
                  label="Estou de acordo com a política de privacidade."
                />
              </Stack>
            </CardContent>
          </Card>

          <Box textAlign="center" pt={1}>
            <Button
              onClick={handleSubmit}
              disabled={loading}
              variant="contained"
              size="large"
              sx={{
                background: "#86d464",
                color: "#246044",
                fontWeight: 700,
                px: 5,
                py: 1.4,
                borderRadius: 3,
                boxShadow: "none",
                "&:hover": {
                  background: "#75c053",
                },
              }}
            >
              {loading ? "Enviando..." : "Enviar manifestação"}
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
