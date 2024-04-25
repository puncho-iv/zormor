import { CloseBlackIcon } from "../../assets/icons/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";
import Axios from "axios";

interface IAddLocation {
  closeModal: () => void;
}

const AddLocation = ({ closeModal }: IAddLocation) => {
  const [images, setImages] = useState<any[]>([]);

  const handleFileChange = (e: any) => {
    if (e.target.files !== null) {
      let file = e.target.files[0];
      setImages([...images, { file, preview: URL.createObjectURL(file) }]);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    openHours: "",
  });

  const addLocation = async () => {
    try {
      const response = await Axios.post("http://localhost:5001/", formData);
      console.log("Response from server:", response.data);
      toast.success("Location added successfully!");
      closeModal(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error adding location:", error);
      toast.error("Failed to add location. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white rounded-3xl p-3 h-full overflow-y-auto ">
      <div className="flex justify-between border-b p-2">
        <h3 className="header_text  ">Add Location</h3>

        <div
          className="bg-[#F3F3F4]  p-2 rounded-3xl flex justify-center items-center "
          onClick={closeModal}
        >
          <CloseBlackIcon size={18} color={"#4F4B5C"} />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5  ">
        <h3 className="font-medium  text-[var(--text-color-90)]">Name</h3>
        <input
          name="name"
          type="text"
          className="rounded-xl  h-12 "
          onChange={handleChange}
          value={formData.name}
        />

        <div>
          <h3 className="font-medium text-[var(--text-color-90)]">
            Description
          </h3>
          <input
            name="description"
            type="text"
            className="rounded-xl h-12 "
            onChange={handleChange}
            value={formData.description}
          />
        </div>

        <div>
          <h3 className="font-medium text-[var(--text-color-90)]">Location</h3>
          <input
            name="location"
            type="text"
            className="rounded-xl h-12"
            onChange={handleChange}
            value={formData.location}
          />
        </div>
        <div>
          <h3 className="font-medium text-[var(--text-color-90)]">
            Open hours
          </h3>
          <input
            name="openHours"
            type="text"
            className="rounded-xl h-12"
            onChange={handleChange}
            value={formData.openHours}
          />
        </div>
        <div>
          <h3 className="font-medium text-[var(--text-color-90)]">Upload</h3>
          <input type="file" accept="image/*" name="upload" />
        </div>
      </div>

      <div className="px-20 py-5">
        <PrimaryButton title={"Add"} onClick={addLocation} />
      </div>

      <div className="flex flex-row whitespace-nowrap text-sm">
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddLocation;
