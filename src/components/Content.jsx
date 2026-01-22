import Topbar from "../components/Topbar";
import SecondaryBar from "./SecondaryBar";
import { testSupabaseConnection } from "../testSupabase";
import { register } from "../auth/auth";
import { useEffect } from "react";

function Content() {
  useEffect(() => {
    testSupabaseConnection();
  }, []);

  const handleRegister = async () => {
    const { data, error } = await register(
      "f.martinez1993@icloud.com",
      "123456",
    );

    console.log("REGISTER DATA:", data);
    console.log("REGISTER ERROR:", error);
  };

  return (
    <div className="w-full">
      <Topbar />
      <SecondaryBar />
      <div>
        <div style={{ padding: 20 }}>
          <button onClick={handleRegister}>Test Register</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
