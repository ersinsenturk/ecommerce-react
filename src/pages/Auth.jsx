import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { Form } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginUser, setAuthUser } from "../util/api";

const Auth = () => {
  const dispatch = useDispatch();
  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: (data) => {
      setAuthUser(data);
      dispatch(authActions.toggleShown());
      dispatch(authActions.login(data));
    },
  });

  const handleAuthClose = (event) => {
    event.preventDefault();
    dispatch(authActions.toggleShown());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    mutate(data);
  };
  return (
    <div className="absolute right-0 top-0 bg-white rounded-md p-4 z-10">
      <Form className=" flex items-end" onSubmit={handleSubmit}>
        <button className=" mr-4 self-center" onClick={handleAuthClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>

        <Input
          type="text"
          id="username"
          label="Username"
          className="mr-4"
          defaultValue="kminchelle"
        />
        <Input
          type="password"
          id="password"
          label="Password"
          className="mr-4"
          defaultValue="0lelplR"
        />
        <Button disabled={isPending}>
          {isPending ? "Signin In..." : "Sign In"}
        </Button>
        {isError && <p className="basis-full text-red-500 text-sm">{error}</p>}
      </Form>
    </div>
  );
};

export default Auth;
