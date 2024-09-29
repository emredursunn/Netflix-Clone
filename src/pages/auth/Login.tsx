import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { showToast } from "../../components/shared_components/Toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(login({ email, password }));
      showToast("Successful","success")
      navigate("/home")
    } catch (error) {
      console.log(error);
      showToast("Failed","error")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black md:bg-opacity-50 md:bg-blend-overlay bg-no-repeat bg-center bg-cover md:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/88b6b959-4086-4bd6-80f2-e8c48634649d/TR-tr-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_1293bc84-dc0d-4926-ad85-bbec70c1f97a_small.jpg')]">
      <section className="w-full max-w-xl md:max-w-md p-8 space-y-8 bg-black bg-opacity-75 rounded-lg">
        <div className="text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className="h-12 mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-white">Sign In</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              required
              className="w-full py-2 px-1 bg-transparent border-white border border-opacity-30 text-white placeholder-gray-400 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              className="w-full py-2 px-1 bg-transparent border-white border border-opacity-30 text-white placeholder-gray-400 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-red-600 hover:bg-red-700 text-white"
          >
            Sign In
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="text-red-600 border-gray-600 bg-gray-700"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-400"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-gray-400 hover:underline">
                Need help?
              </a>
            </div>
          </div>
        </form>
        <div className="text-gray-400 text-center">
          <p>
            New to Netflix?{" "}
            <a href="#" className="text-white hover:underline">
              Sign up now
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
