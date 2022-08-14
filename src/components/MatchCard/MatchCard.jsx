import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MatchCard.css";

export default function MatchCard({ match }) {
  return (
    <div className="MatchCard">
      <Link to={`/match/${match._id}`}>
        <div style={{backgroundImage: `url(${match.image})`}}>
        </div>
        <h3>{match.displayName}</h3>
      </Link>
    </div>
  );
}
