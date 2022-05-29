const ListarRepos = ({ children }) => {
  const { name, description, url, updated_at } = children;
  return (
    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
      <li className="py-3 sm:py-4 hover:shadow-lg shadow-white hover:cursor-pointer hover:bg-slate-700 p-5">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-xl p-2 font-medium text-gray-900 truncate dark:text-white">
              {name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {description}
            </p>
            <a
              href={url}
              className="text-sm text-teal-500 truncate dark:text-teal-500"
            >
              {url}
            </a>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {updated_at.slice(0, 10)}
          </div>
        </div>
      </li>
      <hr />
    </ul>
  );
};

export default ListarRepos;
