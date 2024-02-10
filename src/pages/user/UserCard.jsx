import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const UserCard = ({ user }) => {
  // console.log(user);
  return (
    <div>
      <Link to={`/userList/${user.id}`}>
        <div className="p-4 border rounded cursor-pointer hover:bg-gray-100">
          <img
            src={user?.image}
            alt={user?.firstName}
            className="w-full h-24 object-cover mb-2"
          />
          <h2 className="text-lg font-bold">First Name: {user?.firstName} </h2>
          <h2 className="text-lg font-bold">Last Name: {user?.lastName}</h2>
          <p className="text-gray-600">Email: {user?.email}</p>
          <p className="text-gray-600">
            Address:{" "}
            {`${user?.address?.state}, ${user?.address?.suite}, ${user?.address?.city}`}
          </p>
          <p className="text-gray-600">Company: {user.company.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
