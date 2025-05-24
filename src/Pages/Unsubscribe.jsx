import React, { use, useEffect, useState } from "react";
import { SubmitResponse } from "../utils/ApiFunctions";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../utils/AxiosInstance";
import toast from "react-hot-toast";

function Unsubscribe() {
  const pathname = window.location.pathname;

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const queryParams = new URLSearchParams(window.location.search);
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );
  const [token] = useState(localStorage.getItem("userDetails"));
  const email = queryParams.get("email");

  const callAPI = async () => {
    const formData = new FormData();
    formData.append("email", email);
    const res = await SubmitResponse(`${baseURL}/updateEmailStatus`, formData);
    if (res.data?.status == 200) {
      toast.dismiss();
      toast.success(res?.data?.message);
      localStorage.setItem("userDetails", JSON.stringify(res?.data?.data));
      setLoading(false);
      navigate("/");
    } else {
      toast.dismiss();
      toast.error(res?.message);
    }
  };

  useEffect(() => {
    if (userDetails?.emailSettings == false) {
      if (!token) {
        localStorage.clear();
      }
      navigate("/");
    } else {
      console.log("ddddddddddddddddddddddddd");
      callAPI();
    }
    callAPI();
  }, []);

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card text-center shadow-lg p-4 success-card">
          <div className="check-icon">
            <i className="bi bi-check-circle-fill"></i>
          </div>

          <p className="text-muted">
            You will be automatically redirected from here please wait.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">
            {loading && (
              <div className="spinner-border text-success" role="status"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unsubscribe;
