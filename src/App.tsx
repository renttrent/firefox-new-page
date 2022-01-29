
function App() {
  console.log(process.env.REACT_NY_API)
  return (
    <div className="bg-stone-900 text-white p-3 h-screen">
      <nav className="flex flex-row gap-2 w-1/2 justify-between m-auto ">
        <div className="youtube"><a className="hover:text-yellow-400" href="https://youtube.com">youtube</a></div>
        <div className="youtube"><a className="hover:text-yellow-400" href="https://reddit.com">reddit</a></div>
        <div className="youtube"><a className="hover:text-yellow-400" href="https://campus.tum.de/tumonline/ee/ui/ca2/app/desktop/#/">campus app</a></div>
        <div className="youtube"><a className="hover:text-yellow-400" href="https://moodle.tum.de">moodle</a></div>
      </nav>

      <div className="latest-news mt-4 ml-10">
        <div className="text-2xl">Latest News</div>
        
      </div>
    </div>
  );
}

export default App;
