import httpGetDepartments from "@/modules/http/httpGetDepartments";

export default function TestApi() {
  return (
    <div>
      <button
        onClick={async () => {
          console.log(await httpGetDepartments());
        }}
      >
        Test get department
      </button>
    </div>
  );
}
