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
  return <>{!isLogin && <LoginPage />}</>;
}
