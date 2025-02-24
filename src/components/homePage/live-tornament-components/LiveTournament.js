"use client";

import { gamesBtn } from "@/utils/libs";
import "../../../styles/home/LiveTournament.css";
import { useState } from "react";
import LiveStreaming from "./LiveStreaming";
import TopTeams from "@/components/top-teams-ranking/TopTeams";
import Tournaments from "@/components/tournaments-components/Tournaments";

const LiveTournament = () => {
  const [selected, setSelected] = useState("ALL");

  const handleSelected = (btn) => {
    setSelected(btn);
  };

  return (
    <div className="live-tournament-container">
      <h1>Live Tournament</h1>
      <div className="games-btn-container">
        {gamesBtn.map((btn) => (
          <button
            onClick={() => handleSelected(btn)}
            className={`${selected === btn ? "active-btn" : ""}`}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="components-container">
        <div className="left-block">
          <LiveStreaming />
          <TopTeams />
        </div>
        <Tournaments />
      </div>
    </div>
  );
};

export default LiveTournament;
