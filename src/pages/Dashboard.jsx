import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

function Dashboard() {
  return (
    <div className="w-full h-dvh flex">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Dashboard;
