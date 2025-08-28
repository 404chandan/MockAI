import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  // Check if user is already signed in
  const { userId } = await auth();

  // If user is signed in, redirect to dashboard
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Welcome to AI Mock Interview
        </h1>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
          Sign in to start practicing your interview skills
        </p>

        <div className="mt-6">
          <SignIn />
        </div>

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          New here?{" "}
          <a
            href="/sign-up"
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Create an account
          </a>
        </p>
      </div>
    </section>
  );
}
