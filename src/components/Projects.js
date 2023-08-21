import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Barbie from "../assets/img/barbie.png";
import Spider from "../assets/img/spider.png";
import telaLogin from "../assets/img/tela-login.png";
import cardAnimal1 from "../assets/img/card-animal1.png";
import cardAnimal2 from "../assets/img/card-animal2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Tela de Login",
      description: "Design e Desenvolvimento",
      imgUrl: projImg1,
    },
    {
      title: "God Of War Ragnarok",
      description: "Design e Desenvolvimento",
      imgUrl: projImg2,
    },
    {
      title: "Harry Potter",
      description: "Design e Desenvolvimento",
      imgUrl: projImg3,
    },
    {
      title: "Bot do Discord",
      description: "Design e Desenvolvimento",
      imgUrl: projImg4,
    },
    {
      title: "Banner de Jogos",
      description: "Design e Desenvolvimento",
      imgUrl: projImg5,
    },
    {
      title: "Banner de Promoção",
      description: "Design e Desenvolvimento",
      imgUrl: projImg6,
    },
  ];

  const additionalProjects = [
    {
      title: "Jogo da Memória Barbie",
      description: "Design e Desenvolvimento",
      imgUrl: Barbie,
    },
    {
      title: "Quiz Homem-Aranha",
      description: "Design e Desenvolvimento",
      imgUrl: Spider,
    },
    {
      title: "Tela Login",
      description: "Design e Desenvolvimento",
      imgUrl: telaLogin,
    },
    {
      title: "Jogo Cartas Animais",
      description: "Design e Desenvolvimento",
      imgUrl: cardAnimal1,
    },
    {
      title: "Jogo Cartas Animais",
      description: "Design e Desenvolvimento",
      imgUrl: cardAnimal2,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projetos</h2>
                  <p>
                    "Estou entusiasmada em compartilhar essas criações, que
                    representam minha paixão pela programação e minha busca
                    constante por excelência técnica. Cada projeto é mais um
                    passo na minha jornada de desenvolvimento, e mal posso
                    esperar para continuar explorando novos horizontes e
                    desafios."
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {additionalProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* You can add more Tab.Pane for additional sets of projects */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Fundo" />
    </section>
  );
};
