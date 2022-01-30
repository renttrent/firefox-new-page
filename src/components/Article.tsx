import { Result } from "../types"

interface Props {
  article: Result
}

const displayDate = (datestr: string) => {
  const date = new Date(datestr)
  return date.toDateString()
}

export default function Article({article} : Props) {
  console.log(article)
  return (
  <div className="container p-3 mt-2 bg-zinc-400 text-gray-900 rounded-md shadow-md hover:bg-orange-300 cursor-pointer" 
    onClick={() => window.open(article.url, "_blank")}>
    <div className="title text-lg font-bold">
      {article.title}
    </div>
    <div className="abstract text-md font-semibold text-zinc-800">
      {article.abstract}
    </div>
    <div className="byline text-sm text-neutral-600">{article.byline}</div>
    <div className="date text-sm text-blue-900">{displayDate(article.published_date)}</div>
  </div>
  )
}