import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height : 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(57% 0%, 100% 0%, 100% 100%, 41% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 57% 0%, 33% 100%, 0% 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0% 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

const App = () => {
  return (
    <>
    <Container>
      <Navbar/>
      <Intro/>
      <IntoShape/>
    </Container>
    <Container>
      <Feature/>
      <FeatureShape/>
    </Container>
    <Container>
      <Service/>
      <ServiceShape/>
    </Container>
    <Container>
      <Price/>
      <PriceShape/>
    </Container>
  </>
  )
}
export default App;