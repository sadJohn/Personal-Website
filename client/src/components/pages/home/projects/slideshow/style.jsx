import styled from "styled-components";
import ImgLink from "../../../../common/imglink/ImgLink";
import back from "../../../../../assets/images/back.png";
import forward from "../../../../../assets/images/forward.png";

export const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Slide = styled(ImgLink)`
`;
export const SlideWrapper = styled.div`
  width: 7.5rem;
  height: 7.5rem;
`;

export const SlideshowBtn = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
  cursor: pointer;

  &.back {
    background: url(${back}) no-repeat;
    background-size: 100% 100%;
  }
  &.forward {
    background: url(${forward}) no-repeat;
    background-size: 100% 100%;
  }

  :hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.28),
      0 4px 15px 0 rgba(0, 0, 0, 0.25);
  }
  :active {
    box-shadow: none;
  }
`;
