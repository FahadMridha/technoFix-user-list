import { useState, useEffect } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    companyName: "",
  });

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "name") return a.firstName.localeCompare(b.name);
    if (sortBy === "email") return a.email.localeCompare(b.email);
    if (sortBy === "company") return a.company.name.localeCompare(b.company.name);
    return 0;
  });

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onInput={(e) => setSearch(e.target.value)}
          className="border"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border"
        >
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="company">Company</option>
        </select>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="border py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="border py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="street">Street:</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              required
              className="border py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="suite">Suite:</label>
            <input
              type="text"
              id="suite"
              name="suite"
              value={formData.suite}
              onChange={handleInputChange}
              required
              className="border py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="border py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className="border py-2 px-4 rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
      {/* User List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {sortedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
