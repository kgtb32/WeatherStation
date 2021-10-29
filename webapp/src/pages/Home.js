import React from "react";
import HomeGraph from "../components/HomeGraph";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {

	return (
		<>
			<Container>
				<Row>
					<Col md={6}><HomeGraph dataName="temperature"/></Col>
    				<Col md={6}><HomeGraph  dataName="pressure"/></Col>
  				</Row>
  				<Row>
    				<Col md={{ span: 6, offset: 3 }}><HomeGraph  dataName="humidity"/></Col>
  				</Row>
			</Container>
		</>
	);
}
