import AboutMe from "../components/AboutMe";
import AccountInfo from "../components/AccountInfo";
import PersonalDetails from "../components/PersonalDetails";
import ProfileCard from "../components/ProfileCard";
import RolesResponsibilities from "../components/RolesResponsibilities";

function Profile() { 
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <ProfileCard />
      <div className="lg:col-span-2 space-y-6">
        <PersonalDetails />
        <AboutMe />
        <RolesResponsibilities />
        <AccountInfo />
      </div>
    </div>
  );
}

export default Profile;
