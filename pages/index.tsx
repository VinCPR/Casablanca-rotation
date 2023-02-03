import Head from "next/head";
import { useEffect, useState } from "react";
import LandingPage from "../src/containers/LandingPage";

export default function RouteToLandingPage() {
  const [role, setRole] = useState<String | null>("");
  useEffect(() => {
    if (localStorage.getItem("role_name")) {
      setRole(localStorage.getItem("role_name"));
    }
  }, []);
  return (
    <>
      {!role && (
        <Head>
          <title>Casablanca Clinical Rotation</title>
          <meta
            property="og:title"
            content="Casablanca Clinical Rotation"
            key="title"
          ></meta>
        </Head>
      )}
      {role === "admin" && (
        <Head>
          <title>Design Rotation</title>
          <meta
            property="og:title"
            content="Design Rotation"
            key="title"
          ></meta>
        </Head>
      )}
      {role === "student" && (
        <Head>
          <title>Rotation Schedule</title>
          <meta
            property="og:title"
            content="Rotation Schedule"
            key="title"
          ></meta>
        </Head>
      )}
      {role === "attending" && (
        <Head>
          <title>Rotation Schedule</title>
          <meta
            property="og:title"
            content="Rotation Schedule"
            key="title"
          ></meta>
        </Head>
      )}
      <LandingPage />
    </>
  );
}
