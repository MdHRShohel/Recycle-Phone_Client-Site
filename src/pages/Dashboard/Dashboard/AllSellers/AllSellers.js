import React, { useEffect, useState } from "react";

const AllSellers = () => {
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const showSellers = data.filter((saler) => saler.check === true);
        // console.log(showSellers)

        setSellers(showSellers);
      });
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-center font-semibold  mt-10">All Sellers</h2>

      <div className="overflow-x-auto w-5/6 mx-auto my-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Avater</th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-16 h-16">
                        <img src={user?.photoURL} alt="Avater" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {user?.displayName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {user?.email}
                  </span>
                </td>
                <td>{user?.check === true ? "Seller" : "Buyer"}</td>
                <th>
                  <button className="btn btn-error btn-sm">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;