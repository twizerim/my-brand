import result from "../../../assets/Documa/gedeon.pdf"
import { LikeOutlined,DislikeOutlined,CloudDownloadOutlined } from '@ant-design/icons';

export default function DocumentFile(){

    const downloadImage = (url) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = url.substring(url.lastIndexOf("/") + 1);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <>
            <div className="image-contain">
                        <document src={result} alt="result"/>
                        <div className="my-image">
                            <LikeOutlined />
                             <DislikeOutlined />
                            <CloudDownloadOutlined onClick={() => downloadImage(result)} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
        </>
    )
}