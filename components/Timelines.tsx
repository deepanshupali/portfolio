"use client";
import React, { useState } from "react"; // Import useState
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface DateProps {
  year: string;
}

const Date: React.FC<DateProps> = ({ year }) => {
  return <div>{year}</div>;
};

const Timeline: React.FC = () => {
  // Separate state variables for each timeline item
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const iconLists = [
    "/next.svg",
    "/tail.svg",
    "/ts.svg",
    "/mongodbi.svg",
    "/prisma.svg",
    "/firebase.svg",
    "framer.svg",
  ];

  const handleToggle1 = () => {
    setShowMore1(!showMore1);
  };

  const handleToggle2 = () => {
    setShowMore2(!showMore2);
  };

  return (
    <section className="h-auto">
      {" "}
      {/* Apply the dark theme class here */}
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <VerticalTimeline lineColor="">
        {/* First Work Experience at Binbag */}
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work z-50"
          contentStyle={{
            background: "var(--card)", // Use theme variables for background
            borderRadius: "24px",
          }}
          iconStyle={{
            // background: "var(--card-foreground)", // Use theme variable for icon background
            color: "white", // Use theme variable for icon color
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none",
            fontWeight: "700",
          }}
          icon={<Date year="2024" />}
        >
          <h1 className="text-start text-xl md:text-2xl font-bold">
            Binbag Pvt Ltd.
          </h1>
          <h2 className="text-start text-2xl !text-white mt-3 font-black">
            Frontend Engineer
          </h2>
          <p className="text-start text-white-100 mt-3 font-semibold">
            January 2024 - June 2024
          </p>
          <div className="flex">
            {iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={icon} alt="icon5" className="p-2 " />
              </div>
            ))}
          </div>

          <ul className="list-disc ml-5 leading-8">
            <li>
              Built Binbag website with Next.js, Tailwind CSS, Shadcn, Framer
              Motion, and Zod.
            </li>
            <li>
              Implemented a CMS for easy management of blogs and dynamic content
              sections like job openings.
            </li>

            {showMore1 && ( // Conditional rendering for additional content
              <>
                <li>
                  Integrated an inquiry form into Binbag’s CRM to streamline
                  customer interactions.
                </li>
                <li>
                  Developed a Markdown editor for efficient content creation
                  within the CMS.
                </li>
                <li>
                  Implemented a secure user authentication system with Google
                  reCAPTCHA using JWT.
                </li>
              </>
            )}
          </ul>

          <button
            onClick={handleToggle1}
            aria-expanded={showMore1} // Added for accessibility
            className="mt-3 text-purple underline cursor-pointer" // Add styling for the button
          >
            {showMore1 ? "Read Less" : "Read More"}
          </button>
        </VerticalTimelineElement>

        {/* Second Work Experience at Binbag */}
        {/* <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work z-50"
          contentStyle={{
            background: "var(--card)", // Use theme variables for background
            borderRadius: "24px",
          }}
          iconStyle={{
            background: "var(--card-foreground)", // Use theme variable for icon background
            color: "var(--foreground)", // Use theme variable for icon color
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none",
            fontWeight: "700",
          }}
          icon={<Date year="2024" />}
        >
          <h1 className="text-start text-xl md:text-2xl font-bold">
            Frontend Developer at Binbag
          </h1>
          <p className="text-start text-white-100 mt-3 !mb-3 font-semibold">
            January 2024 - June 2024
          </p>

          <ul className="list-disc ml-5 leading-8">
            <li>
              Built Binbag website with Next.js, Tailwind CSS, Shadcn, Framer
              Motion, and Zod.
            </li>
            <li>
              Implemented a CMS for easy management of blogs and dynamic content
              sections like job openings.
            </li>

            {showMore2 && ( // Conditional rendering for additional content
              <>
                <li>
                  Integrated an inquiry form into Binbag’s CRM to streamline
                  customer interactions.
                </li>
                <li>
                  Developed a Markdown editor for efficient content creation
                  within the CMS.
                </li>
                <li>
                  Implemented a secure user authentication system with Google
                  reCAPTCHA using JWT.
                </li>
              </>
            )}
          </ul>

          <button
            onClick={handleToggle2}
            aria-expanded={showMore2} // Added for accessibility
            className=" mt-3 text-blue-500 underline cursor-pointer" // Add styling for the button
          >
            {showMore2 ? "Read Less" : "Read More"}
          </button>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
