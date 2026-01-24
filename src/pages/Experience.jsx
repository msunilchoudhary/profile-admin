import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import AddButton from "../components/AddButton";
import PageTitle from "../components/PageTitle";

function Experience() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <PageTitle
          title="Experiences"
          para="Core skills, technical strengths, and professional capabilities"
        />
        <AddButton txt="Experience" link="/add-experience" />
      </div>
      <div className="space-y-6">
        <ExperienceCard />
      </div>
    </>
  );
}

export default Experience;
