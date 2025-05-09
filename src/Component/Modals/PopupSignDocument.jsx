import { ErrorMessage, Field, Formik } from "formik";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { bidpopup } from "../../utils/Utils";

const PopupSignDocument = (props) => {
  return (
    <>
      <Modal {...props} centered keyboard={false} backdrop="static">
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <div className="modal_sec_in">
            <h2 className="text-center heading_type2">NDA Signing!!</h2>
            <p>To Create Your Account Please Sign NDA.</p>

            <Button
              onClick={() => props.callback()}
              className="btn btn_primary"
            >
              Sign NDA
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PopupSignDocument;
