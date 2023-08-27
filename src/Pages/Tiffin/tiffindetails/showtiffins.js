import { useState } from "react";
import Tiffin from "./tiffin";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import Footcomponent from "../../../Components/footer";
import NavUser from "../../../Components/navUser";
import config from "../../../config";
import NavAdmin from "../../../Components/navAdmin";

const ShowTiffins = () => {
  const [tiffins, setTiffins] = useState([]);
  const { state } = useLocation("");

  const searchTiffins = () => {
    const url = config.serverURL + `/tiffin/details`;
    axios
      .get(url, { headers: { Authorization: `Bearer ${localStorage["jwt"]}` } })
      .then((response) => {
        const result = response.data;
        setTiffins(result["data"]);
        console.log(tiffins);
        // if (result!=null) {
        //   setTiffins(result)
        // } else {
        //   alert('something went wrong..')
        // }
      });
  };
  const navigate = useNavigate();

  useEffect(() => {
    searchTiffins();
    console.log("getting called");
    if (state) {
      toast.info(state.message);
    }
  }, []);

  return (
    <div>
      <NavUser />
      
      <div className="container-fluid">
        <h1 className="text-center text-white">Tiffin List</h1>
        <div className="row justify-content-center">
          {tiffins.map((tiffin, index) => (
            <div className="col-lg-4 col-md-6 my-2" key={index}>
              <Tiffin tiffin={tiffin} />
            </div>
          ))}
        </div>
      </div>
      <Footcomponent />
    </div>
  );
};

export default ShowTiffins;
