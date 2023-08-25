import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "@mantine/core";

const AllPhonesPage = () => {
  const [phonesData, setPhonesData] = useState([]);
  const fetchPhonesData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/phones");
      // Timeout for testing purposes
      setTimeout(() => {
        setPhonesData(response.data);
      }, 1000);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPhonesData();
  }, []);

  return phonesData.length === 0 ? (
    <Loader color="dark" />
  ) : (
    <div className="container mt-5">
      <h1 className="text-center">Phone List</h1>
      <div className="row">
        {phonesData.map((phone) => (
          <div key={phone.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{phone.name}</h5>
                <p className="card-text">{phone.description}</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Manufacturer:</strong> {phone.manufacturer}
                  </li>
                  <li className="list-group-item">
                    <strong>Color:</strong> {phone.color}
                  </li>
                  <li className="list-group-item">
                    <strong>Price:</strong> ${phone.price}
                  </li>
                  <li className="list-group-item">
                    <strong>Screen:</strong> {phone.screen}
                  </li>
                  <li className="list-group-item">
                    <strong>Processor:</strong> {phone.processor}
                  </li>
                  <li className="list-group-item">
                    <strong>RAM:</strong> {phone.ram} GB
                  </li>
                </ul>
                <Link
                  to={`/phone-details/${phone.id}`}
                  className="btn btn-primary mt-3"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPhonesPage;
