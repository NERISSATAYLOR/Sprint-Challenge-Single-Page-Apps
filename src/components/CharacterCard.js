import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';
const CharacterCard = (props) => {
  return (
    <div className="character-card">
      <Col>
        <Card>
          <CardImg src={props.image} alt={props.chars.name} />
          <CardBody>
            <CardTitle>Name:{props.name}</CardTitle>
            <CardSubtitle>Status: {props.chars.status}</CardSubtitle>
            <CardText>Species: {props.chars.species}</CardText>
            <CardText>Location:{props.location}</CardText>
          </CardBody>
        </Card>
      </Col>
    </div>
  )
}
export default CharacterCard;