import React from "react";

function PageTitle({title,para}) {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold dark:text-gray-200 text-gray-800">{title}</h1>
        {para && <p className="text-gray-500 dark:text-gray-400">{para}</p>}
      </div>
    </>
  );
}

export default PageTitle;
