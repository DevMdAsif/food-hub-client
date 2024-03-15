import useFetchData from "../../hooks/FetchData/useFetchData";
import { useParams } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../component/Loading/Loading";

function EditUserInfo() {
  const params = useParams();
  const [checkbox, setCheckbox] = useState(false);
  const [updateError, setUpdateError] = useState("");
  const navigate = useNavigate();

  const { error, loading, data } = useFetchData(`/api/user/${params.id}`);

  useEffect(() => {
    const value = data?.role === "admin";
    setCheckbox(value);
  }, [data]);

  // handling user role

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/api/admin/${params.id}`, {
        role: checkbox ? "admin" : "user",
      });
      if (response.data.modifiedCount === 1) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "update successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/deshbord/customers");
      }
    } catch (error) {
      setUpdateError(error.message);
    }
  };

  return (
    <div className="text-white pt-10">
      {error && <p>{error}</p>}
      {loading && <Loading />}
      <form onSubmit={handleSubmit}>
        <div className="space-y-6 max-w-xl mx-auto">
          <div>
            <label className="text-white uppercase mb-3">name</label>
            <input
              className="bg-[#040717] border border-[#1e293b] text-white sm:text-sm rounded-lg block w-full p-2.5 outline-none focus:border-[#f58220] placeholder:text-[#1e293b]"
              type="text"
              defaultValue={data.name}
              disabled
            />
          </div>
          <div>
            <label className="text-white uppercase mb-3">email</label>
            <input
              className="bg-[#040717] border border-[#1e293b] text-white sm:text-sm rounded-lg block w-full p-2.5 outline-none focus:border-[#f58220] placeholder:text-[#1e293b]"
              type="email"
              defaultValue={data.email}
              disabled
            />
          </div>
          <p>
            <Checkbox
              onClick={() => setCheckbox(!checkbox)}
              checked={checkbox}
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "#f58220",
                },
              }}
            />
            <span className="text-white ">Admin</span>
          </p>
          {updateError && <p>{updateError}</p>}
          <button
            type="submit"
            className="mt-5 text-white bg-[#f58220] hover:bg-orange-700 focus:outline-none font-medium duration-500 rounded-lg text-base w-full px-5 py-2.5 text-center "
          >
            Update Roll
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUserInfo;
