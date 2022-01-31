import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  width: String,
  height: String,
  more?: String,
  wait?: Boolean,
  query: String
}

export default function Background({width, height, more, wait, query}: Props) {

  const [image, setImage] = useState(undefined)
  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/random/?query=${query}&client_id=${process.env.REACT_APP_UNSPLASH}`).then((res)=>{
      setImage(res.data.urls.full)
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