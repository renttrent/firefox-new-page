import axios from "axios"
import { useEffect, useState } from "react"
import Article from "./components/Article"
import { News } from "./types"
import * as icons from "react-icons/fa"
import Background from "./components/Background"
import links from "./links.json"
  
const links_iterator = Object.keys(links)

function App() {
  const [news, setNews] = useState<News | undefined>(undefined);
  useEffect(() => {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NY_API}`).then((res) => {
      setNews(res.data)
    })  
  }, [])

  return (
    <>
      <div className="bg">
        <Background width={"w-full"} height={"h-full"} query={"landscape"}/>
        <div className={`bg-neutral-500 items-center mix-blend-multiply absolute h-screen w-screen -z-10`}></div>
      </div>
      <nav className="text-center grid grid-cols-2 sm:grid-cols-4 gap-6 w-1/2 justify-between m-auto absolute top-1/2 left-1/4 font-extrabold text-x">
        {links_iterator.map(((key: string) => {
          return (
            <div 
            style={{
              color: "rgba(230, 230, 230, 0.82)",
            }}
            key={key}
            >
              <a className="hover:text-yellow-400 flex flex-col items-center mix-blend-normal" 
              // @ts-ignore
              href={links[key]["link"]}>
                {/* @ts-ignore */}
                {icons[links[key]["icon"]].call()}
                  {key}
                </a>
            </div>
          )
        }))}
      </nav>
      
      <div className="latest-news absolute top-full left-0 w-screen">
        <Background width={"w-full"} height={"h-full"} more={"left-0"} query={"news"}/>
        <div className={`bg-neutral-500 items-center mix-blend-multiply absolute left-0 min-h-full w-full -z-10`}></div>
        <div className="text-2xl font-extrabold text-white mt-4 ml-16">Latest News</div>
        <div className="articles container grid grid-cols-1 sm:grid-cols-2 gap-4 w-11/12 overflow-y ml-4 sm:ml-12 mb-10">
          {news && news.results.slice(0, 10).map((article) => (<Article article={article} key={article.uri}/>))}
        </div>
      </div>
    </>
  );
}

export default App;
