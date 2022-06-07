import { useState } from "react";
import { useParams, useLocation } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

interface RouteState {
  state: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<{ coinId: string }>();
  const { state } = useLocation() as RouteState;
  return (
    <Container>
      <Header>
        <Title>{state ? state : "Loading.."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
