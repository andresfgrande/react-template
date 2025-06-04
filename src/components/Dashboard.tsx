import ToggleButton from "./ToggleButton";
import "../styles/dashboard.css";

export default function Dashboard() {
    return(
        <div className="dashboard">
          <header className="dashboard-header">
            <ToggleButton></ToggleButton>
          </header>
      </div>
    )
}