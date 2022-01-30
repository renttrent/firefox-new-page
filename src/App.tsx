import axios from "axios";
import { useEffect, useState } from "react";
import Article from "./components/Article";
import { News } from "./types";

function App() {
  const [news, setNews] = useState<News | undefined>(undefined);
  useEffect(() => {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NY_API}`).then((res) => {
      setNews(res.data)
    })  

  }, [])

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
        <div className="articles container grid grid-cols-2 gap-2 w-11/12 overflow-y" style={{ height: "calc(100vh-100px)"}}>
          {news && news.results.map((article) => (<Article article={article}/>))}
        </div>
      </div>
    </div>
  );
}

export default App;
