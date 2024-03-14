import React from "react";
import styled from "styled-components";
import "./Home.css";
import home from "../assets/home-banner.png";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import kore from "../assets/icons/1.svg";
import pizza from "../assets/icons/2.svg";
import burger from "../assets/icons/3.svg";
import kızartmalar from "../assets/icons/4.svg";
import fastfood from "../assets/icons/5.svg";
import gazlı from "../assets/icons/6.svg";
import food1 from "../assets/pictures/food-1.png";
import food2 from "../assets/pictures/food-2.png";
import food3 from "../assets/pictures/food-3.png";
import { Card, CardBody } from "reactstrap";

import Kart1 from "../assets/cta/kart-1.png";
import Kart2 from "../assets/cta/kart-2.png";
import Kart3 from "../assets/cta/kart-3.png";

const Body = styled.div`
  background-color: #faf7f2;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 120px;
  margin-top: 35px;
  margin-bottom: 10px;
`;

const StyledNavItem = styled.div`
  color: #292929;
  font-weight: bold;
  gap: 30px;
  img {
    margin-right: 5px;
  }
`;
const PrefferedMenu = styled.p`
  color: #ce2829;
  margin-top: 30px;
  text-align: center;
  font-size: 25px;
  font-family: "Satisfy", sans-serif !important;
`;
const Lezzetler = styled.h2`
color: #292929
margin-top: 30px;
font-weight: bold;
`;

const Button = styled.button`
  background-color: white;
  padding: 5px 20px;
  border-radius: 30px;

  &:hover,
  &:focus,
  &:active {
    background-color: #292929;
    border-color: #292929;
    color: white;
  }

  img {
    margin-right: 10px;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
`;

const StyledCardTitle = styled.p`
  text-align: left;
  font-weight: bold;
  color: #292929;
`;

const BannerImage = styled.div`
  margin-left: 10px;
  img {
    width: 360px;
    height: 340px;
    border-radius: 8px;
  }
`;

const SiparisButton = styled.button`
  color: #292929;
  background-color: #faf7f2;
  padding: 8px 40px;
  font-size: 1em;
  border: none;
  border-radius: 30px;
`;

const Banner = styled.div`
  width: 50px;
`;

export default function Home() {
  return (
    <div className="home-image">
      <img className="fullscreen-image" src={home} alt="Home Banner" />
      <div className="overlay">
        <img src={logo} alt="Logo" />
        <p className="firsat">fırsatı kaçırma</p>
        <h1>KOD ACIKTIRIR PİZZA,DOYURUR</h1>
        <button>
          <Link to="/order">ACIKTIM</Link>
        </button>
      </div>

      <StyledNav pills>
        <StyledNavItem>
          <img alt="Kore" src={kore} />
          YENİ! Kore
        </StyledNavItem>
        <StyledNavItem>
          <img alt="Pizza" src={pizza} /> Pizza
        </StyledNavItem>
        <StyledNavItem>
          <img alt="Burger" src={burger} /> Burger
        </StyledNavItem>
        <StyledNavItem>
          <img alt="Burger" src={kızartmalar} /> Kızartmalar
        </StyledNavItem>
        <StyledNavItem>
          <img alt="Burger" src={fastfood} />
          Fast food
        </StyledNavItem>
        <StyledNavItem>
          <img alt="Burger" src={gazlı} />
          Gazlı İçecek
        </StyledNavItem>
      </StyledNav>

      <Banner>
        <BannerImage>
          <img alt="Kart1" src={Kart1} />
          <h2>Özel Lezzetus</h2>
          <h4>Position Absolute Acı Pizza</h4>
          <SiparisButton>
            <Link to="/order">Sipariş Ver</Link>
          </SiparisButton>
        </BannerImage>

        <BannerImage>
          <img alt="Kart2" src={Kart2} />
          <h3>Hackathlon Burger Menü</h3>
          <SiparisButton>
            <Link to="/order">Sipariş Ver</Link>
          </SiparisButton>
        </BannerImage>

        <BannerImage>
          <img alt="Kart3" src={Kart3} />
          <h3>Çoooook hızlı npm gibi kurye</h3>
          <SiparisButton>
            <Link to="/order">Sipariş Ver</Link>
          </SiparisButton>
        </BannerImage>
      </Banner>

      <Body>
        <PrefferedMenu>en çok paketlenen menüler</PrefferedMenu>
        <Lezzetler>Acıktıran Kodlara Doyuran Lezzetler</Lezzetler>

        <StyledNav pills>
          <Button>
            <img alt="Kore" src={kore} />
            Ramen
          </Button>
          <Button>
            <img alt="Pizza" src={pizza} />
            Pizza
          </Button>
          <Button>
            <img alt="Burger" src={burger} />
            Burger
          </Button>
          <Button>
            <img alt="Burger" src={kızartmalar} />
            French fries
          </Button>
          <Button>
            <img alt="Burger" src={fastfood} />
            Fast food
          </Button>
          <Button>
            <img alt="Burger" src={gazlı} />
            Soft drinks
          </Button>
        </StyledNav>

        <StyledCardContainer style={{ marginBottom: "30px" }}>
          <Card
            style={{
              width: "21rem",
              height: "27rem",
              borderColor: "#FAF7F2",
            }}
          >
            <img alt="Sample" src={food1} />
            <CardBody>
              <StyledCardTitle tag="h5">Terminal Pizza</StyledCardTitle>
              <span>4.9</span>
              <span>(200)</span>
              <p className="card-p">
                <b>85.5 ₺</b>
              </p>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "21rem",
              height: "27rem",
              borderColor: "#FAF7F2",
            }}
          >
            <img alt="Sample" src={food2} />
            <CardBody>
              <StyledCardTitle tag="h5">
                Position Absolute Acı Pizza
              </StyledCardTitle>
              <span>4.9</span>
              <span>(200)</span>
              <p className="card-p">
                <b>85.5 ₺</b>
              </p>
            </CardBody>
          </Card>

          <Card
            style={{
              width: "21rem",
              height: "27rem",
              borderColor: "#FAF7F2",
            }}
          >
            <img alt="Sample" src={food3} />
            <CardBody>
              <StyledCardTitle tag="h5">
                useEffect Tavuklu Burger
              </StyledCardTitle>
              <span>4.9</span>
              <span>(200)</span>
              <p className="card-p">
                <b>85.5 ₺</b>
              </p>
            </CardBody>
          </Card>
        </StyledCardContainer>
      </Body>
    </div>
  );
}
