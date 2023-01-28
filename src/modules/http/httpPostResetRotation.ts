export default async function httpPostResetRotation(
  academic_year_name: string
) {
  await fetch("https://api.vincpr.com/v1/rotation/reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ academic_year_name }),
  });
}
