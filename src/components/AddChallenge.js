import axios from "axios";
import { useState } from "react";

function AddChallenge({ onChallengeAdded }) {
  const [month, setMonth] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    //how you want to handle submit..
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/challenges", {
        month,
        description,
      });
      setMonth("");
      setDescription("");
      onChallengeAdded();
    } catch (error) {
      console.error("Error adding challenges", error);
    }
  };
  return (
    //returns a form
    <div className="card my-5">
      <div className="card-header">Add New Challenge</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="month" className="form-label">
              Month
            </label>
            <input
              type="text"
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
              className="form-control"
              placeholder="eg. January"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="description" form-label>
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="form-control"
              placeholder="Describe the Challenge"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddChallenge;
