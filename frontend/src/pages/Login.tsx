import { UserCircleIcon } from "@heroicons/react/24/solid";

function Login() {
  function handleSubmit(): void {
    throw new Error("Function not implemented.");
  }

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
    <div className="bg-blue-600 min-h-screen flex items-center justify-center">
      <div className="p-4 w-full max-w-md bg-blue-400 rounded">
        <div className="flex mb-5 items-center">
          <UserCircleIcon className="size-20 text-white text-blue-500" />
          <p className="ml-4 text-xl text-white">Adminisztrációs felület</p>
        </div>
        <form className="flex flex-col">
          <label htmlFor="username" className="mb-2 text-white">
            Email
          </label>
          <input
            id="username"
            className="rounded-full mb-4 p-2 w-full"
            type="email"
            required
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
            />
          </div>
          <button
            type="submit"
            className="bg-white text-blue-500 text-xl rounded-full p-1 hover:bg-gray-200"
            onClick={handleSubmit}
          >
            Bejelentkezés
          </button>
        </form>
      </div>
    </div>
  );
}
