import { MdDeleteOutline } from "react-icons/md";
import useFetchingCartUser from "../../hooks/useFetchingUser/useFetchingUser";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import axios from "axios";
import Loading from "../../component/Loading/Loading";

function Customers() {
  const {
    data: users = [],
    isError,
    isPending,
    error,
    refetch,
  } = useFetchingCartUser();

  // handle delete user

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios
            .delete(`/api/deletUser/${id}`)
            .then((res) => {
              if (res.data.deletedCount === 1) {
                Swal.fire("user has been deleted", "", "success");
                refetch();
              }
            })
            .catch(() => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
          });
        }
      }
    });
  };

  return (
    <div className="text-white h-full p-10">
      <h2 className="text-2xl mb-5 ml-2">Customers List</h2>
      {isPending && <Loading />}
      {isError && <p>{error}</p>}
      <h3 className="border border-[#1e293b] p-5 text-xl rounded-t-xl">
        Customers
      </h3>
      <table className="w-full border border-[#1e293b]  ">
        <thead>
          <tr className="border border-[#1e293b] bg-[#0f172a] text-[#64737e]">
            <th className="py-3 "></th>
            <th className="py-3 ">Name</th>
            <th className="py-3">Email</th>
            <th className="py-3">Role</th>
            <th className="py-3">Edit</th>
            <th className="py-3">Action</th>
          </tr>
        </thead>

        {users?.map((user, index) => (
          <tbody key={user._id}>
            <tr className="text-center border border-[#1e293b] ">
              <td>
                <p className="ml-2">{index + 1}</p>
              </td>
              <td className="py-3 ">
                <h2 className="ml-3">{user.name}</h2>
              </td>
              <td className="py-3">{user.email}</td>
              <td className="py-3 cursor-pointer">
                {user && user.role ? user.role : "user"}
              </td>
              <td className="py-3">
                <Link to={`/deshbord/editCusInfo/${user._id}`}>
                  <CiEdit className="mx-auto text-2xl text-[#ed5d1a] cursor-pointer" />
                </Link>
              </td>
              <td className="py-3" onClick={() => handleDeleteUser(user._id)}>
                <MdDeleteOutline className="mx-auto text-xl text-red-600 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Customers;
