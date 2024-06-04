import "./Home.css";
import InvitationSection from "./sections/InvitationSection";
import PopularSection from "./sections/PopularSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import QuestionsSection from "./sections/QuestionsSection";
import PlaneDivision from "./sections/PlaneDivision";
import RegistrationSection from "./sections/RegistrationSection";

function Home() {
  return (
    <div>
      <InvitationSection />

      <PopularSection />

      <TestimonialsSection />

      <QuestionsSection />

      <PlaneDivision inverse={true} />

      <RegistrationSection />
    </div>
  );
}

export default Home;
