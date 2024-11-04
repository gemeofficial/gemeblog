import React from 'react';
import Giscus from "@giscus/react";

export default function GiscusComponent() {
  return (
    <Giscus
      repo="gemeofficial/gemeblog"
      repoId="R_kgDOMnZijw"
      category="General"
      categoryId="DIC_kwDOMnZij84Cj89_"  // E.g. id of "General"
      mapping="url"                        // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}