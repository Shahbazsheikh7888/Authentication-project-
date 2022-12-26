import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";
import { useRouter } from 'next/router';
import { useEffect } from "react";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter()
  const handleClick = e => {
      e.preventDefault()
      router.push('http://localhost:3000/')
    }
    
  return (
    <>
      <div className="mx-auto grid md:grid-cols-2">
        <div className=" max-w-[1040px] px-36   bg-black pt-20 ">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="w-full bg-black"
            alt="Sample image"
          />
        </div>

        <div className=" max-w-[1040px] px-36 pb-96  bg-black pt-28 ">
          {!session ? (
            <Auth
              // providers={["google", "github"]}
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          ) : (
            <Account session={session} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
