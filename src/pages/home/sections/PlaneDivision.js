import "./PlaneDivision.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PlaneDivision({ inverse = false }) {
  return (
    <div className="mt-5 pt-4 w-100">
      <div
        className={
          "d-flex justify-content-center align-items-center " +
          (inverse ? "flex-row-reverse" : "")
        }
      >
        <div className="dashed-line-plane"></div>
        <FontAwesomeIcon
          icon={["fas", "fa-plane"]}
          className={inverse ? "me-2 fa-flip-horizontal" : "ms-2"}
        />
      </div>
    </div>
  );
}

export default PlaneDivision;
