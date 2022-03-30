import styled from "@emotion/styled";
import colors from "helpers/colors";

const Wrapper = styled.div`
  label: loading-screen-wrapper;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background: ${colors.primary[100]};
`;

export default Wrapper;
