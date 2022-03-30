import styled from "@emotion/styled";
import colors from "helpers/colors";

const LayoutWrapper = styled.div`
  label: app-wrapper;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .content {
    flex: 1;
  }
`;

export const HeaderWrapper = styled.div`
  label: app-header;
  width: 100%;
  height: 80px;
  margin-bottom: 32px;
  background: ${colors.primary[100]};
  padding: 1rem;
  border-bottom: 1px solid ${colors.primary[200]};
  p {
    margin: 0;
  }
`;

export default LayoutWrapper;
