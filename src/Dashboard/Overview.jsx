import UseAuth from "../Hooks/UseAuth";

function Overview() {
  const { user } = UseAuth();
  return (
    <div>
      <h1 className="flex justify-center items-center text-3xl font-bold w-full h-full text-center">
        {" "}
        {user.email}
      </h1>
    </div>
  );
}

export default Overview;
