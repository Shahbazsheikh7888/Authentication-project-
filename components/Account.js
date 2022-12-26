import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import Avatar from "./Avatar";
import Router, { useRouter } from "next/router";

export default function Account({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [url, setUrl] = useState(true);

  useEffect(() => {
    getProfile();
  }, [session]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const url = localStorage.getItem("url")
  //     Router.push({url})
  //   }, 3000);
  // }, []);

  
  // function loadOldUrl() {
  //   location.href = localStorage.getItem("url");
  // }

  
  
 
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      Router.push(window.localStorage.getItem(url));
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const projectUrl = localStorage.getItem("selected-project")
  //   if (projectUrl) {
  //     history.push(projectUrl)
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, [history]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget mt-16">
      {/* <Avatar
        uid={user.id}
        url={avatar_url}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url);
          updateProfile({ username, website, avatar_url: url });
        }}
      /> */}
      <div className="bg-black text-2xl text-white ml-5">
        <label htmlFor="email">Email - </label>
        <input
          id="email"
          type="text"
          className="text-black w-96 py-2 text-2xl bg-orange-100 mx-3 px-5 rounded-full "
          value={session.user.email}
          disabled
        />
      </div>
      <div className="bg-black text-2xl text-white ml-5 mt-3">
        <label htmlFor="username">Username -</label>
        <input
          id="username"
          type="text"
          className="text-black text-2xl bg-orange-100 mx-3  px-5 py-2 rounded-full"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="bg-black text-2xl text-white ml-5 mt-3">
        <label htmlFor="website">Website -</label>
        <input
          id="website"
          type="website"
          value={website || ""}
          className="text-black mx-3 px-5 bg-orange-100 py-2 rounded-full"
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="bg-black hover:text-orange-600 text-white ml-5 mt-3">
        <button
          className="button primary block text-3xl text-orange-600"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div className="bg-black hover:text-orange-600 text-3xl text-white ml-5 mt-3">
        <button
          className="button block text-orange-600"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
