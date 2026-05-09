
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLazyVideo } from "../useLazyVideo";
import { BentoGrid } from "../Grid";
import { BentoRow } from "../Grid";
import { BentoCell } from "../Grid";
import './HomePage.css';
import ReactCompareImage from "react-compare-image";
import Modal from "../Modal";



export default function HomePage() {
  const [productSelectionModalOpen, setproductSelectionModalOpen] = useState(false);
  const [lightDarkModeModalOpen, setlightDarkModeModalOpen] = useState(false);
  const [logoModalOpen, setlogoModalOpen] = useState(false);
  const [logoFreemindModalOpen, setlogoFreemindModalOpen] = useState(false);
  const [chartModalOpen, setChartModalOpen] = useState(false);
  const [audienceModalOpen, setaudienceModalOpen] = useState(false);
  const chartVideoRef = useLazyVideo();
  const breathingVideoRef = useLazyVideo();
  const logoVideoRef = useLazyVideo();
  const logoFreemindVideoRef = useLazyVideo();
  const productSelectionVideoRef = useLazyVideo();
  const audienceVideoRef = useLazyVideo();
  const navigate = useNavigate();

  return (
    <div className="Home-page">
      <BentoGrid>

        {/* Row 1 – Type full */}
        <BentoRow type="full">
          <BentoCell>
            <div className="hero-cell">
              <video
                playsInline autoPlay loop muted src="/images/home images/gradient3.webm"
              />
              <div className="hero-content">
                <h1>Hi, I'm Dat Tran,</h1>
                <h1>A product designer & builder</h1>
                <p>Welcome to my portfolio</p>
              </div>
            </div>
          </BentoCell>
        </BentoRow>

        {/* Row 2 – Type full */}
        <BentoRow type="full">
          <BentoCell
            hoverable
            label="Inventory marketplace"
            href="/nvntrmrktplc">
            <img src='/images/home images/i-im.webp' loading="lazy" alt='' />
          </BentoCell>
        </BentoRow>

        {/* Row 3 – Type 1: two equal halves */}
        <BentoRow type="halves">
          <BentoCell
            hoverable
            label="Product selection page"
            href="/prdctpg">
            <img src='/images/home images/c-pp.webp' loading="lazy" alt='' />
          </BentoCell>
          <BentoCell
            hoverable
            label="FreeMind iOS app"
            href="/frmnd"
          >
            <div className="square-video-full">
              <video ref={breathingVideoRef} playsInline autoPlay loop muted data-src="/images/home images/f-br.mp4" />
            </div>
          </BentoCell>
        </BentoRow>

        {/* Row 4 – Type 2: three equal squares */}
        <BentoRow type="thirds">

          <BentoCell span={1}
            hoverable
            label="Product cards"
            onClick={() => setproductSelectionModalOpen(true)}
            style={{ cursor: "pointer" }}>
            <div className="square-video-full" >
              <video ref={productSelectionVideoRef} playsInline autoPlay loop muted data-src="/images/home images/p-s3.webm" />
            </div>
          </BentoCell>

          <BentoCell
            span={1}
            hoverable
            className="bento-cell--no-scale"
            label="Light and dark modes"
            onView={() => setlightDarkModeModalOpen(true)}
          >
            <div style={{ cursor: "pointer", width: "100%", height: "100%" }}>
              <ReactCompareImage
                leftImage="/images/home images/f-lm.png"
                rightImage="/images/home images/f-dm.png"
              />
            </div>
          </BentoCell>

          <BentoCell span={1}
            hoverable
            label="3D personal logo">
            <div className="square-video-full" onClick={() => setlogoModalOpen(true)} style={{ cursor: "pointer" }}>
              <video ref={logoVideoRef} playsInline autoPlay loop muted data-src="/images/home images/d-lg8.webm" />
            </div>
          </BentoCell>

        </BentoRow>

        {/* Row 5 – Type 1: two equal halves */}
        <BentoRow type="halves">

          <BentoCell
            hoverable
            label="Audience insights"
            href="/dncrcmmndtn">
            <img src='/images/home images/i-ai.webp' loading="lazy" alt='' />
          </BentoCell>

          <BentoCell
            hoverable
            label="Footfall measurement"
            href="/ftfllmsrmnt">
            <img src='/images/home images/i-fm.webp' loading="lazy" alt='' />
          </BentoCell>

        </BentoRow>

        {/* Row 6 – Type 1: two equal halves */}
        <BentoRow type="halves">

          <BentoCell
            hoverable
            label="Support center"
            href="/spprtcntr">
            <img src='/images/home images/i-sc.webp' loading="lazy" alt='' />
          </BentoCell>

          <BentoCell
            hoverable
            label="First party audience onboarding"
            href="/frstprtdncnbrdng">
            <img src='/images/home images/i-fpa.webp' loading="lazy" alt='' />
          </BentoCell>

        </BentoRow>

        {/* Row 7 – Type 2: three equal squares */}
        <BentoRow type="thirds">





          <BentoCell span={1}
            hoverable
            label="3D FreeMind logo">
            <div className="square-video-full" onClick={() => setlogoFreemindModalOpen(true)} style={{ cursor: "pointer" }}>
              <video ref={logoFreemindVideoRef} playsInline autoPlay loop muted data-src="/images/home images/f-lg3.webm" />
            </div>
          </BentoCell>
          <BentoCell span={1}
            hoverable
            label="Audience insights panel">
            <div className="square-video-full" onClick={() => setaudienceModalOpen(true)} style={{ cursor: "pointer" }}>
              <video ref={audienceVideoRef} playsInline autoPlay loop muted data-src="/images/home images/i-ai-panel.webm" />
            </div>
          </BentoCell>
          <BentoCell span={1}
            hoverable
            label="Cost guidance chart">
            <div className="square-video" onClick={() => setChartModalOpen(true)} style={{ cursor: "pointer" }}>
              <video ref={chartVideoRef} playsInline autoPlay loop muted data-src="/images/home images/i-im-c.webm" />
            </div>
          </BentoCell>
        </BentoRow>

        {/* Row 7 – Type 2: three equal squares */}
        <BentoRow type="thirds">

          <BentoCell span={1}>
            <div className="contact-content">
              <img src='/images/home images/contact-text.webp' loading="lazy" alt='' />
            </div>
          </BentoCell>

          <BentoCell
            span={1}
            hoverable
            label="View my LinkedIn"
            onView={() => window.open('https://www.linkedin.com/in/dattran6868/', '_blank')}
          >
            <div className="contact-content">
              <img src='/images/home images/linkedin.webp' loading="lazy" alt='' />
              <p>LinkedIn</p>
            </div>
          </BentoCell>

          <BentoCell
            span={1}
            hoverable
            label="Copy email address"
            onView={() => navigator.clipboard.writeText('dattientran6868@gmail.com')}
          >
            <div className="contact-content">
              <img src='/images/home images/mail.webp' loading="lazy" alt='' />
              <p>dattientran6868@gmail.com</p>
            </div>
          </BentoCell>

        </BentoRow>
      </BentoGrid>

      {/* Modals — outside BentoRow */}

      <Modal
        isOpen={productSelectionModalOpen}
        onClose={() => setproductSelectionModalOpen(false)}
        size="md"
        buttonLabel="View Production selection page"
        onButtonClick={() => navigate('/prdctpg')}
      >
        {productSelectionModalOpen && (
          <div>
            <video playsInline autoPlay loop muted src="/images/home images/p-s3.webm" />
          </div>
        )}
        <p>Product cards in the tile view that I explored during the design process of the product selection page redesign.</p>
      </Modal>

      <Modal
        isOpen={lightDarkModeModalOpen}
        onClose={() => setlightDarkModeModalOpen(false)}
        size="md"
        buttonLabel="View FreeMind app"
        onButtonClick={() => navigate('/frmnd')}
      >
        {lightDarkModeModalOpen && (
          <div style={{ margin: "0" }}>  {/* adjust -24px to match your modal's padding */}
            <ReactCompareImage
              leftImage="/images/home images/f-lm.webp"
              rightImage="/images/home images/f-dm.webp"
            />
          </div>
        )}
        <p>Light and dark modes for the Reflect view in the FreeMind app.</p>
      </Modal>

      <Modal
        isOpen={logoModalOpen}
        onClose={() => setlogoModalOpen(false)}
        size="md"
        onButtonClick={() => navigate('/freemind')}
      >
        {logoModalOpen && (
          <div>
            <video playsInline autoPlay loop muted src="/images/home images/d-lg8.webm" />
          </div>
        )}
        <p>3D metallic version of my logo</p>
      </Modal>

      <Modal
        isOpen={logoFreemindModalOpen}
        onClose={() => setlogoFreemindModalOpen(false)}
        size="md"
        onButtonClick={() => navigate('/freemind')}
      >
        {logoFreemindModalOpen && (
          <div>
            <video playsInline autoPlay loop muted src="/images/home images/f-lg3.webm" />
          </div>
        )}
        <p>Freemind logo with a glassmorphism design.</p>
      </Modal>

      <Modal
        isOpen={chartModalOpen}
        onClose={() => setChartModalOpen(false)}
        size="md"
        buttonLabel="View Inventory marketplace"
        onButtonClick={() => navigate('/nvntrmrktplc')}
      >
        {chartModalOpen && (
          <div>
            <video playsInline autoPlay loop muted src="/images/home images/i-im-c.webm" />
          </div>
        )}
        <p>The cost guidance chart showed users how bid price affected win rate in the Inventory Marketplace.</p>
      </Modal>

      <Modal
        isOpen={audienceModalOpen}
        onClose={() => setaudienceModalOpen(false)}
        size="md"
        buttonLabel="View Audience insights"
        onButtonClick={() => navigate('/nvntrmrktplc')}
      >
        {audienceModalOpen && (
          <div>
            <video className="square-video" playsInline autoPlay loop muted src="/images/home images/i-ai-panel.webm" />
          </div>
        )}
        <p>The audience insights panel where users can view the potential reach of their tactic and easily add audiences to achieve that reach.</p>
      </Modal>
    </div>
  );
}