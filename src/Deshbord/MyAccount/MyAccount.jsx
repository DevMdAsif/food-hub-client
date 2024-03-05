import { useState } from "react";
import useFetchData from "../../hooks/FetchData/useFetchData";
import useAuthContext from "../../hooks/usecontext/useAuthContext";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";

function MyAccount() {
  const { user } = useAuthContext();
  const { data } = useFetchData(`/api/user/${user.email}`);
  const [edit, setEdit] = useState(false);

  const [gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  // Get day

  let days;

  if (selectedDate) {
    days = `${selectedDate.date()}/ ${
      selectedDate.month() + 1
    } / ${selectedDate.year()}`;
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setEdit(false);

    // TODO : user update and show functionality

    console.log(name, gender, days);
    try {
      await axios.put(`/api/update-user/${user.email}`, { name, gender, days });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="h-full min-h-screen">
      <div className=" pt-10 w-1/2 mx-auto">
        <div className="text-center mx-auto ">
          <div className="text-start flex justify-between">
            <h3 className="text-4xl text-white font-medium">
              Personal Information
            </h3>
            {edit ? (
              ""
            ) : (
              <h4
                className="cursor-pointer mt-2 text-[#24b6ed] "
                onClick={() => setEdit(!edit)}
              >
                Change Information
              </h4>
            )}
          </div>
        </div>
        <form onSubmit={handleUpdate} className="space-y-5 mt-3 flex flex-col">
          {/* update name */}

          <div className="space-y-2">
            <label className="text-white mb-3">Name</label>
            <input
              className="bg-[#040717] border border-[#1e293b] text-white sm:text-sm rounded-lg block w-full p-2.5 outline-none focus:border-[#f58220] placeholder:text-[#1e293b]"
              defaultValue={data.name}
              onChange={(e) => setName(e.target.value)}
              disabled={edit ? false : true}
              required
              placeholder={data.placeholder}
            />
          </div>

          {/* add gender  */}

          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              style={{ color: "white" }}
            >
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              style={{ color: "white" }}
              value={gender}
              onChange={handleGenderChange}
            >
              <FormControlLabel
                value="male"
                disabled={edit ? false : true}
                control={
                  <Radio
                    disabled={edit ? false : true}
                    sx={{
                      color: "white",
                      "&.Mui-checked": { color: "#f58220" },
                    }}
                  />
                }
                label={<span style={{ color: "white" }}>Male</span>}
              />
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    disabled={edit ? false : true}
                    sx={{
                      color: "white",
                      "&.Mui-checked": { color: "#f58220" },
                    }}
                  />
                }
                label={<span style={{ color: "white" }}>Female</span>}
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    disabled={edit ? false : true}
                    sx={{
                      color: "white",
                      "&.Mui-checked": { color: "#f58220" },
                    }}
                  />
                }
                label={<span style={{ color: "white" }}>Other</span>}
              />
            </RadioGroup>
          </FormControl>

          {/* day picker */}

          <div className="space-y-2 flex flex-col">
            <label className="text-white mb-3">Your Date of Birth</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={selectedDate}
                disabled={edit ? false : true}
                onChange={handleDateChange}
                sx={{
                  svg: { color: "white" },
                  input: {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#f58220",
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>

          <button
            type="submit"
            className="mt-5 text-white bg-[#f58220] hover:bg-orange-700 focus:outline-none font-medium duration-500 rounded-lg text-base w-full px-5 py-2.5 text-center "
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyAccount;
