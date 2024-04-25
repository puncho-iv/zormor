import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import cover from "../../assets/images/store.png";
import profile from "../../assets/images/image.jpg";

const LocationDetails = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`http://localhost:5001/${id}`);
        setLocation(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error as needed
      }
    };

    fetchData();
  }, [id]);

  if (!location) {
    return <div>No data found for ID: {id}</div>;
  }

  return (
    <div>
      <div
        className="p-12 border"
        style={{ backgroundImage: `url(${profile})` }}
      >
        <div className="object-fit h-64"></div>
        <div className="my-4">
          <h2 className="header_text  text-white">{location.name}</h2>
          <p className="small_text text-white">{location.description}</p>
        </div>
      </div>

      <div className="">
        <div
          className="rounded-3xl max-w-[200px] border bg-center bg-no-repeat bg-cover overflow-hidden h-[300px] relative bottom-12 left-10"
          style={{ backgroundImage: `url(${cover})` }}
        ></div>

        <div className="flex p-12 absolute bottom-20 right-0">
          <div className="">
            <h2 className="header_text">{location.name}</h2>
            <p className="small_text">{location.description}</p>

            <div className="border-t mt-4 pt-2">
              <p>
                <strong>Location:</strong> {location.location}
              </p>
              <p>
                <strong>Open Hours:</strong> {location.openHours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
