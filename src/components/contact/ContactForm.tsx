export default function ContactForm() {
  return (
    <div className="relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-md z-10 pointer-events-none">
        <span className="text-white text-lg font-semibold bg-accent px-4 py-2 rounded-md">
          Contact form in development 🚧
        </span>
      </div>

      {/* Form */}
      <form className="space-y-4 opacity-60 pointer-events-none">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            disabled
            className="mt-1 block w-full rounded-md border border-border bg-white dark:bg-gray-800 text-text dark:text-text px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            disabled
            className="mt-1 block w-full rounded-md border border-border bg-white dark:bg-gray-800 text-text dark:text-text px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            disabled
            className="mt-1 block w-full rounded-md border border-border bg-white dark:bg-gray-800 text-text dark:text-text px-3 py-2"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled
          className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-hover transition-colors cursor-not-allowed"
        >
          Send
        </button>
      </form>
    </div>
  );
}