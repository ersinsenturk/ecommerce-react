import { useSelector } from "react-redux";
import Button from "@/components/UI/Button";
import { useSubmit } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const submit = useSubmit();

  const newUser = new Object({
    image: user?.image,
    username: user?.username,
    email: user?.email,
    fullname: user?.firstName + " " + user?.lastName,
    gender: user?.gender,
  });

  const handleLogout = () => {
    submit(null, { method: "post", action: "/logout" });
  };

  const items = useSelector((state) => state.favs.items);
  console.log(items);

  return (
    <div>
      <h2>Profile</h2>
      <ul>
        {newUser &&
          Object.entries(newUser).map((item) => (
            <li key={item[0]}>
              {item[0] === "image" ? (
                <img className="w-8" src={item[1]} alt="" />
              ) : (
                <p>{`${item[0]}: ${item[1]}`}</p>
              )}
            </li>
          ))}
      </ul>
      <Button onClick={handleLogout}>Log out</Button>
    </div>
  );
};

export default ProfilePage;
