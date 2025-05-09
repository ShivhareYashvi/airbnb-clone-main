import { useEdgeStore } from "@/lib/edgestore";  // Correctly importing the hook
import { useState } from "react";
import SpinnerMini from "./Loader";

interface ImageUploadProps {
  // Define your props here
}

const ImageUpload: React.FC<ImageUploadProps> = () => {
  const { edgestore, setEdgestore } = useEdgeStore();
  const [isLoading, setIsLoading] = useState(false);

  if (!edgestore) {
    return <SpinnerMini />; // Loading spinner until the edgestore is initialized
  }

  // Image upload logic here using edgestore
  const handleImageUpload = async () => {
    setIsLoading(true);
    // Example logic: Upload an image using edgestore
    try {
      const result = await edgestore.publicFiles.upload(/* file upload code */);
      console.log('Upload successful', result);
    } catch (error) {
      console.error('Error uploading image', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? <SpinnerMini /> : <button onClick={handleImageUpload}>Upload Image</button>}
    </div>
  );
};

export default ImageUpload;
