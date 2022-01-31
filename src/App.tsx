import axios from "axios";
import { useEffect, useState } from "react";
import Article from "./components/Article";
import { News } from "./types";
import { FaReddit, FaYoutube } from "react-icons/fa"
import TumLogo from "./tum-logo.png"
import Background from "./components/Background";

function TumIcon() {
  return (
    <img src={TumLogo} alt="tumlogo" width={24} height={24} />
  )
}

function App() {
  const [news, setNews] = useState<News | undefined>(undefined);
  useEffect(() => {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NY_API}`).then((res) => {
      setNews(res.data)
    })  
  }, [])

  return (
    <>
      <Background />
      <div className="text-white p-3">
        <nav className="flex flex-row gap-2 w-1/2 justify-between m-auto absolute top-1/2 left-1/4 font-extrabold text-xl">
          <div style={{
            color: "rgba(220, 210, 210, 0.82)",
            mixBlendMode: "screen",            
          }}><a className="hover:text-yellow-400 flex flex-col items-center mix-blend-normal" href="https://youtube.com"><FaYoutube className="text-red-600"/> youtube</a></div>
          <div style={{
            color: "rgba(220, 210, 210, 0.82)",
            mixBlendMode: "screen"
          }}><a className="hover:text-yellow-400 flex flex-col items-center" href="https://reddit.com"><FaReddit className="text-orange-600" /> reddit</a></div>
          <div style={{
            color: "rgba(220, 210, 210, 0.82)",
            mixBlendMode: "screen"
          }}><a className="hover:text-yellow-400 flex flex-col items-center" href="https://campus.tum.de/tumonline/ee/ui/ca2/app/desktop/#/"><TumIcon />campus app</a></div>
          <div style={{
            color: "rgba(220, 210, 210, 0.82)",
            mixBlendMode: "screen"
          }}><a className="hover:text-yellow-400 flex flex-col items-center" href="https://moodle.tum.de"> <TumIcon /> moodle</a></div>
        </nav>

        <div className="latest-news pt-4 pl-10 pb-5 absolute top-full left-0 right-0 bg-gradient-to-r from-neutral-900 to-zinc-800">
          <div className="text-2xl font-extrabold">Latest News</div>
          <div className="articles container grid grid-cols-2 gap-2 w-11/12 overflow-y">
            {news && news.results.slice(0, 10).map((article) => (<Article article={article} key={article.uri}/>))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
