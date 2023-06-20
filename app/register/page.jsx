const RegisterPage = () => {
  return (
    <div className="mt-40 flex justify-center items-center">
      <form className="flex flex-col  space-y-3 ">
        <input
          type="text"
          placeholder="Email"
          className="form-input px-4 py-2 border-2 rounded font-bold"
        />
        <input
          type="text"
          placeholder="Username"
          className="form-input px-4 py-2 border-2 rounded font-bold"
        />
        <input
          type="password"
          placeholder=" Password"
          className="form-input px-4 py-2 border-2 rounded font-bold"
        />
        <input
          type="password"
          placeholder=" Confirm Password"
          className="form-input px-4 py-2 border-2 rounded font-bold"
        />
        <button
          type="submit"
          className="bg-gray-800 font-bold text-white p-2 rounded"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
