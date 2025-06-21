import one from "../../../assets/guy.jpeg";
import two from "../../../assets/jant.jpeg";
import three from "../../../assets/image.png";
import four from "../../../assets/history.jpeg";
import five from "../../../assets/home.jpeg";
import { Modal } from "antd";
import { useState } from "react";

const Images = () => {
  const imageArray = [
    { id: 1, image: one },
    { id: 2, image: two },
    { id: 3, image: three },
    { id: 4, image: four },
    { id: 5, image: five },
  ];

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const downloadImage = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.substring(url.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
    setIsOpenModal(true);
  };

  const handleDownloadConfirm = () => {
    if (selectedImage) {
      downloadImage(selectedImage);
    }
    setIsOpenModal(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {imageArray.map((img) => (
          <div
            key={img.id}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer"
            onClick={() => handleImageClick(img.image)}
          >
            <img
              src={img.image}
              alt={`Gallery ${img.id}`}
              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </div>
        ))}
      </div>

      <Modal
        title="Confirm Download"
        open={isOpenModal}
        onOk={handleDownloadConfirm}
        onCancel={() => setIsOpenModal(false)}
        okText="Download"
        cancelText="Cancel"
      >
        <p>Do you want to download this image?</p>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Preview"
            className="w-full mt-4 rounded"
          />
        )}
      </Modal>
    </>
  );
};

export default Images;
