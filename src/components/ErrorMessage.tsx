import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <div className="border-2 w-full mx-auto border-[#D8814F] md:w-[37.5rem] lg:w-[37.5rem] h-[3.875rem] text-[#D8814F] uppercase flex items-center justify-center mt-4">
      {children}
    </div>
  );
};

export default ErrorMessage;
