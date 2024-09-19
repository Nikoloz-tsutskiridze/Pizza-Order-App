import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-4 text-xl font-semibold md:text-3xl">
        The best
        <span className="relative inline-block before:absolute before:-inset-0.5 before:block before:-skew-y-3 before:bg-red-400">
          <span className="relative text-white"> Pizza </span>
        </span>
        .
        <br />
        <span>Straight out of the oven, straight to you.</span>
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        Order your favorite{" "}
        <span className="relative inline-block before:absolute before:-inset-0.5 before:block before:-skew-y-3 before:bg-red-400">
          <span className="relative text-white"> Pizza </span>
        </span>
        , enjoy a delicious meal, and have fun!
      </p>

      <img
        className="mb-3 mt-3 rounded-md"
        src="/img/companyIMG.jpg"
        alt="The last Slice"
      />

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
