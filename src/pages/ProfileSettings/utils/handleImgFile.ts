interface ImgFileProps {
  e: any;
  setSelectedImage: any;
  setImagePreview: any;
}

export const handleImgFile = ({
  e,
  setSelectedImage,
  setImagePreview,
}: ImgFileProps) => {
  if (e.target.files && e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      setSelectedImage(e.target.files[0]);
      setImagePreview(event.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  }
};
