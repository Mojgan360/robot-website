import React from "react";
import styled from "styled-components";
import coverStory from "../assets/images/CoverStory_robots.jpg";
import image_1 from "../assets/images/image_1.jpeg";
import robot from "../assets/images/robot.jpg";
import robot2 from "../assets/images/robot2.jpg";
import hash1 from "../assets/images/hash1.png";
import hash2 from "../assets/images/hash2.png";

import Industry from "../components/Industry";
import RobotIcone from "../components/RobotIcone";
import EngineeringIcone from "../components/EngineeringIcone";
import CommaIcone from "../components/CommaIcone";
import image_3 from "../assets/images/image_3.jpg";
import image_2 from "../assets/images/image_2.png";
import image_4 from "../assets/images/image_4.jpeg";
import image_5 from "../assets/images/image_5.jpeg";
import image_6 from "../assets/images/image_6.jpeg";
import image_7 from "../assets/images/image_7.png";
import image_8 from "../assets/images/image_8.jpeg";
import image_9 from "../assets/images/image_9.jpeg";

// import "./home.css";
//color: #aea16a !important;
const Container = styled.div`
  width: 100vw;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: minmax(50px, auto) 1fr;
  /* grid-auto-rows: 250px; */
`;

const ImageHero = styled.div`
  background-color: pink;
  width: 100%;
  grid-column: 3 / 22;
  grid-row: 2 / 2;

  display: grid;
  justify-self: end;
  align-self: end;
  z-index: 1;

  img {
    width: 918px;
    height: 480px;
    /* object-fit: contain; */
  }
`;

const TitleHero = styled.div`
  width: 100%;
  grid-column: 13 / 21;
  grid-row: 2/3;
  color: #fff;
  margin: 30px;
  z-index: 3;
  display: grid;
  justify-self: end;
  align-self: center;
  z-index: 99;
  h1 {
    font-size: 50px;
    font-weight: 800;
    line-height: 3.5rem;
  }
  p {
    padding-top: 20px;
    font-size: 20px;
    font-family: 400;
    line-height: 2rem;
    letter-spacing: 1px;
  }
`;

const BOX1 = styled.div`
  width: 100%;
  height: 50px;

  grid-column: 8 / 22;
  grid-row: 1 / 1;
  background-color: #b9dfdf;
`;
const BOX2 = styled.div`
  width: 100%;
  height: 317px;
  grid-column: 8/ 22;
  grid-row: 3/4;
  background-color: #b9dfdf;
  position: relative;
`;
const BOX3 = styled.div`
  width: 100%;
  height: 846px;
  position: relative;
  grid-column: 8 / 22;
  grid-row: 4 / 5;
  background-color: #b9dfdf;
`;
const BOX4 = styled.div`
  width: 100%;
  height: 150px;
  margin-top: -70px;
  grid-column: 2 / 24;
  grid-row: 6 / 7;
  background-color: #1a1a1a;
  position: relative;
  z-index: -1;
`;
const Image2 = styled.div`
  width: 100%;
  position: absolute;
  left: 0px;

  img {
    width: 200px;
  }
`;
const BOX5 = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 5px;
  grid-column: 2 / 24;
  grid-row: 7 / 8;
  background-color: #1a1a1a;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: minmax(200px, auto);
  z-index: -10;
`;

const Image3 = styled.div`
  width: 100%;
  margin-top: 50px;
  grid-column: 2 / 7;
  grid-row: 1;
  display: grid;
  justify-self: end;
  align-self: start;
  img {
    width: 300px;
    background-color: transparent;
  }
`;

const GoldText = styled.div`
  width: 100%;
  grid-column: 5/ 9;
  grid-row: 1;

  h1 {
    color: #aea16a !important;
    font-weight: 800;
    font-size: 45px;
    text-align: center;
    margin-top: 20px;
    margin-right: 30px;
  }
