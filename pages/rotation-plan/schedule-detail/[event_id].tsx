import * as React from "react";
import styles from "./index.module.css";
import Sidebar from "../../../src/components/Sidebar";
import { useRouter } from "next/router";
import Navbar from "../../../src/components/Navbar";
import { useState } from "react";
import EventDetailsPage from "../../../src/containers/EventDetailPage";

export default function RouteToViewSchedule() {
  const router = useRouter();
  const eventId = router.query["event_id"];

  function onClickBack() {
    history.back();
  }
  return (
    <div>
      <Navbar />
      <div style={{ position: "relative" }}>
        <Sidebar highlight={2} />
        <EventDetailsPage onClickBack={onClickBack} eventID={eventId} />
      </div>
    </div>
  );
}
