import React from "react";
import HeroCardLayout from "./HeroCardLayout";

const contents = [
  {
    title: "Dedicated Development Team",
    description:
      "Our dedicated development team aims to fulfill all your software, app, web, or other development needs.",
  },
  {
    title: "End-To-End Software Development",
    description:
      "From planning and coding to testing and releasing, we have a team of professionals for end-to-end software developmet.",
  },
  {
    title: "POC/MVP Development",
    description:
      "Mitigate risks, maximize success, and drive results transforming development strategy with MVP software development.",
  },
];

const HeroCard = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contents.map((content, index) => (
                <HeroCardLayout 
                key={index}
                title={content.title}
                description={content.description}
                />
            ))}
        </div>
      </div>
    </>
  );
};

export default HeroCard;
