import CustomUmraAbout from "../../components/CustomUmraAbout/CustomUmraAbout";
import ExploreSlidePackages from "../../components/ExploreSlidePackages/ExploreSlidePackages.jsx/ExploreSlidePackages";
import HajjPackagesDetails from "../../components/HajjPackagesDetails/HajjPackagesDetails";
import HajjUmraCounts from "../../components/HajjUmraCounts/HajjUmraCounts";
import HomeHero from "../../components/HomeHero/HomeHero";
import SecurityAndSafetyInfo from "../../components/SecurityAndSafetyInfo/SecurityAndSafetyInfo";
import UmrahHajjPackages from "../../components/UmrahHajjPackages/UmrahHajjPackages";

const Home = () => {
  return (
    <div className=" ">
      <HomeHero />
      <SecurityAndSafetyInfo />
      <UmrahHajjPackages />
      <ExploreSlidePackages />
      <CustomUmraAbout/>
      <HajjUmraCounts/>
      <HajjPackagesDetails/>
    </div>
  );
};

export default Home;
