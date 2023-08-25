import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "@mantine/core";

const PhonesDetailsPage = () => {
  const [phoneData, setPhoneData] = useState({});
  const { id } = useParams();

  const fetchPhoneData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/phones/${id}`
      );
      // Timeout for testing purposes
      setTimeout(() => {
        setPhoneData(response.data);
      }, 1000);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhoneData();
  }, [id]);

  return phoneData.name ? (
    <div className="container mt-5">
      <h1 className="text-center">Phone Details</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{phoneData.name}</h5>
          <p className="card-text">{phoneData.description}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Manufacturer:</strong> {phoneData.manufacturer}
            </li>
            <li className="list-group-item">
              <strong>Color:</strong> {phoneData.color}
            </li>
            <li className="list-group-item">
              <strong>Price:</strong> ${phoneData.price}
            </li>
            <li className="list-group-item">
              <strong>Screen:</strong> {phoneData.screen}
            </li>
            <li className="list-group-item">
              <strong>Processor:</strong> {phoneData.processor}
            </li>
            <li className="list-group-item">
              <strong>RAM:</strong> {phoneData.ram} GB
            </li>
          </ul>
          <Link to="/" className="btn btn-primary mt-3">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Loader color="dark" />
  );
};

export default PhonesDetailsPage;
