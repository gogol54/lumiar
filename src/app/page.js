import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography
} from '@mui/material'
import Topbar from './components/Topbar'
import Image from 'next/image'

const etapas = [
  {
    numero:'01',
    titulo:'Entendimento do cenário',
    texto:'Conversas iniciais para compreender desafios, necessidades e contexto da organização.'
  },
  {
    numero:'02',
    titulo:'Estruturação da proposta',
    texto:'Construção da proposta de cultura e processos alinhados ao negócio.'
  },
  {
    numero:'03',
    titulo:'Validação com lideranças',
    texto:'Revisão e alinhamento com a direção antes da implantação.'
  },
  {
    numero:'04',
    titulo:'Implantação e treinamento',
    texto:'Imersão com lideranças e apresentação para as equipes.'
  },
]

const horas = [
  'Entendimento inicial — 6 horas',
  'Construção da proposta — 4 horas',
  'Treinamento com lideranças — 3 horas',
  'Apresentação às equipes — 2 horas',
  'Primeiros processos — 2 horas'
]

export default function Home(){
  return (

    <Box bgcolor="#fff">
      <Topbar />
      {/* HERO */}
      <Container maxWidth="lg" sx={{py:5}}>
        <Box textAlign="center" alignItems="center" maxWidth={820} mx="auto">
          <div sx={{mb:5}}>
            <Image 
              src="/logo.png"  
              alt="Logo empresa"
              width={500}
              height={500}
              style={{maxWidth:'100%', height:'auto', marginBottom:24, display:'block', marginLeft:'auto', marginRight:'auto'}}
            />
          </div>
          <Typography
          variant="h3"
          sx={{
            fontWeight:700,
            color:'#246044',
            mb:3
          }}
          >
            Cuidar de pessoas fortalece negócios.
          </Typography>

          <Typography
          sx={{
            fontSize:'1.1rem',
            color:'#5f7165',
            lineHeight:1.8,
            mb:5
          }}
          >
            Apoio para construção de ambientes mais seguros,
            saudáveis e alinhados à cultura da organização.
          </Typography>

          <Button
            variant="contained"
            href="https://wa.me/5555991284847?text=Olá,%20gostaria%20de%20agendar%20uma%20conversa%20inicial%20sobre%20a%20consultoria."
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background:'#86d464',
              color:'#246044',
              fontWeight:700,
              px:5,
              py:1.5,
              borderRadius:3,
              boxShadow:'none',
              '&:hover':{
                background:'#75c053',
                boxShadow:'none'
              }
            }}
          >
            Solicitar conversa inicial
          </Button>
        </Box>
      </Container>


      {/* CULTURA */}
      <Box sx={{background:'#f8fbf7', py:10}}>
        <Container maxWidth="lg">

          <Grid container spacing={6} alignItems="center">

            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                fontWeight={700}
                color="#246044"
                sx={{ mb: '20px' }}
              >
                O que compõe a cultura de uma organização?
              </Typography>

              <Stack spacing={2}>
                {[
                  'História da organização',
                  'Valores e propósito',
                  'Missão e visão',
                  'Princípios de liderança',
                  'Pilares do negócio'
                  ].map(item=>(
                <Typography key={item}>
                  • {item}
                </Typography>
              ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height:320,
                  border:'1px dashed #d8e4d5',
                  borderRadius:6,
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >
                <Typography color="text.secondary">
                  <Image 
                    src="/graph.png"
                    alt="Gráfico"
                    width={200}
                    height={200}
                  />
                </Typography>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>



      {/* ETAPAS */}
      <Box py={10} sx={{py:5}}>
        <Container maxWidth="lg" display="flex" flexDirection="column" alignItems="center">

          <Box textAlign="center" mb={7}>
            <Typography
              variant="h4"
              fontWeight={700}
              color="#246044"
              sx={{ mb: '20px' }}
            >
              Como funciona o processo
            </Typography>
          </Box>

        <Box
            sx={{
              display:'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(280px, 1fr))',
              gap:4
            }}
          >
            {etapas.map((etapa)=>(
              <Card
                key={etapa.numero}
                sx={{
                  border:'1px solid #e7efe7',
                  borderRadius:5,
                  boxShadow:'none',
                  transition:'all .28s ease',
                  cursor:'pointer',

                  '&:hover':{
                    transform:'scale(1.03)',
                    boxShadow:'0 12px 30px rgba(36,96,68,.08)',
                    borderColor:'#86d464'
                  }
                }}
              >
                <CardContent sx={{p:4}}>

                  <Typography
                    color="#86d464"
                    fontWeight={700}
                    mb={1}
                    fontSize="1.15rem"
                  >
                    {etapa.numero}
                  </Typography>

                  <Typography
                    variant="h6"
                    mb={1.5}
                    sx={{
                      color:'#246044'
                    }}
                  >
                    {etapa.titulo}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    lineHeight={1.8}
                  >
                    {etapa.texto}
                  </Typography>

                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>



      {/* INVESTIMENTO */}
      <Box sx={{background:'#f8fbf7', py:10, mx:'200'}}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight={700}
            color="#246044"
            sx={{ mb: '20px' }}
          >
            Carga horária e investimento
          </Typography>

          <Card
            sx={{
              border:'1px solid #e7efe7',
              borderRadius:5,
              boxShadow:'none'
            }}
          >
            <CardContent sx={{p:5}}>
              <Stack spacing={2} mb={5}>
                {horas.map(item=>(
                  <Typography key={item}>
                    {item}
                  </Typography>
                ))}
              </Stack>

              <Typography
                variant="h5"
                fontWeight={700}
                mb={1}
              >
                R$ 75,00 / hora
              </Typography>

              <Typography color="text.secondary">
                Estimativa inicial conforme escopo apresentado.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  )
}