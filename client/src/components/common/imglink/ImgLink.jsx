import React from "react";
import { Link, Img } from "./style";
import PropTypes from 'prop-types'

const ImgLink = React.memo(({ href, src, alt }) => {
  return (
    <Link href={href}>
      <Img src={src} alt={alt} />
    </Link>
  );
});

ImgLink.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ImgLink;
