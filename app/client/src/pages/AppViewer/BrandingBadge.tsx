import React from "react";
import { importSvg } from "@appsmith/ads-old";
import styled from "styled-components";
import { Text } from "@appsmith/ads";
const AppsmithLogo = importSvg(
  async () => import("assets/svg/appsmith-logo-no-pad.svg"),
);

const Wrapper = styled.span`
  border-radius: var(--ads-v2-border-radius);
  border: 1px solid var(--ads-v2-color-border);
  background-color: var(--ads-v2-color-bg);

  svg {
    margin-top: 2px;
  }
`;

function BrandingBadge() {
  return (
    <Wrapper className="flex items-center p-1 px-2 space-x-2 w-max backdrop-blur-xl backdrop-filter">
      <h4>My Agent</h4>
    </Wrapper>
  );
}

export default BrandingBadge;