`;
const BottomHText = styled.div`
  background-color: #fff;
  width: 100%;
  margin-top: 210px;
  padding: 25px 25px 50px 25px;
  grid-column: 7/ 13;
  grid-row: 1;
  display: grid;
  justify-self: end;
  align-self: center;
  p {
    padding: 25px;
  }
  button {
    width: 150px;
    display: inline-block;
    outline: none;
    border: none;
    background-color: #b9dfdf;
    padding: 0.7rem;
    cursor: pointer;
    margin-left: 30px;
  }
`;
const Image1 = styled.div`
  position: absolute;
  right: 0;
  img {
    width: 538px;
    height: 317px;
    z-index: 1;
  }
`;

const TitleHuman = styled.div`
  background-color: #fff;
  color: #111111;
  width: 100%;
  height: 700px;
  grid-column: 3 / 13;
  grid-row: 4/ 5;
  z-index: 15;
  padding: 50px 25px;
  margin-top: -80px;

  h2 {
    font-weight: 800;
    font-size: 35px;
    padding-top: 10px;
  }
  a {
    color: #111111;
    text-decoration: none;
    cursor: pointer;
  }

  p {
    padding: 5px 25px 25px 0;
    font-weight: 100;
    font-size: 22px;
  }
  button {
    display: inline-block;
    outline: none;
    border: none;
    background-color: #b9dfdf;
    padding: 0.7rem;
    cursor: pointer;
  }
`;

const TitleFUture = styled.div`
  margin-top: 50px;
  position: absolute;
  width: 400px;
  right: 0;

  h1 {
    font-weight: 300;
    font-size: 35px;
    margin-bottom: 30px;
  }
  p {
    padding: 0 25px 25px 0;
    font-weight: 100;
    font-size: 22px;
  }
`;

const ImagesGroup = styled.div`
  background-color: #fff;
  height: 300px;
  width: 300px;
  margin-top: 330px;
  grid-column: 17/23;
  grid-row: 4/ 5;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: repeat(3, 1fr);
  justify-items: end;
  align-items: center;
  z-index: 5;
  img {
    width: 150px;
    /* object-fit: contain; */
  }
`;
const ImagrHash = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  display: grid;
  justify-self: end;

  img {
    width: 225px;
  }
`;

const BOX6 = styled.div`
  background-color: #1a1a1a;
  width: 100%;
  padding: 50px;
  grid-column: 2/ 24;
  grid-row: 8 / 9;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 70px;
  color: #fff;
`;

const BOX7 = styled.div`
  background-color: #b9dfdf;
  width: 100%;
  margin-top: -70px;
  grid-column: 8/ 22;
  grid-row: 9 / 10;
  height: 850px;
  position: relative;

  p {
    padding: 0 100px;
    text-align: center;
    position: absolute;
    font-style: italic;
    font-weight: 500;
    bottom: 70px;
  }
`;

const Box8 = styled.div`
  width: 100%;
  grid-column: 3/ 23;
  grid-row: 9 / 10;
  height: 500px;
  display: grid;
  z-index: 99;
`;

const ImageText = styled.div`
  grid-column: 2/ 3;
  grid-row: 8;
  margin-top: 70px;

  img {
    width: 100px;
    object-fit: cover;
  }
`;
const Image4 = styled.div`
  margin-top: 50px;
  grid-column: 8 / 12;
  grid-row: 8;
  display: grid;
  img {
    justify-self: end;
    /* align-self: center; */
    width: 350px;
    height: 530px;
    object-fit: cover;
    object-position: 25% 0;
  }
`;
const Image5 = styled.div`
  margin-top: 100px;
  grid-column: 3/ 6;
  grid-row: 8;
  display: grid;
  img {
    justify-self: start;

    width: 250px;
    height: 400px;
    object-fit: cover;
    object-position: 18% 0;
  }
`;
const Image6 = styled.div`
  margin-top: 150px;
  grid-column: 6/ 8;
  grid-row: 8;
  display: grid;
  img {
    justify-self: center;
    width: 150px;
    height: 200px;
    object-fit: cover;
    object-position: 18% 0;
  }
`;
const Box9 = styled.div`
  background-color: #1a1a1a;
  width: 100%;
  margin-top: -70px;
  grid-column: 2/ 24;
  grid-row: 10 / 11;
  height: 500px;
  display: grid;
  position: relative;
  z-index: -1;

  hr {
    margin-top: 150px;
    height: 2px;
    background-color: #fff;
  }
  h5 {
    margin-right: 100px;
    text-align: right;
    color: #fff;
    position: absolute;
    bottom: 70px;
    right: 100px;
  }
  p {
    margin: 0 70px;
    color: #fff;
    font-weight: 100;
    font-size: 20px;
    position: absolute;
    top: 230px;
  }
  .comma {
    position: absolute;
    top: 90px;
    padding-left: 70px;
  }
`;

