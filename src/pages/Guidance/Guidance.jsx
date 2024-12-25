import GuidanceGoal from "../../components/GuidanceGoal/GuidanceGoal";
import GuidanceHeroContent from "../../components/GuidanceHeroContent/GuidanceHeroContent";
import GuidancePrepares from "../../components/GuidancePrepare/GuidancePrepare";

import GuidanceSteps from "../../components/GuidanceStep/GuidanceStep";

import GuidanceUmrah from "../../components/GuidanceUmrah/GuidanceUmrah";

const Guidance = () => {
  return (
    <section className=" h-auto mt-28">
      <GuidanceHeroContent />
      <GuidanceUmrah />
      <GuidancePrepares />
      <GuidanceSteps />
      <GuidanceGoal />
    </section>
  );
};

export default Guidance;
