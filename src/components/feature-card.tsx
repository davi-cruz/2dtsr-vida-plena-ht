import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Image from "./image"

interface IProps {
  feature: Feature
}

interface Feature {
  title: string
  image: string
  description: string
}

const FeatureCard = ({ feature, ...props }: IProps) => {
  return (
    <Card>
      <CardContent style={{ textAlign: "start", minHeight: 200 }}>
        <div style={{ width: 80, padding: 10 }}>
          <Image alt={feature.title} filename={feature.image} />
        </div>
        <Typography variant="h6" color="inherit">
          {feature.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {feature.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default FeatureCard
