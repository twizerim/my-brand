// import React, { useState} from "react";

// import Preloader from "./plerloard";
// import axios from "axios";
import { LikeOutlined,DislikeOutlined,CloudDownloadOutlined } from '@ant-design/icons';
import one from "../../../assets/guy.jpeg"
import two from "../../../assets/jant.jpeg"
import three from "../../../assets/image.png"
import four from "../../../assets/history.jpeg"
import five from "../../../assets/home.jpeg"



export default function Images() {
    // const [imageData, setImageData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get("https://type-bn-poltifolio.onrender.com/Jant/imageuploaded/get");
    //             setImageData(response.data);
    //             setIsLoading(false);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchData();
    // }, []);

   

    // console.log(imageData);

    // const imageArray = [
    //        {
    //         id:1,
    //         image:one
    //        },
    //        {
    //         id:2,
    //         image:two
    //        },
    //        {
    //         id:3,
    //         image:three
    //        },
    //        {
    //         id:4,
    //         image:four
    //        },
    //        {
    //         id:5,
    //         image:five
    //        }
    // ]
    //    if(imageArray){
    //      setIsLoading(false)
    //    }

       const downloadImage = (url) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = url.substring(url.lastIndexOf("/") + 1);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    // console.log(imageArray)

    return (
        <>
            {/* {isLoading ? (
                <Preloader />
            ) : (
                // imageData && imageData.datas && imageData.datas.map((item, index) => (
                    imageArray.map((item)=>(
                        
                    ))
                 
                // ))
            )} */}


                    <div className="image-contain">
                        <img src={one} alt="Logo" />
                        <div className="my-image">
                            <LikeOutlined />
                             <DislikeOutlined />
                            <CloudDownloadOutlined onClick={() => downloadImage(one)} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    <div className="image-contain">
                        <img src={two} alt="Logo" />
                        <div className="my-image">
                            <LikeOutlined />
                             <DislikeOutlined />
                            <CloudDownloadOutlined onClick={() => downloadImage(two)} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    <div className="image-contain" >
                        <img src={three} alt="Logo" />
                        <div className="my-image">
                            <LikeOutlined />
                             <DislikeOutlined />
                            <CloudDownloadOutlined onClick={() => downloadImage(three)} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    <div className="image-contain" >
                        <img src={four} alt="Logo" />
                        <div className="my-image">
                            <LikeOutlined />
                             <DislikeOutlined />
                            <CloudDownloadOutlined onClick={() => downloadImage(four)} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    <div className="image-contain">
                        <img src={five} alt="Logo" />
                        <div className="my-image">
                            <LikeOutlined />
                             <DislikeOutlined />
                            <CloudDownloadOutlined onClick={() => downloadImage(five)} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                  

            
        </>
    );
}
