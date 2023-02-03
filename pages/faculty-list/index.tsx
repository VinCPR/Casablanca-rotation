import Head from "next/head";
import FacultyListPage from "../../src/containers/FacultyListPage";

export default function StudentList() {
  return (
    <>
      <Head>
        <title>Attending List</title>
        <meta property="og:title" content="Attending List" key="title"></meta>
      </Head>
      <FacultyListPage />
    </>
  );
}
