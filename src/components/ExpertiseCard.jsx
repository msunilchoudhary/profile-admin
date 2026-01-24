import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function ExpertiseCard({item}) {
    const Icon = item?.icon
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 pb-18 overflow-hidden relative">
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-12 h-12 flex items-center dark:bg-gray-700 justify-center rounded-lg ${item?.iconbg} ${item?.tcolor}`}>
            <Icon /> 
        </div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
          {item?.title}
        </h2>
      </div>

      <p className="text-gray-600 text-sm mb-4 dark:text-gray-400">
        {item?.text}
      </p>

      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
        {item?.lists.map((list, index) => <li key={index}>{list}</li>)}
        
        
      </ul>
      <div className="flex mt-4 gap-2 absolute bottom-6 left-0 w-full px-6 bg-white dark:bg-gray-900">
        <EditButton /> <DeleteButton />
      </div>
    </div>
  );
}

export default ExpertiseCard;
