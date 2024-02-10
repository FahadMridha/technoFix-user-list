import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleUserDetails = () => {
  const user = useLoaderData();
  // console.log(user);
  const { image, firstName, lastName, email, address, company } = user;
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="card w-96 glass">
          <figure>
            <img src={image} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="text-lg font-bold">First Name: {firstName} </h2>
            <h2 className="text-lg font-bold">Last Name: {lastName}</h2>
            <p className="text-gray-600">Email: {email}</p>
            <p className="text-gray-600">
              Address:{" "}
              {`${address?.state}, ${address?.suite}, ${address?.city}`}
            </p>
            <p className="text-gray-600">Company: {company.name}</p>
          </div>
        </div>
      </div>
      <Link className="flex justify-center items-center" to={"/"}>
        <button className="bg-blue-600 border rounded-lg py-2 px-3 text-white">
          Back
        </button>
      </Link>
    </>
  );
};

export default SingleUserDetails;
