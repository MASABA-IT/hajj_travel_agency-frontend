import ExploreSlidePackages from "../../components/ExploreSlidePackages/ExploreSlidePackages.jsx/ExploreSlidePackages";
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
    </div>
  );
};

export default Home;
