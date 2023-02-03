import Head from "next/head";
import StudentListPage from "../../src/containers/StudentListPage";

export default function StudentList() {
  return (
    <>
      <Head>
        <title>Student List</title>
        <meta property="og:title" content="Student List" key="title"></meta>
      </Head>
      <StudentListPage />
    </>
  );
}
