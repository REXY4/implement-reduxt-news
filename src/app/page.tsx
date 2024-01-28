'use client'
import ModalPrimary from "@/components/modal/ModalPrimary";
import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const [valueNumber, setValueNumber] = useState<number>(0)
  return (
    <main >
      <ModalPrimary/>
      <Container>
        <Row style={{
          margin : "50px auto"
        }}>
          <Col className="d-flex justify-content-center">
            <Button
            onClick={()=>setValueNumber(valueNumber - 1)}
            variant="danger" style={{
              marginRight  :"20px",
            }}>-</Button>
              <p>{valueNumber}</p>
            <Button 
            onClick={()=>setValueNumber(valueNumber + 1)}
            variant="success" style={{
              marginLeft  :"20px",
            }}>+</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
