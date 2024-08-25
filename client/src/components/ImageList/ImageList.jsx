import ImageCard from "../ImageCard/ImageCard";

const ImageList = () => {
  return (
    <div className="image-items">
      <ImageCard
        src="https://plus.unsplash.com/premium_photo-1664304458186-9a67c1330d02?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Animal On Winter"
        location="Canada"
        rating="4.9"
      />
      <ImageCard
        src="https://images.unsplash.com/photo-1532943126512-e2bcf68a488c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Waves Rushing"
        location="Spain"
        rating="4.3"
      />
      <ImageCard
        src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Awesome Image"
        location="USA"
        rating="4.8"
      />
    </div>
  );
};

export default ImageList;
