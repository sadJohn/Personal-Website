import React from "react";
import { Link, Img } from "./style";

const ImgLink = React.memo(({ href, src, alt }) => {
  return (
    <Link href={href}>
      <Img src={src} alt={alt} />
    </Link>
  );
});

export default ImgLink;
