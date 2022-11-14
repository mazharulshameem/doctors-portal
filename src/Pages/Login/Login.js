import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import img from "../../assets/images/green.webp";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogIn = (data) => {
    console.log(data);
  };

  return (
    <div
      className="mt-1"
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" h-[600px] flex justify-center items-center ">
        <div className="w-96  p-7 border rounded-lg border-x-cyan-900 border-y-slate-700 ">
          <h1 className="text-4xl text-center"> Login</h1>
          <form onSubmit={handleSubmit(handleLogIn)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input   input-success w-full max-w-xs"
                {...register("email")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input  input-success w-full max-w-xs"
                {...register("password")}
              />
              <label className="label">
                <span className="label-text ">Forgot Password ?</span>
              </label>
            </div>

            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Log in"
            />
          </form>
          <span className="text-center ">
            New to Doctors Portal{" "}
            <Link className="text-orange-600 text-center" to="/signup">
              Create New Account
            </Link>
          </span>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full ">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
