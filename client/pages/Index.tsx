import React, { useEffect, useState } from "react";
import TGAwareLogo from "@/components/TGAwareLogo";
import InfoCard from "@/components/InfoCard";
import PeopleIcon from "@/components/icons/PeopleIcon";
import PancreasIcon from "@/components/icons/PancreasIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import StomachIcon from "@/components/icons/StomachIcon";
import PillIcon from "@/components/icons/PillIcon";

export default function Index() {
  const cards = [
    {
      icon: <PeopleIcon className="w-full h-full" />,
      content: (
        <>
          sHTG is an <span className="font-bold">underappreciated</span> disease
          that affects millions and requires urgent action, as highlighted in
          expert publications by the{" "}
          <span className="font-bold">American Heart Association</span>, the{" "}
          <span className="font-bold">American College of Cardiology</span>, the{" "}
          <span className="font-bold">Endocrine Society</span>, and the{" "}
          <span className="font-bold">National Lipid Association</span>
          <span className="text-[24px] align-top">1-7</span>
        </>
      ),
    },
    {
      icon: <PancreasIcon className="w-full h-full" />,
      content: (
        <>
          The risk of{" "}
          <span className="font-bold">
            life-threatening acute pancreatitis (AP)
          </span>{" "}
          associated with sHTG is serious and demands urgent action
          <span className="text-[24px] align-top">8</span>
        </>
      ),
    },
    {
      icon: <HeartIcon className="w-full h-full" />,
      content: (
        <>
          sHTG{" "}
          <span className="font-bold">
            substantially increases a person's risk of atherosclerotic
            cardiovascular disease (ASCVD)
          </span>
          <span className="text-[24px] align-top">1,9</span>
        </>
      ),
    },
    {
      icon: <StomachIcon className="w-full h-full" />,
      content: (
        <>
          The full <span className="font-bold">physical and mental impact</span>{" "}
          of sHTG on patients, from{" "}
          <span className="font-bold">
            metabolic dysfunction-associated steatohepatitis (MASH) to brain fog
          </span>
          , is likely underestimated
          <span className="text-[24px] align-top">10,11</span>
        </>
      ),
    },
    {
      icon: <PillIcon className="w-full h-full" />,
      content: (
        <>
          sHTG is{" "}
          <span className="font-bold">
            difficult to control, requiring vigilant management and urgent
            intervention
          </span>{" "}
          with standard-of-care treatment
          <span className="text-[24px] align-top">7,12</span>
        </>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // ensure activeIndex never out of bounds if cards length changes
    if (activeIndex >= cards.length) setActiveIndex(0);
  }, [cards.length, activeIndex]);

  const handleAdvance = (i: number) => {
    setActiveIndex((i + 1) % cards.length);
  };

  return (
    <div className="w-[2160px] h-[3840px] bg-medical-red-complex mx-auto">
      {/* Hero Section */}
      <div className="relative px-[150px] pt-[232px] pb-[200px] overflow-visible z-hero">
        {/* Logo */}
        <div className="flex justify-center mb-[32px]">
          <TGAwareLogo className="w-[373px] h-[157px]" />
        </div>

        {/* Decorative line */}
        <div className="w-[1860px] mx-auto h-1 bg-medical-gold-gradient mb-[48px]"></div>

        {/* Main Heading */}
        <div className="text-center space-y-8 max-w-[1884px] mx-auto overflow-visible">
          <h1 className="text-white text-[120px] font-light leading-[140px] px-4 text-center">
            Severe hypertriglyceridemia (sHTG) and its dangers demand
          </h1>

          <div className="text-gradient-gold text-[150px] font-bold leading-[220px] overflow-visible inline-block align-baseline pb-[40px]">
            urgent action
            <span className="font-normal text-[48px] align-top">¹</span>
          </div>
        </div>
      </div>

      {/* Information Cards Section */}
      <div className="flex flex-col items-center space-y-16 pb-[300px]">
        {cards.map((c, i) => (
          <InfoCard
            key={i}
            icon={c.icon}
            onClick={() => setActiveIndex(i)}
            active={activeIndex === i}
            onProgressComplete={() => handleAdvance(i)}
          >
            {c.content}
          </InfoCard>
        ))}
      </div>
    </div>
  );
}
