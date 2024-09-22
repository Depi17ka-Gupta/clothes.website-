import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscride now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum rem
        porro.
      </p>
      <form
        onSubmit={onSubmitHandler}
        action=""
        className="w-full sm:w-1/2 flex items-center border pl-3 gap-3 mx-auto my-6 "
      >
        <input
          type="email"
          className="w-full sm:flex-1 outline:none"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 "
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
