import { assert } from "../utils/assert";

export default async function httpGet(url: string) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  assert(response.ok, "response not ok");
  const obj = await response.json();

  return obj;
}
