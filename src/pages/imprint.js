import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import { Link } from "gatsby";
import { ProjectList } from "../components/ProjectList";
import { NavbarContainer } from "../components/navbar-container";
import { SectionContainerWrapper } from "../components/section-container-wrapper";
import { LeadContainerHeading } from "../components/lead-container-heading";

const HrefLink = styled.a`
  text-decoration: none;
  color: rgba(64, 150, 196, 0.8);
  border-bottom: 2px solid rgba(64, 150, 196, 0.1);

  :hover {
    color: rgba(64, 150, 196, 0.9);
    border-bottom: 2px solid rgba(64, 150, 196, 0.9);
  }
`;

const Navbar = styled.div`
  max-width: 800px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const LeadContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LeadContainerParapraph = styled.p`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 18px;
  line-height: 28px;
  color: rgba(43, 55, 62, 0.8);
  margin-top: ${props => (props.noMarginTop ? "0px" : "1.3em")};
`;

const SectionContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  // padding-top: 40px;
`;

const SectionHeading = styled.h3`
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  font-size: 32px;
  color: rgb(43, 55, 62);
  margin-bottom: 32px;
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItemL = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
  padding: 15px 12px;
`;

const ListItem = styled.li`
  display: flex;
  border-radius: 3px;

  &:hover {
    background-color: rgba(78, 158, 200, 0.07);
  }
`;

const ListItemLink = styled.span`
  color: rgba(43, 55, 62, 0.8);
  align-self: center;
  padding-left: 0.618em;

  font-size: 22px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  // color: palevioletred;
  // font-weight: bold;
  color: rgba(64, 150, 196, 0.5);
  font-weight: 300;
  font-family: Lato, sans-serif;
  margin-left: 1em;
  line-height: 2em;
  text-decoration: none;

  :hover {
    color: rgba(64, 150, 196, 1);
  }
`;

const MainStyledLink = styled(Link)`
  margin: 0;
  padding: 0;
  color: #4096c4;
  text-transform: uppercase;
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 24px;
  text-decoration: none;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  align-self: center;
`;

const getPostList = postEdges => {
  const postList = [];
  postEdges.forEach(postEdge => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead
    });
  });
  return postList;
};

const WorkInProgress = styled.p`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 22px;
  line-height: 35px;
  color: rgba(43, 55, 62, 0.8);
`;

const FormLabel = styled.label`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 18px;
  line-height: 28px;
  color: rgba(43, 55, 62, 0.8);
  margin-top: 0.61em;
`;

const FormInput = styled.input`
  border: 2px solid rgba(43, 55, 62, 0.4);
  padding: 8px 9px;
  border-radius: 6px;
  max-width: 500px;
  color: rgba(43, 55, 62, 0.8);

  :focus {
    outline: none;
    border-color: rgba(64, 150, 196, 0.8);
  }
`;

const FormTextarea = styled.textarea`
  border: 2px solid rgba(43, 55, 62, 0.4);
  padding: 8px 9px;
  border-radius: 6px;
  color: rgba(43, 55, 62, 0.8);

  :focus {
    outline: none;
    border-color: rgba(64, 150, 196, 0.8);
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FormContainerGutted = styled(FormContainer)`
  margin-right: 15px;
`;

const FormDoubleContainer = styled.div`
  display: flex;
`;

const SubmitButton = styled.button`
  -webkit-appearance: none;
  display: inline-block;
  // border: 2px solid rgba(64,150,196,0.8);
  border: 0;
  border-radius: 4px;
  background: rgba(64, 150, 196, 0.8);
  color: #fff;
  font-weight: 600;
  font-family: Lato;
  font-size: 1.1rem;
  text-transform: none;
  padding: 0.6rem 0.9rem;
  margin: 0 0 0.5rem;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
  margin-top: 1em;
