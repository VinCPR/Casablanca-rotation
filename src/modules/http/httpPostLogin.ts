import { assert } from "../utils/assert";
import { asyncLocalStorage } from "../utils/asyncLocalStorage";

type LoginInput = {
  email: string;
  password: string;
};

export default async function httpPostLogin({ email, password }: LoginInput) {
  try {
    const data = { email: email, password: password };
    const response = await fetch("https://api.vincpr.com/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const body = await response.json();
    const roleName = body.user.role_name;
    await asyncLocalStorage.setItem("role_name", roleName);
    if (roleName == "student") {
      const search = new URLSearchParams();
      search.append("email", email);

      const response = await fetch(
        `https://api.vincpr.com/v1/student/info?${search.toString()}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      assert(response.ok, "response not ok");
      const obj = await response.json();
      await asyncLocalStorage.setItem("id", obj.student_id);
      await asyncLocalStorage.setItem("first_name", obj.first_name);
      await asyncLocalStorage.setItem("last_name", obj.last_name);
    }
    if (roleName == "attending") {
      const search = new URLSearchParams();
      search.append("email", email);

      const response = await fetch(
        `https://api.vincpr.com/v1/attending/info?${search.toString()}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      assert(response.ok, "response not ok");
      const obj = await response.json();
      await asyncLocalStorage.setItem("id", obj.attending_id);
      await asyncLocalStorage.setItem("first_name", obj.first_name);
      await asyncLocalStorage.setItem("last_name", obj.last_name);
    }
  } catch (error) {
    alert("Your email and password do not match. Please try again");
  }
}
