import React, { useEffect, useState } from "react";
import { LoginbaseURL } from "../utils/AxiosInstance";
import { SubmitResponse } from "../utils/ApiFunctions";
import toast from "react-hot-toast";

import CheckIc from "../assets/checkic.svg";

function ThankyouForSigningDoc() {
  const pathname = window.location.pathname;
  console.log(pathname);
  const queryParams = new URLSearchParams(location.search);
  const [email] = useState(queryParams.get("email") || "");
  const [documentID] = useState(queryParams.get("document_id") || "");

  const checkUserDocuemntSigned = async () => {
    const res = await SubmitResponse(
      `${LoginbaseURL}/updateUserStatusToSigned`,
      { email, documentID }
    );
    if (res?.data?.status == 200) {
      window.open(pathname, "_self", "noopener,noreferrer");
      setTimeout(() => {
        handleOpenAndAutoClose();
      }, 100);
    } else {
      window.open(pathname, "_self", "noopener,noreferrer");
      toast.error(res?.message);
      handleOpenAndAutoClose();
      //   window.location.href = "/";
    }
  };
  useEffect(() => {
    if (documentID && email) {
      checkUserDocuemntSigned();
    } else {
      handleOpenAndAutoClose();
    }
  }, [email, documentID]);

  const handleOpenAndAutoClose = () => {
    // const newTab = window.open(pathname, "_self", "noopener,noreferrer");

    setTimeout(() => {
      window.close();
    }, 100);
  };

  return (
    <div>
      <div class="thank-you-card">
        <div class="thank-you-icon">
          <img src={CheckIc} alt="Thank You" />
        </div>
        <h4 class="mb-3">Thank You!</h4>
        <p class="text-muted">You have successfully signed the document.</p>
      </div>
    </div>
  );
}

export default ThankyouForSigningDoc;
