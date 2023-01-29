import { assert } from "../utils/assert";

export default async function httpGetList(url: string) {
  const search = new URLSearchParams();
  search.append("pageNumber", "1");
  search.append("pageSize", "200");

  const response = await fetch(`${url}?${search.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  assert(response.ok, "response not ok");
  const obj = await response.json();

  return obj;
}
