import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { login } from "../routes/api";
import { notification } from "antd";

function Login() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username + " " + password);
    try {
      await login(username, password);
      notification.success({
        message: "Successfull login",
        description: "You are successfully logged in!",
      });
    } catch (error) {
      console.log(error, "error");
      notification.error({
        message: "Error",
        description: "Your name or password is incorrect!",
      });
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const {
  //   data: users,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: getUser,
  // });

  // const queryClient = useQueryClient();
  // const changeAddMutation = useMutation(
  //   ({
  //     name: string,
  //     password: string;
  //   }) => {
  //     return addUser(name, password);
  //   },
  //   {
  //     onSettled: () => {
  //       queryClient.invalidateQueries(["users"]);
  //     },
  //   }
  // );

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     await changeAddMutation.mutateAsync(users);
  //     notification.success({
  //       message: "Sikeres mentés",
  //       description: "A profil sikeresen elmentve!",
  //     });
  //   } catch (error) {
  //     console.log(error, "error");
  //     notification.error({
  //       message: "Hiba",
  //       description: "A profilt nem sikerült elmenteni!",
  //     });
  //   }
  // };

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error</div>;

  return (
    <div className="bg-orange-800 min-h-screen flex items-center justify-center">
      <div className="p-4 w-full max-w-md bg-orange-400 rounded">
        <div className="flex mb-5 items-center">
          <UserCircleIcon className="size-20 text-white text-orange-500" />
          <p className="ml-4 text-xl text-white">Adminisztrációs felület</p>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="username" className="mb-2 text-white">
            Email
          </label>
          <input
            id="username"
            className="rounded-full mb-4 p-2 w-full"
            type="email"
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="mb-10">
            <label htmlFor="password" className="mb-2 text-white">
              Jelszó
            </label>
            <input
              id="password"
              className="rounded-full mb-4 p-2 w-full"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-white text-orange-500 text-xl rounded-full p-1 hover:bg-gray-200"
          >
            Bejelentkezés
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