`;

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const postList = getPostList(postEdges);

    return (
      <Layout>
        <Helmet>
          <title>{`Imprint of Kevin Peter's homepage`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <SEO />
        <NavbarContainer />
        <SectionContainerWrapper>
          <SectionContainer>
            <LeadContainerHeading>
              Impressum von Kevin Peters
            </LeadContainerHeading>
            <LeadContainerParapraph>
              Angaben gemäß § 5 TMG
            </LeadContainerParapraph>
            <LeadContainerParapraph>Kevin Peters</LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              Sprengelstr. 12
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              13353 Berlin
            </LeadContainerParapraph>
            <LeadContainerParapraph>
              <strong>Vertreten durch: </strong>
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              Kevin Peters
            </LeadContainerParapraph>
            <LeadContainerParapraph>
              <strong>Kontakt:</strong>
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              Telefon: -/-
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              Fax: -/-
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              E-Mail:{" "}
              <HrefLink href="mailto:kevinigeligeligel@gmail.com">
                kevinigeligeligel@gmail.com
              </HrefLink>
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              <strong>Umsatzsteuer-ID: </strong>
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
              -/-
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              <strong>Wirtschafts-ID: </strong>
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>-/-</LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              <strong>Aufsichtsbehörde:</strong>
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>-/-</LeadContainerParapraph>
            <LeadContainerParapraph>
              <strong>Haftungsausschluss: </strong>
            </LeadContainerParapraph>
            <LeadContainerParapraph>
              <strong>Haftung für Inhalte</strong>
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
              sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </LeadContainerParapraph>
            <LeadContainerParapraph>
              <strong>Haftung für Links</strong>
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </LeadContainerParapraph>
            <LeadContainerParapraph>
              <strong>Urheberrecht</strong>
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </LeadContainerParapraph>
            <LeadContainerParapraph>
              <strong>Datenschutz</strong>
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
              ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
              bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
              angeforderter Werbung und Informationsmaterialien wird hiermit
              ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
              ausdrücklich rechtliche Schritte im Falle der unverlangten
              Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
            </LeadContainerParapraph>
            <LeadContainerParapraph>
              <strong>Google Analytics</strong>
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              Diese Website benutzt Google Analytics, einen Webanalysedienst der
              Google Inc. (''Google''). Google Analytics verwendet sog.
              ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Website durch Sie
              ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre
              Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an
              einen Server von Google in den USA übertragen und dort
              gespeichert. Google wird diese Informationen benutzen, um Ihre
              Nutzung der Website auszuwerten, um Reports über die
              Websiteaktivitäten für die Websitebetreiber zusammenzustellen und
              um weitere mit der Websitenutzung und der Internetnutzung
              verbundene Dienstleistungen zu erbringen. Auch wird Google diese
              Informationen gegebenenfalls an Dritte übertragen, sofern dies
              gesetzlich vorgeschrieben oder soweit Dritte diese Daten im
              Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre
              IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie
              können die Installation der Cookies durch eine entsprechende
              Einstellung Ihrer Browser Software verhindern; wir weisen Sie
              jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
              sämtliche Funktionen dieser Website voll umfänglich nutzen können.
              Durch die Nutzung dieser Website erklären Sie sich mit der
              Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
              beschriebenen Art und Weise und zu dem zuvor benannten Zweck
              einverstanden.
            </LeadContainerParapraph>
            <LeadContainerParapraph>
              <strong>Google AdSense</strong>
            </LeadContainerParapraph>
            <LeadContainerParapraph noMarginTop>
              Diese Website benutzt Google Adsense, einen Webanzeigendienst der
              Google Inc., USA (''Google''). Google Adsense verwendet sog.
              ''Cookies'' (Textdateien), die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Website durch Sie
              ermöglicht. Google Adsense verwendet auch sog. ''Web Beacons''
              (kleine unsichtbare Grafiken) zur Sammlung von Informationen.
              Durch die Verwendung des Web Beacons können einfache Aktionen wie
              der Besucherverkehr auf der Webseite aufgezeichnet und gesammelt
              werden. Die durch den Cookie und/oder Web Beacon erzeugten
              Informationen über Ihre Benutzung dieser Website (einschließlich
              Ihrer IP-Adresse) werden an einen Server von Google in den USA
              übertragen und dort gespeichert. Google wird diese Informationen
              benutzen, um Ihre Nutzung der Website im Hinblick auf die Anzeigen
              auszuwerten, um Reports über die Websiteaktivitäten und Anzeigen
              für die Websitebetreiber zusammenzustellen und um weitere mit der
              Websitenutzung und der Internetnutzung verbundene Dienstleistungen
              zu erbringen. Auch wird Google diese Informationen gegebenenfalls
              an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder
              soweit Dritte diese Daten im Auftrag von Google verarbeiten.
              Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der
              Google in Verbindung bringen. Das Speichern von Cookies auf Ihrer
              Festplatte und die Anzeige von Web Beacons können Sie verhindern,
              indem Sie in Ihren Browser-Einstellungen ''keine Cookies
              akzeptieren'' wählen (Im MS Internet-Explorer unter ''Extras >
              Internetoptionen > Datenschutz > Einstellung''; im Firefox unter
              ''Extras > Einstellungen > Datenschutz > Cookies''); wir weisen
              Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls
              nicht sämtliche Funktionen dieser Website voll umfänglich nutzen
              können. Durch die Nutzung dieser Website erklären Sie sich mit der
              Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
              beschriebenen Art und Weise und zu dem zuvor benannten Zweck
              einverstanden.
            </LeadContainerParapraph>
            <LeadContainerParapraph>
              Website Impressum von{" "}
              <HrefLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.kevinpeters.net"
              >
                kevinpeters.net
              </HrefLink>
            </LeadContainerParapraph>
          </SectionContainer>
        </SectionContainerWrapper>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query Imprint {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
