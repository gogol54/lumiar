
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import Image from 'next/image'
import Topbar from '../components/Topbar'

export default function Home() {
  return (
    <Box
      sx={{
        minHeight:'100vh',
        background:'#fff',
        py:{ xs:4, md:7 }
      }}
    >
      
      <Container maxWidth="md">

        {/* Header */}
        <Box>
          <div
            style={{
              display:'flex',
              flexDirection:'column',
              justifyContent: 'stretch',
              backgroundColor:'#f5e9db',
              alignItems:'center',
              gap:0,
              marginBottom:24
            }}
          >
            <Image
              src="/lumiar.png"
              alt="Ouvidoria"
              width={160}
              height={160}
            />

           
          </div>
            <Typography
              variant="h6"
              sx={{
                textAlign:'center',
                fontWeight:600,
                color:'#246044',
                mb:0
              }}
            >
              Canal de Ética e Ouvidoria
            </Typography>
          <Typography
            sx={{
              maxWidth:620,
              mx:'auto',
              color:'#5f7165',
              lineHeight:1.7
            }}
          >

            Relate situações com segurança e confidencialidade.
          </Typography>
        </Box>

        <Alert
          severity="success"
          sx={{
            mb:4,
            borderRadius:3,
            background:'#eef8e8'
          }}
        >
          Você pode registrar sua manifestação com identificação.
        </Alert>

        <Stack spacing={3}>

          {/* Natureza */}
          <Card
            sx={{
              borderRadius:4,
              boxShadow:'none',
              border:'1px solid #e7efe7'
            }}
          >
            <CardContent sx={{ p:3.5 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                mb={2.5}
              >
                Natureza da denúncia
              </Typography>

              <Stack spacing={2.2}>

                <TextField
                  size="small"
                  fullWidth
                  select
                  label="Tipo de denúncia"
                  defaultValue=""
                >
                  <MenuItem value="moral">
                    Assédio Moral
                  </MenuItem>

                  <MenuItem value="discriminacao">
                    Discriminação
                  </MenuItem>

                  <MenuItem value="fraude">
                    Fraude
                  </MenuItem>

                  <MenuItem value="outros">
                    Outros
                  </MenuItem>
                </TextField>

                <Box>
                  <Typography
                    fontSize={14}
                    mb={1}
                    color="#5f7165"
                  >
                    Data do ocorrido
                  </Typography>

                  <TextField
                    size="small"
                    fullWidth
                    type="date"
                  />
                </Box>

                <TextField
                  size="small"
                  fullWidth
                  label="Setor ou local do ocorrido"
                />

              </Stack>
            </CardContent>
          </Card>


          {/* Identificação */}
          <Card
            sx={{
              borderRadius:4,
              boxShadow:'none',
              border:'1px solid #e7efe7'
            }}
          >
            <CardContent sx={{ p:3.5 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                mb={2.5}
              >
                Identificação
              </Typography>

              <Stack spacing={2.2}>

                <TextField
                  size="small"
                  fullWidth
                  label="Nome"
                />

                <TextField
                  size="small"
                  fullWidth
                  label="Email"
                />

                <TextField
                  size="small"
                  fullWidth
                  label="Empresa"
                />

                <TextField
                  size="small"
                  fullWidth
                  label="Setor"
                />

                <FormControl>
                  <FormLabel>
                    Deseja retorno da ocorrência?
                  </FormLabel>

                  <RadioGroup
                    row
                    defaultValue="sim"
                  >
                    <FormControl
                      value="sim"
                      control={<Radio />}
                      label="Sim"
                    />

                    <FormControl
                      value="nao"
                      control={<Radio />}
                      label="Não"
                    />
                  </RadioGroup>
                </FormControl>

                <TextField
                  size="small"
                  fullWidth
                  label="Whatsapp para contato"
                />

              </Stack>
            </CardContent>
          </Card>


          {/* Relato */}
          <Card
            sx={{
              borderRadius:4,
              boxShadow:'none',
              border:'1px solid #e7efe7'
            }}
          >
            <CardContent sx={{ p:3.5 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                mb={2.5}
              >
                Relato dos fatos
              </Typography>

              <TextField
                fullWidth
                multiline
                minRows={6}
                label="Descreva detalhadamente o ocorrido"
                helperText="Inclua datas, pessoas envolvidas e contexto."
              />

            </CardContent>
          </Card>


          {/* Evidências */}
          <Card
            sx={{
              borderRadius:4,
              boxShadow:'none',
              border:'1px solid #e7efe7'
            }}
          >
            <CardContent sx={{ p:3.5 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                mb={2.5}
              >
                Evidências e consentimentos
              </Typography>

              <Stack spacing={2.2}>

                <Button
                  component="label"
                  variant="outlined"
                  sx={{
                    borderRadius:3,
                    py:1.2
                  }}
                >
                  Anexar documentos
                  <input hidden type="file" multiple />
                </Button>

                <FormControl>
                  <FormLabel>
                    Autoriza encaminhamento identificado?
                  </FormLabel>

                  <RadioGroup
                    row
                    defaultValue="sim"
                  >
                    <FormControl 
                      value="sim"
                      control={<Radio />}
                      label="Sim"
                    />

                    <FormControl
                      value="nao"
                      control={<Radio />}
                      label="Não"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl
                  control={<Checkbox />}
                  label="Estou de acordo com a política de privacidade."
                />

              </Stack>
            </CardContent>
          </Card>


          <Box textAlign="center" pt={1}>
            <Button
              variant="contained"
              size="large"
              sx={{
                background:'#86d464',
                color:'#246044',
                fontWeight:700,
                px:5,
                py:1.4,
                borderRadius:3,
                boxShadow:'none',
                '&:hover':{
                  background:'#75c053',
                  boxShadow:'none'
                }
              }}
            >
              Enviar manifestação
            </Button>
          </Box>

        </Stack>
      </Container>
    </Box>
  )
}