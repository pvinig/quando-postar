import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import SocialMedias from "../components/SocialMedias";
import { getSuggestedHours } from "../utils/suggestedHours";
import { Helmet } from "react-helmet";
import Segments from "../components/Segments";
import { getSocialMedia } from "../utils/socialMedias";
import { getSegment } from "../utils/segments";

const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
   background: linear-gradient(#c51162, #fd558f);
   color: #FFF;
   font-family: 'Nunito Sans', sans-serif;
 }

 h1 {
   text-transform: uppercase;
   text-align: center;
   margin-bottom: 10px;
   font-weight: 300;
 }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;
`;

const SuggestedDays = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  justify-content: center;
  align-items: center;
`;

const SuggestedDay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: 10px;

  strong {
    font-weight: bold;
    text-transform: uppercase;
  }

  ul {
    list-style-type: none;
    margin-left: 10px;
    display: flex;

    li {
      margin-left: 10px;
    }
  }
`;

const SuggestedDayWrapper = styled.div`
  background: #fff;
  color: #c51162;
  display: block;
  padding: 20px;
  border-radius: 10px;

  h1 {
    margin-bottom: 20px;
  }
`;

const Logo = styled.a`
  font-weight: 800;
  font-size: 28px;
  letter-spacing: 0.5px;
  margin-bottom: 30px;
  color: #FFF;
  text-decoration: none;
  text-transform: uppercase;

  small {
    font-size: 60%;
  }
`;

const TextBlock = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: block;
  padding: 70px;
  @media (min-width:550px){
    padding:100px;
    text-align: justify;
  }

  p {
    font-weight: 300;
    line-height: 1.75;
    font-size: 22px;
    margin-bottom: 30px;
  }

  a {
    color: #fff;
    font-weight: 700;
  }
`;

const Footer = styled.footer`
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: lowercase;

  a {
    color: #FFF;
  }
`;

const titleVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const IndexPage = () => {
  const [socialMedia, setSocialMedia] = useState("");
  const [segment, setSegment] = useState("");

  return (
    <>
      <Container>
        <GlobalStyle />
        <Helmet
          title="Qual o melhor horário para postar nas redes sociais? Quando Postar"
          defer={false}
        >
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap"
          />
        </Helmet>
        <Logo href="https://quandopostar.com.br" title="Qual o melhor horário para postar nas redes sociais? Quando Postar">
          QuandoPostar<small>.com.br</small>
        </Logo>
        <AnimatePresence>
          {!socialMedia && (
            <motion.h1
              variants={titleVariant}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              Qual rede social você pretende postar?
            </motion.h1>
          )}
        </AnimatePresence>
        <SocialMedias value={socialMedia} setValue={setSocialMedia} />
        <AnimatePresence>
          {socialMedia && !segment && (
            <motion.h1
              variants={titleVariant}
              initial="hidden"
              animate="visible"
            >
              {getSocialMedia(socialMedia).label}, Ótimo! Qual o seu segmento?
            </motion.h1>
          )}
        </AnimatePresence>
        {socialMedia && <Segments value={segment} setValue={setSegment} />}

        {socialMedia && segment && (
          <SuggestedDayWrapper>
            <AnimatePresence>
              {socialMedia && segment && (
                <motion.h1
                  style={{ maxWidth: 640 }}
                  variants={titleVariant}
                  initial="hidden"
                  animate="visible"
                >
                  Os melhores horários para
                  <br />
                  <strong>{getSocialMedia(socialMedia).label}</strong> na área
                  de <strong>{getSegment(segment).label}</strong>:
                </motion.h1>
              )}
            </AnimatePresence>
            <AnimatePresence>
              <SuggestedDays>
                {getSuggestedHours(socialMedia, segment).map(
                  ({ day, hours }) => (
                    <SuggestedDay>
                      <strong>{day}</strong>
                      <ul>
                        {hours.map((hour) => (
                          <li>{hour}</li>
                        ))}
                      </ul>
                    </SuggestedDay>
                  )
                )}
              </SuggestedDays>
            </AnimatePresence>
          </SuggestedDayWrapper>
        )}
      </Container>
      <Container>
        <TextBlock>
          <p>
            De 2020 para 2022, muita coisa mudou nas{" "}
            <strong>mídias sociais</strong>. Elas se tornaram ainda mais
            importantes para as pessoas e marcas que querem manter uma conexão
            instantânea com seu público. As <strong>mídias sociais</strong>{" "}
            servem especialmente para identificar novas tendências e
            preferências e estar atento aos eventos atuais.
          </p>
          <p>
            Muitas empresas precisaram se adaptar a esta rápida transformação
            digital que a pandemia do <a href="https://covid.saude.gov.br/" title="Saiba mais sobre o Covid-19 no Brasil">Covid-19</a> exigiu de todos
            nós. Com isso em mente, o{" "}
            <a
              href="https://quandopostar.com.br"
              title="Qual o melhor horário pra postar nas redes sociais?"
            >
              quandopostar.com.br
            </a>{" "}
            foi elaborado para quem quer atingir seu público-alvo em cheio,
            usufruindo o máximo possível dos{" "}
            <strong>algoritmos das redes sociais</strong>.
          </p>
          <p>
            Nós trabalhamos arduamente para identificar{" "}
            <strong>quais são os melhores horários para postar</strong> nas
            redes sociais. Este é um processo extenso, que está sendo mantido e
            monitorado diariamente.
          </p>
          <p>
            Muitas pessoas tem dúvidas sobre qual é o melhor momento para postar
            nas redes sociais. Esta é a <strong>ferramenta ideal</strong> para
            sanar a dúvida dos usuários sobre quando é a melhor hora pra postar.
          </p>
          <p>
            Se você está procurando uma{" "}
            <strong>referência prática e rápida</strong> para encontrar quais
            são os melhores horários para postar nas{" "}
            <strong>mídias sociais</strong>, você encontrou.
          </p>
          <p>
            O{" "}
            <a
              href="https://facebook.com"
              title="Facebook - A rede social mais usada no mundo"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>{" "}
            é a rede social <strong>mais usada</strong> em todo o mundo. Então
            este é certamente um dos principais canais que as marcas devem usar
            para se comunicar com seu público-alvo.
          </p>
          <p>
            Saber o melhor horário para postar no{" "}
            <a
              href="https://facebook.com"
              title="Facebook - A rede social mais usada no mundo"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>{" "}
            é primordial para atingir o seu público-alvo no momento em que eles
            estão acessando as suas redes.
          </p>
          <p>
            O{" "}
            <a
              href="https://twitter.com"
              title="Twitter - A rede social mais informativa no mundo"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{" "}
            é a rede social <strong>mais informativa</strong> em todo o mundo. Então
            este é certamente um dos principais canais que as marcas devem usar
            para se comunicar imediatamentes com seu público-alvo.
          </p>
          <p>
            Saber o melhor horário para postar no{" "}
            <a
              href="https://twitter.com"
              title="Twitter - A rede social mais informativa no mundo"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{" "}
            é primordial para atingir o seu público-alvo no momento em que eles
            estão acessando as suas redes.
          </p>
          <p>
            O{" "}
            <a
              href="https://linkedin.com"
              title="LinkedIn - A rede social de trabalho nº 1 no mundo"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            é a principal rede social <strong>sobre trabalho</strong> em todo o mundo. Então
            este é certamente um dos principais canais que as marcas devem usar
            para se comunicar profissionalmente com seu público-alvo.
          </p>
          <p>
            Saber o melhor horário para postar no{" "}
            <a
              href="https://linkedin.com"
              title="LinkedIn - A rede social de trabalho nº 1 no mundo"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            é primordial para atingir o seu público-alvo no momento em que eles
            estão acessando as suas redes.
          </p>
        </TextBlock>
        <Footer><a href="https://quandopostar.com.br" title="Qual o melhor horário para postar nas redes sociais?">quandopostar.com.br</a> - Todos os Direitos Reservados.</Footer>
      </Container>
    </>
  );
};

export default IndexPage;
