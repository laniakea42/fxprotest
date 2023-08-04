import Space from "../common/space";
import { Container } from "../container";
import {
  Wrapper,
  AppBlock,
  AppGrid,
  AppLeft,
  AppTitle,
  AppMid,
  QrBlock,
  Title,
  TopBg,
  TopBlock,
  AppRight,
  AppsButton,
  TopButtons,
  SliderWrapper,
  SlideUnit,
  SlideHeading,
  SlideImage,
  SlideLeft,
  DownloadBlock,
  DownloadButtons,
  ProSection,
  ProGrid,
  ProGridLeft,
  ProGridRight,
  NeedHelp,
} from "./styled";
import Slider from "react-slick";

import logo from "./img/mt.png";
import qr from "./img/qr.svg";
import qr2 from "./img/qr-2.svg";
import topBg from "./img/header_bg.svg";
import topBg2 from "./img/header_bg_m.svg";
import phones from "./img/phones.png";
import appstore from "./img/appstore.svg";
import gplay from "./img/gplay.svg";
import slide1 from "./img/slide-1.png";
import slide2 from "./img/slide2.png";
import slide3 from "./img/slide3.png";
import mt4 from "./img/mt4.svg";
import proSection from "./img/pro-section.png";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  centermode: true,
  draggabe: true,
  swipe: true,
};

