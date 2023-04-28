import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ServiceCard from "./service-card"
import Bar from "./bar"

const Services = () => {
  let services = [
    {
      id: 1,
      image: "search-doctor-icon.png",
      title: "Serviços de Saúde",
      description:
        "Busque por médicos, nutricionistas, educadores físicos, cuidadores e acompanhantes em um único lugar.",
    },
    {
      id: 2,
      image: "online-pharmacy-icon.png",
      title: "Controle de Medicamentos",
      description:
        "Nunca mais se esqueça, perca o horário ou se confunda com a sua medicação, tudo isso de forma simples e intuitiva.",
    },
    {
      id: 3,
      image: "consultation-icon.png",
      title: "Todos os seus dados em um só lugar",
      description:
        "Acesse suas informações de saúde de diversos hospitais, planos de saúde e laboratórios de forma simples e rápida.",
    },
    {
      id: 4,
      image: "details-info-icon.png",
      title: "Acompanhamento contínuo",
      description:
        "Compartilhe com sua equipe médica e familiares o seu histórico de saúde e tenha um acompanhamento mais efetivo e seguro.",
    },
    {
      id: 5,
      image: "emergency-care-icon.png",
      title: "Atendimento de emergencia",
      description:
        "Acesse rapidamente os serviços de emergência mais próximos de você, com apenas um clique.",
    },
    {
      id: 6,
      image: "tracking-icon.png",
      title: "Dieta e Exercícios",
      description: "Acompanhe seus hábitos alimentares e de exercícios físicos e receba dicas personalizadas para melhorar sua saúde.",
    },
  ]

  return (
    <Grid
      container
      spacing={3}
      style={{
        textAlign: "center",
        minHeight: 200,
        padding: 10,
      }}
    >
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h5">Funcionalidades</Typography>
        <Bar />
        <Typography variant="subtitle1" style={{ margin: 30 }}>
          Todas as ferramentas que você precisa ou já utiliza em um único app, trazendo comodidade e integração, além de benefícios exclusivos.
        </Typography>
      </Grid>

      {services.map(service => (
        <Grid item xs={12} sm={4} key={service.id}>
          <ServiceCard service={service} />
        </Grid>
      ))}

      <Grid item xs={12}>
        <Button variant="outlined" color="primary" size="large">
          Saiba mais
        </Button>
      </Grid>
    </Grid>
  )
}
export default Services
