import { Result } from "../types"

interface Props {
  article: Result
}

const displayDate = (datestr: string) => {
  const date = new Date(datestr)
  return date.toDateString()
}

export default function Article({article} : Props) {
  // console.log(article)
  return (
  <div className="container p-3 mt-2 bg-stone-400 text-gray-900 rounded-md shadow-md hover:bg-gray-500 cursor-pointer" 
    onClick={() => window.open(article.url, "_blank")}>
    <div className="title text-lg font-bold">
        {article.abstract}
    </div>
    <div className="byline text-sm">{article.byline}</div>
    <div className="date text-sm">{displayDate(article.published_date)}</div>
  </div>
  )
}