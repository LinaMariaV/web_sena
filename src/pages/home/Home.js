import "./Home.css";
import InvitationSection from "./sections/InvitationSection";
import { useSelector } from "react-redux";
import ButtonsSection from "./sections/ButtonsSection";
import PopularSection from "./sections/PopularSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import QuestionsSection from "./sections/QuestionsSection";
import PlaneDivision from "./sections/PlaneDivision";
import RegistrationSection from "./sections/RegistrationSection";

function Home() {
  const loginstatus = useSelector((state) => state.auth.is_logged);

  return (
    <div>
      <InvitationSection />

      {!loginstatus && <ButtonsSection />}

      <PopularSection />

      <TestimonialsSection />

      <PlaneDivision />

      <QuestionsSection />

      <PlaneDivision inverse={true} />

      <RegistrationSection />
    </div>
  );
}

export default Home;
