import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LogIn() {
  let redirect = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const config = {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };

  const ApiR = async (event) => {
    event.preventDefault();

    config.method = "POST";
    config.body = JSON.stringify({ email, password });

    try {
      let ress = await (
        (await fetch('htpp://127.16.16.16:4560/singIn', config))
      ).json();

        if (ress.status == 200) {
          localStorage.setItem("Auth", result.auth);
          redirect("/home",{
            state:{
              user:{
                username: ress.data.username,
                email: ress.data.email
              }
            }
          })
        } else{
          console.log("user not found");
        }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden dark:bg-slate-800">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl dark:bg-slate-700">
        <h1 className="text-3xl font-semibold text-center text-green-600 underline">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={ApiR} id="formLogIn">
          <div className="mb-2">
            <label className="block text-sm font-semibold dark:text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 dark:text-blue-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link to="/signUp" className="block text-xs text-green-600 hover:underline">
              SignUp
          </Link>  
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
