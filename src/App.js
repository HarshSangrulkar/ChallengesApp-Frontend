import logo from "./logo.svg";
import "./App.css";
import ChallengeList from "./components/ChallengeList";
import { useEffect, useState } from "react";
import axios from "axios";
import AddChallenge from "./components/AddChallenge";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //using states
  const [challenges, setChallenges] = useState([]);

  const fetchChallenges = async () => {
    const response = await axios.get("http://localhost:8080/challenges");
    setChallenges(response.data);
  };

  useEffect(() => {
    fetchChallenges();
  }, []);

  const handleChallengeAdded = () => {
    //we call this handle method so that the list refreshes
    fetchChallenges();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Monthly Challenges App</h1>
      <AddChallenge onChallengeAdded={handleChallengeAdded}></AddChallenge>
      <ChallengeList challenges={challenges}></ChallengeList>
    </div>
  );
}

export default App;
