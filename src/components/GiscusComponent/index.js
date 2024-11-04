import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common"

export default function GiscusComponent() {
  const { colorMode } = useColorMode();
  return (
    <Giscus
      repo="gemeofficial/gemeblog"
      repoId="R_kgDOMnZijw"
      category="General"
      categoryId="DIC_kwDOMnZij84Cj89_"
      mapping="pathname"
      term="Participate in Blog interactive comments!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      lang="en"
      theme={colorMode}
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}