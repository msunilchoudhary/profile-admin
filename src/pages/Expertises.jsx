import PageTitle from "../components/PageTitle";
import ExpertiseCard from "../components/ExpertiseCard";
import AddButton from "../components/AddButton";
import { expertises } from "../data";

function Expertises() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <PageTitle
          title="Expertises"
          para="Core skills, technical strengths, and professional capabilities"
        />
        <AddButton txt="Expertise" link="/add-expertise" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertises.length>0 && expertises.map((expertise) => <ExpertiseCard key={expertise.id} item={expertise} />)}      
        
      </div>
    </>
  );
}

export default Expertises;
