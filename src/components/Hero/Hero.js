import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To My World!
      </SectionTitle>
      <SectionText>
        Hi! I'm Zhuoya. <br /> My keywords: Multidisciplinary, Geek, Artistic,
        Free, Brave.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/zhuoya-h-2a3614176/")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
