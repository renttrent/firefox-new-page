import { useEffect, useState } from "react"
import axios from "axios"

interface Props {
  width: string,
  height: string,
  more?: string,
  query: string
}

export default function Background({width, height, more, query}: Props) {

  const [image, setImage] = useState(undefined)
  useEffect(() => {

    axios.get('https://source.unsplash.com/random').then(res => {
      setImage(res.request.responseURL)
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