import { ArticleResponse } from "../types"

interface Props {
  article: ArticleResponse
}

const displayDate = (datestr: string) => {
  const date = new Date(datestr)
  return date.toDateString()
}

export default function Article({article} : Props) {
  return (
  <div className="container flex flex-col h-full w-full p-3 mt-2 rounded-md shadow-md
  bg-gradient-to-r from-indigo-900 to-purple-800 text-white 
  hover:to-indigo-600 cursor-pointer" 
    onClick={() => window.open(article.url, "_blank")}>
    <div className="title text-lg font-bold text-emerald-300">
      {article.title}
    </div>
    <div className="abstract text-md font-regular ">
      {article.abstract}
    </div>
    <div className="byline text-sm text-cyan-100 mt-2 italic font-light">{article.byline}</div>
    <div className="date text-sm text-lime-300 self-end font-medium">{displayDate(article.published_date)}</div>
  </div>
  )
}