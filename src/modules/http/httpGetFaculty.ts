import { assert } from "../utils/assert";

export default async function httpGetFaculty() {
  const search = new URLSearchParams();
  search.append("pageNumber", "1");
  search.append("pageSize", "200");

  const response = await fetch(
    `https://api.vincpr.com/v1/attending/list/name?${search.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );
  assert(response.ok, "response not ok");
  const data = await response.json();

  return data;
}