import { useEffect, useState } from "react"
import { createApi } from "unsplash-js"

interface Props {
  width: string,
  height: string,
  more?: string,
  query: string
}

// unplash-js stuff idk
global.fetch = fetch;
const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH || "",
})


export default function Background({width, height, more, query}: Props) {

  const [image, setImage] = useState(undefined)
  useEffect(() => {
    
    unsplash.photos.getRandom({ query: query }).then((res) =>{
      //@ts-ignore
      setImage(res.response?.urls?.regular)
    }).catch((err) => {
      console.log(err)
    })
  })

  return (
    <>
    <div id="background">
      <div className={`absolute ${width} ${height} -z-50 ${more}`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat"
        }}
      >

      </div>
    </div>
    </>
  );
}