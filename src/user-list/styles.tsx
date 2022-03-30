import styled from "@emotion/styled";

const Wrapper = styled.div`
  label: user-list-wrapper;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export default Wrapper;
