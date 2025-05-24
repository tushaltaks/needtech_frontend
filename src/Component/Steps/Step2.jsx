import { ErrorMessage, Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { stepTwo } from "../../utils/Utils";
import { GetFunction } from "../../utils/ApiFunctions";
import { baseURL } from "../../utils/AxiosInstance";

const Step2 = ({ next, prev, oldValues, setValues, updateDetails }) => {
  const [categoryList, setCategoryList] = useState([]);
  const getCategoryList = async () => {
    const res = await GetFunction(`${baseURL}/getCategoryList`);

    if (res?.status == 200) {
      setCategoryList(res?.data);
    } else {
      toast.error(res?.data?.message);
    }
  };


    useEffect(() => {
    getCategoryList();
  }, []);

    const initialValues = {
        industries: oldValues?.industries || [],
        otherIndustry: oldValues?.otherIndustry || "",
    };

  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={stepTwo}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            setValues({ ...oldValues, ...values });
            const categoryNames = categoryList
              ?.filter((cat) => values.industries?.includes(cat._id))
              .map((cat) => cat.title);

            updateDetails({
              ...oldValues,
              ...values,
              categoryNames,
              LastStep: 2,
            });
            // next();
            setSubmitting(false);
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="step_body">
                <div className="step_form">
                  <p>2. What are the main industries you are interested in?</p>
                  <div className="custom_radio2 form-group">
                    {categoryList?.map((item) => (
                      <div className="custom_radio2_itm" key={item._id}>
                        <Field
                          type="checkbox"
                          name="industries"
                          id={item._id}
                          value={item._id}
                          as={Form.Check}
                          label={item.title}
                        />
                      </div>
                    ))}
                  </div>
                  <ErrorMessage
                    name="industries"
                    component="div"
                    className="text-danger mt-2"
                  />

                  <Form.Group className="form-group">
                    <Field
                      as="textarea"
                      rows={3}
                      name="otherIndustry"
                      placeholder="If you didn’t find the industries that you are looking for, please let us know"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="otherIndustry"
                      component="div"
                      className="text-danger mt-2"
                    />
                  </Form.Group>
                </div>
                <div className="step_footer">
                  <Button className="btn_info" type="button" onClick={prev}>
                    Back
                  </Button>
                  <button className="btn btn_primary ms-auto" type="submit">
                    Next
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Step2;