const Box10 = styled.div`
  background-color: #b9dfdf;
  width: 100%;
  /* margin-top: -70px; */
  grid-column: 2/ 24;
  grid-row: 11 / 12;
  height: 650px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  img {
    grid-column: 1/ 4;
    grid-row: 1;
    width: 435px;
    height: 451px;
    margin-top: -70px;
    margin-left: 50px;
    z-index: 99;
  }
  h1 {
    font-weight: 800;
    font-size: 45px;
    line-height: 3.5rem;
    margin-bottom: 10px;
  }
  p {
    /* padding: 0 25px 25px 0; */
    font-weight: 100;
    font-size: 20px;
  }
  .text-box {
    grid-column: 3/ 7;
    grid-row: 1;
    padding: 50px 50px 50px 170px;
    margin-right: 50px;
    position: relative;
    height: 650px;

    background-color: #fff;
  }
  .text-box::after {
    content: "";
    position: absolute;
    top: -200px;
    right: 0;
    height: 400px;
    width: 20px;
    background-color: #aea16a;
    z-index: 999;
  }
`;
// background-color: #b9dfdf;

const Box11 = styled.div`
  background-color: #ccc;
  width: 100%;
  /* margin-top: -70px; */
  grid-column: 2/ 24;
  grid-row: 13 / 14;
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr 423px 100px;
  img {
    display: grid;
    justify-self: end;
    width: 150px;
    height: 150px;
  }
  h1 {
    font-weight: 800;
    font-size: 35px;
  }
  h4 {
    text-align: right;
    font-weight: 400;
    font-size: 25px;
  }
  .box11 {
    grid-column: 2 /3;
    grid-row: span 1 / 1;
    background-color: #b9dfdf;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* place-self: center center; */
  }
`;

const Box12 = styled.div`
  background-color: #fff;
  width: 100%;
  /* margin-top: -70px; */
  grid-column: 2/ 24;
  grid-row: 14 / 15;
  height: 80vh;
  display: grid;
`;

