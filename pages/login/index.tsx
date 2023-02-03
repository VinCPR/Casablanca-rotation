import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoginPage from "../../src/containers/LoginPage";

export default function RouteToLoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("role_name")) {
      router.push(`/`);
    } else {
      setIsLogin(false);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta property="og:title" content="Login Page" key="title"></meta>
      </Head>
      {!isLogin && <LoginPage />}
    </>
  );
}
