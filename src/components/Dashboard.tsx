import ToggleButton from "./ToggleButton";
import UserList from "./UserList";
import "../styles/dashboard.css";

export default function Dashboard() {
    return(
        <div className="dashboard">
          <header className="dashboard-header">
            <ToggleButton></ToggleButton>
          </header>
          <UserList></UserList>
      </div>
    )
}