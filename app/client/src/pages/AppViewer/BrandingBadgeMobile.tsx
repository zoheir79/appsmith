import React from "react";
import { importSvg } from "@appsmith/ads-old";

const AppsmithLogo = importSvg(
  async () => import("assets/svg/appsmith-logo-no-pad.svg"),
);

function BrandingBadge() {
  return (
      <h4>My Agent</h4>
      
  );
}

export default BrandingBadge;
