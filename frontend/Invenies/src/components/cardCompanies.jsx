import  { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "./serachbar";

const MultiCardCarousel = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseApi = await axios.get("https://jsonplaceholder.typicode.com/users");
        const responseDb = await axios.get("http://localhost:3000/api/users/new");

        const usersApi = responseApi.data.map(user => ({
          ...user,
          source: 'API'
        }));

        const usersDb = responseDb.data.map(user => ({
          ...user,
          source: 'Database'
        }));

        const combinedUsers = [...usersApi, ...usersDb];
        setUsers(combinedUsers);
        setFilteredUsers(combinedUsers); 
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="mt-8 w-120 flex justify-center">
      <div className="w-11/12">
        <Searchbar onSearch={handleSearch} />
        <div className="relative">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {filteredUsers.map((user, index) => (
              <div
                className="flex flex-col w-80 p-4 items-center bg-[#e1f3e1] rounded-lg shadow-md mb-4"
                key={index}
              >
                <h3 className="text-lg font-bold">{user.name}</h3>
                <p className="text-gray-500">
                  <strong>Source:</strong> {user.source}
                </p>
                <p className="text-gray-500">
                  <strong>Username:</strong> {user.username}
                </p>
                <p className="text-gray-500">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-gray-500">
                  <strong>City:</strong> {user.address.city}
                </p>
                <p className="text-gray-500">
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p className="text-gray-500">
                  <strong>Company:</strong> {user.company.name}
                </p>
                <div className="">
                  <button className="relative mt-4 text-white rounded-xl p-4 font-semibold">
                    <a className="bg-black p-2">More info</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
