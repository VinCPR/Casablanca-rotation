import { assert } from "../utils/assert";

export default async function httpGetDepartments() {
  const search = new URLSearchParams();
  search.append("pageNumber", "1");
  search.append("pageSize", "200");

  const response = await fetch(
    `https://api.vincpr.com/v1/specialty/list?${search.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );
  assert(response.ok, "response not ok");
  const obj = await response.json();

  return obj;
}
