import styled from "styled-components";
import leftBg from "./img/el.svg";
import rightBg from "./img/ellipse.svg";
import blueEllipse from "./img/blue.svg";
import proEllipse from "./img/pro-ellipse.svg";
import { Container } from "../container";

export const Wrapper = styled.div`
  overflow: hidden;

  .hide-mobile {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  .hide-desktop {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .nowrap {
    white-space: nowrap;
  }
`;

export const TopBlock = styled.section`
  background: radial-gradient(
    50% 81.67% at 50% 100%,
    rgba(246, 243, 239, 0) 0%,
    #f6f3ef 100%
  );
  position: relative;
  & > div {
    position: relative;
    z-index: 2;
  }
`;

export const TopBg = styled.img`
  position: absolute;
  left: 50%;
  top: 120px;
  height: 414px;
  object-fit: contain;
  object-position: center;
  transform: translateX(-50%);
  z-index: 1;
  @media (max-width: 768px) {
    top: 220px;
  }
`;

export const Title = styled.h1`
  color: #1d2b3f;
  text-align: center;
  font-family: "FuturaPT";
  font-size: 52px;
  font-weight: 450;
  line-height: 92%;

  img {
    width: 62px;
    height: 54px;
    object-fit: contain;
    vertical-align: middle;
  }

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    position: relative;
    padding-top: 70px;
    line-height: 110%;

    img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const QrBlock = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  transform: translateX(34px);
  gap: 30px;

  color: #1d2b3f;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 33px;
    transform: translateX(0);

    .qr {
      display: none;
    }
  }
`;

export const TopButtons = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    margin: 0 auto;
    width: fit-content;
  }
`;

export const AppBlock = styled.section`
  position: relative;
  z-index: 2;
`;

export const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin-top: -64px;
  padding-bottom: 64px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 0.7fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const AppLeft = styled.div`
  position: relative;
  padding-top: 70px;
  padding: 104px 110px 0 0;
  z-index: 2;
  &::before {
    content: " ";
    position: absolute;
    left: -7.6vw;
    top: -30px;
    width: 466px;
    height: 442px;
    background-image: url(${leftBg});
    background-size: 100% 100%;
    z-index: -1;
  }
  @media (max-width: 900px) {
    height: 440px;
  }
  @media (max-width: 900px) {
    padding: 104px 0 0 0;
    &::before {
      left: 50%;
      transform: translateX(calc((-50% - 14px)));
    }
  }
`;

export const AppTitle = styled.h2`
  margin: 0;
  font-weight: 600;
  line-height: 150%;
  font-size: 26px;
`;

export const AppMid = styled.div`
  position: relative;
  z-index: 3;
  img {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -162px);
    height: 675px;
    width: 530px;
    object-fit: contain;
    object-position: center;
  }

  @media (max-width: 1024px) {
    img {
      width: 450px;
    }
  }
  @media (max-width: 900px) {
    height: fit-content;
    margin: -162px 0 0;

    img {
      height: auto;
      left: 50%;
      width: calc(100% + 40px);
      max-width: calc(100% + 40px);
      position: relative;
      transform: translate(-50%, 0);
    }
  }
`;

export const AppRight = styled.div`
  position: relative;
  padding: 104px 0px 0px 120px;
  color: #2d3436;
  z-index: 1;

  &::before {
    content: " ";
    position: absolute;
    right: -5.2vw;
    top: -114px;
    width: 690px;
    height: 640px;
    background-image: url(${rightBg});
    background-size: 100% 100%;
    z-index: -1;
  }
  @media (max-width: 900px) {
    text-align: center;
    padding: 24px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    &::before {
      right: calc(50% + 42px);
      top: calc(50% - 4px);
      width: 484px;
      height: 460px;
      transform: translate(50%, -50%);
    }
  }
`;

export const AppsButton = styled.a`
  background: #000000;
  transition: 300ms ease-out;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 6px;
  max-width: 160px;
  height: 48px;
  &:hover {
    background: #2d3436;
  }
  @media (max-width: 768px) {
    width: 160px;
  }
