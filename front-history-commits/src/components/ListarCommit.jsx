import React from "react";

const ListarCommit = ({ children }) => {
  const { commit, committer } = children;
  const { message} = commit;
  const { avatar_url, login } = committer;
  return (
    <div className="w-full text-white rounded-3xl">
      <div
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-2 p-5"
      >
        <img
          className="object-cover w-full h-96 rounded-full md:h-auto md:w-48 "
          src={avatar_url}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {message}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           <span className="font-bold"> Commiter: </span> {login}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           <span className="font-bold"> Date: </span> {commit.committer.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListarCommit;
