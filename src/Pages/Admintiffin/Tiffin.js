import { useNavigate } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";

import config from "../../config";

const styles = {
  detailsContainer: {
    marginTop: "10px",
    marginBottom: "10px",
  },
};

const Tiffin = (props) => {
  const { tiffin, searchTiffins } = props;
  const navigate = useNavigate();

  const EditTiffin = () => {
    const tiffinId = tiffin.tiffinId;
    navigate("/tiffinDetailsData", { state: { tiffinId: tiffinId } });
  };

  const DeleteTiffin = () => {
    const id = tiffin.tiffinId;
    const url = config.serverURL + `/tiffin/delete/${id}`;
    const check = config.serverURL + `/tiffin/order/${id}`;
    axios
      .get(check, {
        headers: { Authorization: `Bearer ${localStorage["jwt"]}` },
      })
      .then((response) => {
        if (response.data.status == "success") {
          axios
            .delete(url, {
              headers: { Authorization: `Bearer ${localStorage["jwt"]}` },
            })
            .then((response) => {
              toast.success("Tiffin Deleted Successfully");
              const result = response.data;
              console.log(result.data);
              if (result.status == "success") {
                console.log(
                  "tiffind delete now calling searchTiffins function"
                );
                searchTiffins();
              }
            });
        } else {
          alert("Cannot Delete Tiffin : Tiffin is Assigned");
        }
      });
  };

  return (
    <div
      className="container col-md-4 mb-4"
      style={{
        display: "flex",
        flexDirection: "column",
        gridTemplateColumns: "1fr",
      }}
    >
      <div
        className="card"
        style={{
          display: "grid",
          minWidth: "18rem",
          position: "relative",
          borderRadius: 20,
          backgroundColor: "grey",
          color: "white",
        }}
      >
        <div
          className="card-body"
          style={{ position: "relative", padding: 5, color: "white" }}
        >
          <img
            src={config.serverURL + "/images/" + tiffin.tiffinImage}
            className="card-img-top"
            style={{
              height: 250,
              width: "100%",
              display: "block",
              borderRadius: 10,
            }}
            alt="..."
          />
          <div style={{ marginTop: 20, height: 100 }}>
            <h5 className="card-title">{tiffin.tiffinName}</h5>
            <p className="card-text">Description : {tiffin.description}</p>
          </div>
          <div className="row">
            <div className="col">
              <h5 className="card-title">Price : {tiffin.tiffinPrice}</h5>
            </div>
            <div className="col">
              <div className="d-grid gap-2 d-md-flex justify-content-md-end borderRadius-20">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={EditTiffin}
                >
                  Edit Tiffin
                </button>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={DeleteTiffin}
                >
                  Delete{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiffin;
