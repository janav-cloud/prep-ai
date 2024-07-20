import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return(
      <div className="min-h-[40vh] flex justify-center items-center">
          <div className="scale-75 md:scale-90">
              <SignUp/>
          </div>
      </div>
    );
  }