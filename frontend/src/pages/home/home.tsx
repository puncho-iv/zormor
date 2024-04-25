import { PrimaryButton } from "../../components/PrimaryButton";
import { AddIcon } from "../../assets/icons/Icons";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import AddLocation from "../../components/Modal/AddLocation";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import cover from "../../assets/images/sAINSBURYS-TU-ST-UK.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [openAddModal, setOpenAddModal] = useState(false);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await Axios.get("http://localhost:5001/");
      setData(response.data);
      console.log("", response);
    } catch (error) {
      console.error("Error fetching data:", error);

      // Handle the error as needed, such as showing a notification to the user
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const dummyData = [
    {
      id: 1,
      imageSrc: "https://example.com/image1.jpg",
      title: "test",
      description: "Description for Tesano",
      buttonText: "View Details",
      name: "New Location",
      openHours: "8:00 - 9:00pm",
      location: "Tesano",
    },
    {
      id: 2,
      imageSrc: "https://example.com/image2.jpg",
      title: "Another Place",
      description: "Description for Another Place",
      buttonText: "View Details",
      name: "New Location",
      openHours: "8:00 - 9:00pm",
      location: "Tesano",
    },
    // Add more dummy data objects as needed
  ];

  const openLocationDetails = (id: any) => {
    // navigate(`/locationDetails/${id}`);
    navigate(`/${id}`);
  };
  const addModal = () => {
    setOpenAddModal(true);
  };
  const closeModal = () => {
    setOpenAddModal(false);
  };
  return (
    <div className="w-full min-h-full">
      <div className="flex flex-col lg:flex-row items-center justify-between p-5">
        <div className="p-5">
          <h4 className="header_text">Places</h4>
        </div>
        <div>
          <PrimaryButton
            imageSrc={<AddIcon size={12} color={"#fff"} />}
            title={"Add"}
            containerStyles="rounded-lg"
            onClick={addModal}
          />
        </div>
      </div>

      <div className="px-10 flex flex-row gap-5">
        {data.map((place: any) => (
          <Card
            key={place._id}
            imageSrc={cover}
            title={place.name}
            description={place.description}
            buttonText={"View Details"}
            onButtonClick={() => {
              openLocationDetails(place._id);
              console.log(`Button clicked for ${place.name}`);
            }}
          />
        ))}
        <div className="bg-white rounded-lg min-w-[250px] overflow-hidden shadow-lg justify-center flex items-center">
          <div
            className="flex flex-col justify-center items-center p-16"
            onClick={addModal}
          >
            <div className="">{<AddIcon size={45} color={"#4f4b5c"} />}</div>
            <h4 className="mt-2">Add New Location</h4>
          </div>
        </div>
      </div>

      {openAddModal && (
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[#00000033] z-50"
        >
          <div className="w-full max-w-xl rounded-3xl p-4">
            <div className="relative">
              <AddLocation closeModal={closeModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
