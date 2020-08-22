import React from "react";
import { removeAuthCredential } from '@/app/infrastructures/misc/Cookies';

const Portal = () => {
  const handleLogout = () => {
    removeAuthCredential()
    window.location.reload();
  }
  return (
    <div>
      HOME
      <button
      onClick={() => handleLogout()}
        type="submit"
        className="hover:bg-gray-700 bg-gray-800 text-white font-bold py-1 px-4 rounded block w-full"
      >
        Keluar
      </button>
    </div>
  );
};

export default Portal;
