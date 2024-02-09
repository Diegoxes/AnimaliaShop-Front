import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout, user } = useAuth0();
  console.log(user);

  return (
    <div className='flex items-center justify-center'>
      <div class='h-10 w-10 flex-shrink-0'>
        <img class='h-full w-full rounded-full' src={user.picture} alt='' />
      </div>
      <span className='px-2 font-semibold text-sm text-black'>
        {user.nickname}
      </span>
      <button
        className='rounded-md border-amber-600 px-4 py-1 font-medium hover:font-medium text-amber-600  hover:border-none hover:bg-amber-600 hover:text-white'
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }>
        Logout
      </button>
    </div>
  );
};

export default Logout;
