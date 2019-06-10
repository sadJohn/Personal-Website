import styled from "styled-components";
import ImgLink from "../../../../common/imglink/ImgLink";

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Slide = styled(ImgLink)`
  width: 100%;
`;
export const SlideWrapper = styled.div`
  width: 20%;
`;

export const SlideshowBtn = styled.div`
  width: 6%;
  border-radius: 50%;
  background-color: #e91e63;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  &:before {
    content: "";
    display: inline-block;
    width: 0.1px;
    padding-top: 100%;
  }

  & i {
    transform: translateX(-8px);
    font-size: 4rem;
    color: white;
  }
  :hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.28),
      0 4px 15px 0 rgba(0, 0, 0, 0.25);
  }
  :active {
    box-shadow: none;
  }
`;
