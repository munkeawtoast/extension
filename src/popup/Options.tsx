const Popup = () => {
  return (
    <main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <img
        src="/icon.svg"
        className="icon-btn mx-2 text-2xl"
        alt="extension icon"
      />
      <div>Options</div>
      <input className="border border-gray-400 rounded px-2 py-1 mt-2" />
      <div className="mt-4">
        Powered by Vite <div className="i-pixelarticons-zap" />
      </div>
    </main>
  )
}

export default Popup
