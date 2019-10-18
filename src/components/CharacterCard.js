import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';
const CharacterCard = (props) => {
  return (
    <div className="character-card">
      <Col md="12" md="6" key={props.id}>
        <Card>
          <CardImg src={props.chars.image} alt={props.name} />
          <CardBody>
            <CardTitle>Name:{props.chars.name}</CardTitle>
            <CardSubtitle>Status: {props.chars.status}</CardSubtitle>
            <CardText>Species: {props.chars.species}</CardText>

          </CardBody>
        </Card>
      </Col>
    </div>
  )
}
export default CharacterCard;