function Index() {
  return (
    <Wrapper>
      <TopBlock>
        <TopBg src={topBg} alt="" className="hide-mobile" />
        <TopBg src={topBg2} alt="" className="hide-desktop" />
        <Container>
          <Space height={138} heightMobile={118} />
          <Title>
            Trade Your <img src={logo} alt="" /> MetaTrader
            <br />
            Accounts in One App!
          </Title>
          <Space height={7} heightMobile={2} />

          <QrBlock>
            <TopButtons>
              <AppsButton href="/" target="_blank" rel="noreferrer">
                <img src={appstore} alt="Appstore" />
              </AppsButton>
              <Space height={14} heightMobile={14} />

              <AppsButton href="/" target="_blank" rel="noreferrer">
                <img src={gplay} alt="Gppgle Play" />
              </AppsButton>
            </TopButtons>

            <img src={qr} alt="" className="qr" />

            <p>Don't wait - download the App with MT4/MT5 included now!</p>
          </QrBlock>

          <Space height={252} heightMobile={112} />
        </Container>
      </TopBlock>

      <AppBlock>
        <Container>
          <AppGrid>
            <AppLeft>
              <p>
                Looking for a trading platform that brings your Metatrader
                accounts to your fingertips?
              </p>
              <Space height={12} heightMobile={12} />
              <AppTitle>Look no further than the App!</AppTitle>
            </AppLeft>
            <AppMid>
              <img src={phones} alt="" />
            </AppMid>
            <AppRight>
              <p>
                With the MT4 and MT5 platforms included, our app offers
                unparalleled convenience and functionality for traders
                on-the-go.
              </p>

              <Space height={42} heightMobile={36} />

              <AppsButton href="/" target="_blank" rel="noreferrer">
                <img src={appstore} alt="Appstore" />
              </AppsButton>
              <Space height={14} heightMobile={14} />

              <AppsButton href="/" target="_blank" rel="noreferrer">
                <img src={gplay} alt="Gppgle Play" />
              </AppsButton>
            </AppRight>
          </AppGrid>
          <Space height={100} heightMobile={100} />
        </Container>
      </AppBlock>

      <SliderWrapper>
        <Slider {...sliderSettings}>
          <div>
            <SlideUnit>
              <SlideLeft>
                <SlideHeading>
                  Seamless trading & advanced charting:
                </SlideHeading>
                <Space height={8} heightMobile={4} />
                <p>
                  Execute trades, monitor your positions, and analyse like a pro
                  with live charts and indicators from TradingView.
                </p>
              </SlideLeft>
              <SlideImage src={slide2} alt="management" />
            </SlideUnit>
          </div>

          <div>
            <SlideUnit>
              <SlideLeft>
                <SlideHeading>Full account management:</SlideHeading>
                <Space height={8} heightMobile={4} />
                <p>
                  Manage your trading accounts, deposit funds with 0 fees, and
                  withdraw profits, all from within the app.
                </p>
              </SlideLeft>
              <SlideImage src={slide1} alt="management" />
            </SlideUnit>
          </div>

          <div>
            <SlideUnit>
              <SlideLeft>
                <SlideHeading>Stay on top of market moves:</SlideHeading>
                <Space height={8} heightMobile={4} />
                <p>
                  Use the integrated Economic Calendar and set alerts, and
                  receive push notifications on increased volatility or
                  significant market moves.
                </p>
              </SlideLeft>
              <SlideImage src={slide3} alt="management" />
            </SlideUnit>
          </div>

          <div>
            <SlideUnit>
              <SlideLeft>
                <SlideHeading>
                  Seamless trading & advanced charting:
                </SlideHeading>
                <Space height={8} heightMobile={4} />
                <p>
                  Execute trades, monitor your positions, and analyse like a pro
                  with live charts and indicators from TradingView.
                </p>
              </SlideLeft>
              <SlideImage src={slide2} alt="management" />
            </SlideUnit>
          </div>

          <div>
            <SlideUnit>
              <SlideLeft>
                <SlideHeading>Full account management:</SlideHeading>
                <Space height={8} heightMobile={4} />
                <p>
                  Manage your trading accounts, deposit funds with 0 fees, and
                  withdraw profits, all from within the app.
                </p>
              </SlideLeft>
              <SlideImage src={slide1} alt="management" />
            </SlideUnit>
          </div>
        </Slider>
      </SliderWrapper>

      <Space height={80} heightMobile={40} />

      <DownloadBlock>
        <Container>
          <img src={mt4} alt="" />
          <Space height={40} heightMobile={40} />
          <p>
            Download MT4 for iOS/Android now and gain access to a wide range of
            features & over 2100 derivatives in <a href="/">Metals</a>,{" "}
            <a href="/">Energy</a>, <a href="/">Stocks</a>,{" "}
            <a href="/">Indices</a>, <a href="/">Futures</a> & more!
          </p>
          <Space height={40} heightMobile={40} />
          <DownloadButtons>
            <AppsButton href="/" target="_blank" rel="noreferrer">
              <img src={appstore} alt="Appstore" />
            </AppsButton>

            <AppsButton href="/" target="_blank" rel="noreferrer">
              <img src={gplay} alt="Gppgle Play" />
            </AppsButton>
          </DownloadButtons>
        </Container>
      </DownloadBlock>

      <Space height={74} heightMobile={40} />

      <ProSection>
        <Container>
          <ProGrid>
            <ProGridLeft>
              <p>
                With the App, you can take your trading to the next level.
                Whether you're an experienced trader or just starting out, our
                platform offers the features and functionality you need to trade
                like a pro!
              </p>

              <Space height={40} heightMobile={40} />

              <QrBlock>
                <TopButtons>
                  <AppsButton href="/" target="_blank" rel="noreferrer">
                    <img src={appstore} alt="Appstore" />
                  </AppsButton>
                  <Space height={14} heightMobile={14} />

                  <AppsButton href="/" target="_blank" rel="noreferrer">
                    <img src={gplay} alt="Gppgle Play" />
                  </AppsButton>
                </TopButtons>
                <img src={qr2} alt="" className="qr" />
                <p>
                  Download the <span className="nowrap">award-winning App</span>{" "}
                  with MT4/MT5 included.
                </p>
              </QrBlock>
            </ProGridLeft>
            <ProGridRight>
              <img src={proSection} alt="" />
            </ProGridRight>
          </ProGrid>
          <Space height={77} heightMobile={36} />
          <NeedHelp>
            Need Help?{" "}
            <span className="nowrap">
              Visit our&nbsp;
              <a href="/">Help Section</a>
            </span>
          </NeedHelp>
        </Container>
      </ProSection>
      <Space height={114} heightMobile={48} />
    </Wrapper>
  );
}

export default Index;
