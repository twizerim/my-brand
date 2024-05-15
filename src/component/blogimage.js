import React, { useState, useEffect } from "react";
import "../sass/subcomponent/blogimage.css";
import Preloader from "./plerloard";
import axios from "axios";
import { LikeOutlined,DislikeOutlined,CloudDownloadOutlined } from '@ant-design/icons';


export default function BlogImages() {
    const [imageData, setImageData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://type-bn-poltifolio.onrender.com/Jant/imageuploaded/get");
                setImageData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const downloadImage = (url) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = url.substring(url.lastIndexOf("/") + 1);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    console.log(imageData);

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                imageData && imageData.datas && imageData.datas.map((item, index) => (
                    <div className="image-contain" key={index}>
                        <img src={item.image} alt="Logo" />
                        <div className="my-image">
                            <LikeOutlined />
                             <DislikeOutlined />
                            <CloudDownloadOutlined onClick={() => downloadImage(item.image)} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                ))
            )}
        </>
    );
}