function Home() {
  return (
    <Container>
      <ImageHero>
        <img src={coverStory} alt="coverStory" />
      </ImageHero>
      <TitleHero>
        <h1> Robots Are The Future</h1>
        <p>
          Recent research has found that people demand a much higher success
          rate from robots than from their flesh-and-bone counterparts.
        </p>
      </TitleHero>
      <TitleHuman>
        <h5>
          <a>TECHNOLOGY NEWS</a>
        </h5>
        <h2>Human-robot</h2>
        <p>
          In human-robot collaboration, the robot assists the human operator.
          This means: The machine does not replace the human, but complements
          his capabilities and relieves him of arduous tasks. These can include
          overhead work, for example, or the lifting of heavy loads. Autonomous,
          collaborative robots are also used to supply production workstations
        </p>
        <button>LEARN MORE</button>
      </TitleHuman>

      <ImagesGroup>
        <img src={robot} alt="robot" />
        <img src={robot2} alt="robot2" />
        <img src={robot2} alt="robot2" />
        <img src={robot} alt="robot" />
        <img src={robot2} alt="robot2" />
        <img src={robot} alt="robot" />
      </ImagesGroup>

      <BOX1></BOX1>
      <BOX2>
        <Image1>
          <img src={image_1} alt="image_1" />
        </Image1>
      </BOX2>
      <BOX3>
        <TitleFUture>
          <h1> FUTURE OF WORK</h1>
          <p>
            While much of the discourse around AI and automation has been
            concerned with the looming threat to the workforce...
          </p>
        </TitleFUture>
        <ImagrHash>
          <img src={hash1} alt="hash1" />
        </ImagrHash>
      </BOX3>
      <BOX4>
        {" "}
        <Image2>
          <img src={image_2} alt="image_2" />
        </Image2>
      </BOX4>
      <BOX5>
        <Image3>
          <img src={image_3} alt="happy-man" />
        </Image3>

        <GoldText>
          <h1>The robots of CES 2019</h1>
        </GoldText>
        <BottomHText>
          <p>
            Hitting the show floor at CES can be something of a challenge. There
            are so many choices, it’s almost impossible to figure out where to
            even start. So this year, I got to narrow my focus to just one area
            — robotics — and it made my job a lot easier. Or it should have.
            Turns out, there are so many choices in the field of robotics, I was
            back where I started.
          </p>
          <button>LEARN MORE</button>
        </BottomHText>
      </BOX5>
      <BOX6>
        <div>
          <RobotIcone />
          <h1>Robotization</h1>
          <p>
            When the first industrial revolution hit ipsum dolor sit amet,
            consectetur adipiscing elit nullam nunc justo sagittis suscipit
            ultrices.
          </p>
        </div>
        <div>
          <EngineeringIcone />
          <h1>Engineering</h1>
          <p>
            When the first industrial revolution hit ipsum dolor sit amet,
            consectetur adipiscing elit nullam nunc justo sagittis suscipit
            ultrices.
          </p>
        </div>
        <div>
          <Industry />
          <h1>Industry</h1>
          <p>
            When the first industrial revolution hit ipsum dolor sit amet,
            consectetur adipiscing elit nullam nunc justo sagittis suscipit
            ultrices.
          </p>
        </div>
      </BOX6>
      <BOX7>
        <p>
          Maximum flexibility in production. Relief of employees by performing
          ergonomically unfavorable work steps that could not previously be
          automated
        </p>
      </BOX7>
      <Box8>
        {" "}
        <ImageText>
          <img src={image_7} alt="image7" />
        </ImageText>
        <Image4>
          <img src={image_4} alt="image4" />
        </Image4>
        <Image5>
          <img src={image_5} alt="image5" />
        </Image5>
        <Image6>
          <img src={image_6} alt="imge6" />
        </Image6>
      </Box8>
      <Box9>
        <hr />
        <div className="comma">
          <CommaIcone />
        </div>
        <p>
          We need to know what the resources of the moon are. We have great
          evidence now because of different kinds of radar and spectroscopic
          analysis that people have been able to do. But we really do need to go
          visit there, and we can do that with a robot craft without any
          problem.{" "}
        </p>
        <h5>- Jeff Bezos -</h5>
      </Box9>
      <Box10>
        <img src={image_8} alt="image8" />
        <div className="text-box">
          <h1>Artificial Intelligence Robots And The Future Of Work</h1>
          <p>
            The number of robots in the world today is approaching 1,000,000,
            with almost half that number in Japan and just 15% in the US. A
            couple of decades ago, 90% of robots were used in car manufacturing,
            typically on assembly lines doing a variety of repetitive tasks.
            Today only 50% are in automobile plants, with the other half spread
            out among other factories, and many other industries.
          </p>
        </div>
      </Box10>
      <Box11>
        <img src={hash2} alt="hash2" />
        <div className="box11">
          <h4>AI PERSPECTIVES</h4>
          <h1>Robots and AI</h1>
        </div>
      </Box11>
      <Box12></Box12>
    </Container>
  );
}

export default Home;
