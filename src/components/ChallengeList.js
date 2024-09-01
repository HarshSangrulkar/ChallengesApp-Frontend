//this is the component that is gonna help me list down all the challenges created

import Challenge from "./Challenge";

function ChallengeList({ challenges }) {
  return (
    <div className="list-group">
      {challenges.map((challenge) => (
        <Challenge key={challenge.id} challenge={challenge}></Challenge>
      ))}
    </div>
  );
}

export default ChallengeList;
