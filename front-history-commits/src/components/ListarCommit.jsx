import React from "react";

const ListarCommit = ({ children }) => {
  const { commit } = children;
  console.log("===========>", children);
  const { comment_count, message } = commit;
  return (
    <div className="p-10 bg-cyan-900 m-10 text-white rounded-3xl">
      <p
        href="#"
        class="block p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </p>
    </div>
  );
};

export default ListarCommit;