`;

export const SliderWrapper = styled.div`
  width: 770px;
  max-width: 100%;
  margin: 0 auto;
  .slick-list {
    overflow: visible;
  }
  .slick-slider {
    padding-top: 74px;
    margin: 0 -15px;
  }
  .slick-slide {
    padding: 0 15px;
  }
  .slick-dots {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex !important;
    gap: 10px;
    width: fit-content;
    position: absolute;
    top: 28px;
    left: 50%;
    transform: translate(-50%, 0);
    button {
      border-radius: 6px;
      background: #ebe5de;
      width: 6px;
      height: 6px;
      cursor: pointer;
      transition: 200ms ease-out;
      font-size: 0;
      color: transparent;
      &:hover {
        background: #b68756;
      }
    }
    .slick-active button {
      background: #b68756;
      width: 18px;
    }
  }

  @media (max-width: 768px) {
    .slick-slide {
      padding: 10px;
    }
    .slick-slider {
      margin: 0;
    }
  }
`;

export const SlideUnit = styled.div`
  background: #f6f3ef;
  border-radius: 30px;
  padding: 50px 70px 0 100px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  font-weight: 500;
  cursor: grab;
  overflow: hidden;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 43px 33px 0;
    height: 640px;
  }
`;

export const SlideHeading = styled.h3`
  margin: 0;
  font-size: 26px;
  line-height: 150%;
  font-weight: 500;
`;

export const SlideLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -46px;
  line-height: 150%;
  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;

export const SlideImage = styled.img`
  height: 318px;
  width: auto;
  object-fit: contain;
  object-position: center bottom;
  @media (max-width: 575px) {
    width: calc(100% + 68px);
    margin-left: -34px;
    margin-bottom: -10px;
    height: auto;
  }
`;

export const DownloadBlock = styled.section`
  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  p {
    font-size: 22px;
    font-weight: 600;
    max-width: 570px;
    a {
      position: relative;
      display: inline-block;
      transition: 200ms ease-out;
      &::before {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 2px;
        width: 100%;
        height: 2px;
        background: #000;
        transition: 200ms ease-out;
      }
      &:hover {
        color: #2d3436;
        &::before {
          background: #2d3436;
        }
      }
    }
  }
`;

export const DownloadButtons = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  justify-content: center;
  & > * {
    flex: 1 0 160px;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    gap: 14px;
    & > * {
      flex: 1 0 auto;
    }
  }
`;

export const ProSection = styled.section``;

export const ProGrid = styled.div`
  display: grid;
  grid-template-columns: 470px 1fr;
  gap: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 74px;
  }
`;

export const ProGridLeft = styled.div`
  position: relative;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-weight: 600;
  padding-bottom: 136px;
  z-index: 0;
  p {
    color: #2d3436;
  }

  &::before {
    content: " ";
    position: absolute;
    background: url(${proEllipse});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 692px;
    height: 645px;
    left: -44px;
    bottom: -160px;
    z-index: -1;
  }

  ${QrBlock} {
    transform: translate(0, 0);
    margin: 0;
    color: #1d2b3f;
  }

  @media (max-width: 768px) {
    padding-bottom: 0;

    &::before {
      left: -96px;
      width: 475px;
      height: 447px;
      bottom: auto;
      top: -80px;
    }
  }
`;

export const ProGridRight = styled.div`
  position: relative;
  height: 728px;
  z-index: 3;

  img {
    position: relative;
    z-index: 2;
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
  &::before {
    content: " ";
    z-index: 0;
    position: absolute;
    width: 680px;
    height: 638px;
    background: url(${blueEllipse});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    top: 50px;
  }
  @media (max-width: 768px) {
    height: 458px;
    &::before {
      height: 400px;
      width: 562px;
      left: 50%;
      top: 34px;
      transform: translate(-50%, 0);
    }
  }
`;

export const NeedHelp = styled.div`
  border-radius: 9px;
  background: #f8f2ec;
  padding: 16px;
  font-size: 22px;
  font-weight: 300;
  line-height: 112%;
  text-align: center;
  a {
    font-weight: 700;
    color: #b68756;
    position: relative;
    padding-bottom: 2px;
    display: inline-block;
    &:hover {
      color: #b67d41;
    }
    &::before {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      background: #b68756;
    }
  }
  @media (max-width: 768px) {
    font-weight: 300;
    font-family: "Roboto", "Inter";
    padding: 10px 36px;
    font-size: 16px;
    line-height: 112%;
    a {
      color: #d2a567;
      &::before {
        background: #d2a567;
        height: 1px;
        bottom: 2px;
      }
    }
  }
`;
