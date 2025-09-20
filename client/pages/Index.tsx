import TGAwareLogo from "@/components/TGAwareLogo";
import InfoCard from "@/components/InfoCard";
import NavigationBar from "@/components/NavigationBar";
import PeopleIcon from "@/components/icons/PeopleIcon";
import PancreasIcon from "@/components/icons/PancreasIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import StomachIcon from "@/components/icons/StomachIcon";
import PillIcon from "@/components/icons/PillIcon";

export default function Index() {
  return (
    <div className="w-[2160px] h-[3840px] bg-medical-red-complex mx-auto">
      {/* Hero Section */}
      <div className="relative px-[150px] pt-[232px] pb-[200px]">
        {/* Logo */}
        <div className="flex justify-center mb-[32px]">
          <TGAwareLogo className="w-[373px] h-[157px]" />
        </div>

        {/* Decorative line */}
        <div className="w-[1860px] mx-auto h-1 bg-medical-gold-gradient mb-[48px]"></div>

        {/* Main Heading */}
        <div className="text-center space-y-8 max-w-[1884px] mx-auto">
          <h1 className="text-white text-[120px] font-light leading-[140px] px-4 text-center">
            Severe hypertriglyceridemia (sHTG) and its dangers demand
          </h1>

          <div className="text-gradient-gold text-[150px] font-bold leading-[170px] overflow-visible">
            urgent action
            <span className="font-normal text-lg md:text-3xl lg:text-5xl xl:text-[120px] align-top">
              ¹
            </span>
          </div>
        </div>
      </div>

      {/* Information Cards Section */}
      <div className="px-[150px] space-y-16 pb-[300px]">
        <InfoCard
          icon={<PeopleIcon className="w-full h-full" />}
          onClick={() => console.log("People card clicked")}
        >
          sHTG is an <span className="font-bold">underappreciated</span> disease
          that affects millions and requires urgent action, as highlighted in
          expert publications by the{" "}
          <span className="font-bold">American Heart Association</span>, the{" "}
          <span className="font-bold">American College of Cardiology</span>, the{" "}
          <span className="font-bold">Endocrine Society</span>, and the{" "}
          <span className="font-bold">National Lipid Association</span>
          <span className="text-[24px] align-top">1-7</span>
        </InfoCard>

        <InfoCard
          icon={<PancreasIcon className="w-full h-full" />}
          onClick={() => console.log("Pancreas card clicked")}
        >
          The risk of{" "}
          <span className="font-bold">
            life-threatening acute pancreatitis (AP)
          </span>{" "}
          associated with sHTG is serious and demands urgent action
          <span className="text-[24px] align-top">8</span>
        </InfoCard>

        <InfoCard
          icon={<HeartIcon className="w-full h-full" />}
          onClick={() => console.log("Heart card clicked")}
        >
          sHTG{" "}
          <span className="font-bold">
            substantially increases a person's risk of atherosclerotic
            cardiovascular disease (ASCVD)
          </span>
          <span className="text-[24px] align-top">1,9</span>
        </InfoCard>

        <InfoCard
          icon={<StomachIcon className="w-full h-full" />}
          onClick={() => console.log("Stomach card clicked")}
        >
          The full <span className="font-bold">physical and mental impact</span>{" "}
          of sHTG on patients, from{" "}
          <span className="font-bold">
            metabolic dysfunction-associated steatohepatitis (MASH) to brain fog
          </span>
          , is likely underestimated
          <span className="text-[24px] align-top">10,11</span>
        </InfoCard>

        <InfoCard
          icon={<PillIcon className="w-full h-full" />}
          onClick={() => console.log("Pill card clicked")}
        >
          sHTG is{" "}
          <span className="font-bold">
            difficult to control, requiring vigilant management and urgent
            intervention
          </span>{" "}
          with standard-of-care treatment
          <span className="text-[24px] align-top">7,12</span>
        </InfoCard>
      </div>

      {/* Navigation Bar */}
      <NavigationBar />
    </div>
  );
}
