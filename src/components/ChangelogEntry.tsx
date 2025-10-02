type ChangelogEntryProps = {
  version: string;
  date: string;
  changes: string[];
};

export default function ChangelogEntry({ version, date, changes }: ChangelogEntryProps) {
  return (
    <div className="border border-border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          Version {version}
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
      </div>
      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        {changes.map((change, index) => (
          <li key={index}>{change}</li>
        ))}
      </ul>
    </div>
  );
}