import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:shadow-lg focus:ring-2 focus:ring-indigo-400 disabled:scale-100 disabled:bg-opacity-65 shadow-md"
      disabled={pending}
      aria-label={pending ? "Sending message..." : "Submit contact form"}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-2 border-t-white border-white/40 border-b-pink-400 border-l-indigo-500"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
