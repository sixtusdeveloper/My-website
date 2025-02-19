import { Button } from "@/components/ui/button";
import React from "react";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={
        className ??
        "w-full h-12 px-4 py-3 cursor-pointer text-base rounded-md hover:bg-indigo-800 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white"
      }
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="w-6 h-6 border-t-2 border-b-2 border-gray-300 rounded-full animate-spin"></div>
          <span className="ml-2">Submiting...</span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
