import axios from "axios";
import { useEffect, useState } from "react";

export default function Background() {

  const [image, setImage] = useState(undefined)
  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH}`).then((res)=>{
      console.log(res.data)
      setImage(res.data.urls.full)
    })
  }, [])

  return (
    <div id="background">
      <div className="absolute h-screen w-screen -z-50"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "100%"
        }}
      >

      </div>
    </div>
  );
}