import React from "react";
import TGAwareLogo from "@/components/TGAwareLogo";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutsHTG() {
  return (
    <div className="w-[2160px] h-[3840px] mx-auto relative" style={{ background: "#F1ECEC" }}>
      {/* Header Section */}
      <div className="relative">
        {/* Top Tab */}
        <div className="absolute left-0 top-0 w-[632px] h-[177px]">
          <div className="w-full h-full bg-white rounded-br-[40px]"></div>
          <div className="absolute left-[100px] top-[48px] w-[395px] h-[82px]">
            <h1 className="text-[68px] font-normal leading-none" style={{ color: "#B82026" }}>
              About <span className="font-normal">sHTG</span>
            </h1>
          </div>
        </div>

        {/* TGAware Logo */}
        <div className="absolute left-[1892px] top-[56px]">
          <TGAwareLogo className="w-[167px] h-[70px]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-[152px] pt-[341px]">
        {/* Main Paragraph */}
        <div className="w-[1858px] h-[430px] mb-[164px]">
          <p className="text-[65px] leading-[86px] font-normal" style={{ color: "#221F20" }}>
            Severe hypertriglyceridemia (sHTG) is an{" "}
            <span className="font-bold" style={{ color: "#B82026" }}>underappreciated</span>{" "}
            disease that affects millions and requires urgent action, as highlighted in expert publications by the{" "}
            <span className="font-bold" style={{ color: "#B82026" }}>American Heart Association</span>, the{" "}
            <span className="font-bold" style={{ color: "#B82026" }}>American College of Cardiology</span>, the{" "}
            <span className="font-bold" style={{ color: "#B82026" }}>Endocrine Society</span>, and the{" "}
            <span className="font-bold" style={{ color: "#B82026" }}>National Lipid Association</span>
            <span style={{ color: "#B82026" }}>1-7</span>
          </p>
        </div>

        {/* Expert Publications Header */}
        <div className="text-center mb-[100px]">
          <p className="text-[60px] font-normal leading-normal text-black">
            <span className="font-bold">Expert publications underscore the urgent need to lower triglyceride levels that are ≥500 mg/dL</span>
            <span className="font-normal">1,5-7</span>
          </p>
        </div>

        {/* Organizations Section */}
        <div className="relative mb-[476px]">
          {/* First Row */}
          <div className="flex justify-between mb-[296px]">
            {/* American Heart Association */}
            <div className="w-[941px] h-[572px] relative">
              <div className="absolute left-0 top-0 w-[16px] h-[572px]">
                <svg width="16" height="572" viewBox="0 0 16 572" fill="none">
                  <path d="M8 0V572" stroke="url(#paint0_linear_18_19)" strokeWidth="15"/>
                  <defs>
                    <linearGradient id="paint0_linear_18_19" x1="8.52076" y1="572" x2="8.5098" y2="-9.76866e-06" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#591012"/>
                      <stop offset="1" stopColor="#B62026"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="ml-[72px]">
                <h3 className="text-[60px] font-bold leading-[70px] mb-[13px]" style={{ color: "#B82026" }}>
                  The American Heart Association
                </h3>
                <p className="text-[45px] font-normal leading-[63px]" style={{ color: "#221F20" }}>
                  has detailed in an advisory that the primary goal of therapy is to reduce triglycerides to &lt;500 mg/dL5
                </p>
              </div>
            </div>

            {/* American College of Cardiology */}
            <div className="w-[902px] h-[572px] relative">
              <div className="absolute left-0 top-0 w-[16px] h-[572px]">
                <svg width="16" height="572" viewBox="0 0 16 572" fill="none">
                  <path d="M8 0V572" stroke="url(#paint0_linear_18_25)" strokeWidth="15"/>
                  <defs>
                    <linearGradient id="paint0_linear_18_25" x1="8.52076" y1="572" x2="8.5098" y2="-9.76866e-06" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#591012"/>
                      <stop offset="1" stopColor="#B62026"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="ml-[72px] pt-[37px]">
                <h3 className="text-[60px] font-bold leading-normal mb-[22px]" style={{ color: "#B82026" }}>
                  2021 American College of Cardiology Expert Consensus Report
                </h3>
                <p className="text-[45px] font-normal leading-[63px]" style={{ color: "#221F20" }}>
                  has stated that for patients with triglyceride levels ≥500 mg/dL, the priority is lowering triglycerides to reduce the risk of pancreatitis1
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex justify-between">
            {/* National Lipid Association */}
            <div className="w-[761px] relative">
              <div className="absolute left-0 top-0 w-[16px] h-[888px]">
                <svg width="16" height="888" viewBox="0 0 16 888" fill="none">
                  <path d="M8 0V888" stroke="url(#paint0_linear_18_30)" strokeWidth="15"/>
                  <defs>
                    <linearGradient id="paint0_linear_18_30" x1="8.52076" y1="888" x2="8.49434" y2="-1.47056e-05" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#591012"/>
                      <stop offset="1" stopColor="#B62026"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="ml-[72px] pt-[42px]">
                <h3 className="text-[60px] font-bold leading-normal mb-[99px]" style={{ color: "#B82026" }}>
                  The National Lipid Association
                </h3>
                <p className="text-[45px] font-normal leading-[63px]" style={{ color: "#221F20" }}>
                  has stated that the primary objective for treating patients with severe triglyceride elevation (≥500 mg/dL) is to prevent pancreatitis through nutrition and other lifestyle interventions, as well as pharmacotherapy when appropriate; atherosclerotic cardiovascular disease (ASCVD) risk reduction follows in priority7
                </p>
              </div>
            </div>

            {/* The Endocrine Society */}
            <div className="w-[829px] relative">
             <div className="absolute left-0 top-0 w-[16px] h-[888px]">
                <svg width="16" height="888" viewBox="0 0 16 888" fill="none">
                  <path d="M8 0V888" stroke="url(#paint0_linear_18_30)" strokeWidth="15"/>
                  <defs>
                    <linearGradient id="paint0_linear_18_30" x1="8.52076" y1="888" x2="8.49434" y2="-1.47056e-05" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#591012"/>
                      <stop offset="1" stopColor="#B62026"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="ml-[72px]">
                <h3 className="text-[60px] font-bold leading-[70px] mb-[49px]" style={{ color: "#B82026" }}>
                  The Endocrine Society
                </h3>
                <p className="text-[45px] font-normal leading-[63px]" style={{ color: "#221F20" }}>
                  has detailed in an advisory that the primary goal of therapy is to reduce triglycerides to &lt;500 mg/dL6
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section (absolute to match Figma) */}
        <div className="absolute left-[150px] top-[2605px] w-[2124px] h-[881px]">
          {/* Border Box */}
          <div className="absolute left-0 top-[500px] w-[1911px] h-[310px] border-[3px]" style={{ borderColor: "#B62026" }}></div>
          
          {/* Doctor & Patient Image */}
          <div className="absolute left-[964px] top-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d06be66ec3b2ea35f29bc202630fd819903f60c1?width=2092"
              alt="Doctor and patient consultation"
              className="w-[1046px] h-[810px] object-cover"
            />
          </div>

          {/* Magnifying Glass Icon */}
          <div className="absolute left-[51px] top-[578px]">
            <svg width="154" height="160" viewBox="0 0 154 160" fill="none">
              <path d="M73.7929 106.721C46.2163 115.941 15.9271 100.83 6.70718 73.2368C-2.51274 45.6603 12.5986 15.3877 40.1751 6.16774C67.7517 -3.05218 98.0409 12.0592 107.261 39.6523C114.251 60.5553 107.494 83.7382 90.3854 97.6346L150.215 156.249" stroke="#B82026" strokeWidth="6.65698" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M54.8868 28.2523C65.2883 26.4216 77.0545 33.6777 80.1667 44.0959C81.548 48.7058 88.7708 46.742 87.3895 42.0988C83.0625 27.6199 67.6848 18.4332 52.9063 21.0294C50.9092 21.3789 49.7942 23.8254 50.2935 25.6394C50.876 27.7364 52.9063 28.6018 54.9034 28.2523H54.8868Z" fill="#B82026"/>
            </svg>
          </div>

          {/* Vertical Line */}
          <div className="absolute left-[244px] top-[563px]">
            <svg width="4" height="184" viewBox="0 0 4 184" fill="none">
              <path d="M2 184L2.00001 -4.32134e-06" stroke="#B82026" strokeWidth="3"/>
            </svg>
          </div>

          {/* CTA Text */}
          <div className="absolute left-[284px] top-[564px] w-[810px] h-[182px] flex flex-col justify-center">
            <p className="text-[50px] font-normal leading-normal">
              <span className="font-bold" style={{ color: "#B82026" }}>sHTG carries serious risks demanding prompt identification and urgent intervention</span>
              <span style={{ color: "#B82026" }}>1-3,7</span>
            </p>
          </div>

          {/* Disclaimer */}
          <div className="absolute left-[1053px] top-[837px] w-[957px] h-[44px]">
            <p className="text-[28px] font-normal leading-[140%] text-center" style={{ color: "#221F20" }}>
              Not an actual patient or healthcare professional. Actor portrayals.
            </p>
          </div>

          {/* Horizontal Line */}
          <div className="absolute left-0 top-[810px]">
            <svg width="2010" height="16" viewBox="0 0 2010 16" fill="none" style={{ transform: "rotate(-90deg)" }}>
              <path d="M0 8L2010 8.00018" stroke="url(#paint0_linear_18_33)" strokeWidth="15"/>
              <defs>
                <linearGradient id="paint0_linear_18_33" x1="2010" y1="7.47942" x2="-2.59181e-05" y2="7.61458" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#591012"/>
                  <stop offset="1" stopColor="#B62026"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation Arrows (SVGs from Figma) */}
      <div
        className="absolute left-0 top-[1738px] w-[107px] h-[365px] rounded-r-[40px] flex items-center justify-center"
        style={{ background: "linear-gradient(176deg, #B62026 8.55%, #591012 97.69%)" }}
      >
        <svg width="45" height="69" viewBox="0 0 45 69" fill="none">
          <path d="M41 4L8 34.5L41 65" stroke="white" strokeWidth="10" />
        </svg>
      </div>

      <div
        className="absolute right-0 top-[1738px] w-[107px] h-[365px] rounded-l-[40px] flex items-center justify-center"
        style={{ background: "linear-gradient(176deg, #B62026 8.55%, #591012 97.69%)" }}
      >
        <svg width="45" height="69" viewBox="0 0 45 69" fill="none">
          <path d="M4 4L37 34.5L4 65" stroke="white" strokeWidth="10" />
        </svg>
      </div>

    </div>
  );
}
