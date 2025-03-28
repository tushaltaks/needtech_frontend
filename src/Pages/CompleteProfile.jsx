import React, { useState } from 'react';
import Logoimg from '../assets/logo.png';
import { Container } from 'react-bootstrap';
import { Form, Link, useLocation } from 'react-router-dom';
import Step1 from '../Component/Steps/Step1';
import Step2 from '../Component/Steps/Step2';
import Step3 from '../Component/Steps/Step3';
import Step4 from '../Component/Steps/Step4';
import Step5 from '../Component/Steps/Step5';
import Step6 from '../Component/Steps/Step6';
import Step7 from '../Component/Steps/Step7';
import { TopSteps } from '../Component/Steps/TopSteps';
import Step8 from '../Component/Steps/Step8';
import { SubmitResponse } from '../utils/ApiFunctions';
import { baseURL } from '../utils/AxiosInstance';
import toast from 'react-hot-toast';


const fieldsToAppend = [
    'LastStep',
    'businessActivity',
    'otherIndustry',
    'aboutBusiness',
    'expectationAboutStartup',
    'financingAquirungStartus',
    'budgetRange',
    'financingDevelopingStartus',
    'industries',
    'profileImage',
    'aboutyourSelf'
];

const CompleteProfile = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const lastStep = searchParams.get("lastStep");
    const [userDetails] = useState(JSON.parse(localStorage.getItem("userDetails")) || {});
    const [oldValues, setValues] = useState(userDetails ?
        Object.fromEntries(
            Object.entries(userDetails).filter(([key]) => fieldsToAppend.includes(key))
        )
        : {});
    const [step, setStep] = useState(parseInt(lastStep) || 1);

    const nextStep = () => {
        if (step < 8) setStep(step + 1);
    };
    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const updateDetails = async (values) => {
        const formData = new FormData();
        const userId = localStorage.getItem("userId");
        fieldsToAppend.forEach(field => {
            if (values?.[field]) {
                formData.append(field, values[field]);
            }
        });

        if (Array.isArray(values?.industries)) {
            values.industries.forEach((industry, index) => {
                formData.append(`industries[]`, industry);
            });
        } else {
            formData.append('industries[]', values?.industries);
        }

        if (Array.isArray(values?.budgetRange)) {
            values.budgetRange.forEach((budget, index) => {
                formData.append(`budgetRange[]`, budget);
            });
        } else {
            formData.append('budgetRange[]', values?.budgetRange);
        }




        const res = await SubmitResponse(`${baseURL}/updateUserDetails/${userId}`, formData);
        if (res.data?.status == 200) {
            toast.dismiss()
            // toast.success(res?.data?.message);
            if (values?.LastStep == 7) {
                localStorage.setItem('name', res?.data?.data?.name);
                localStorage.setItem('email', res?.data?.data?.email);
                localStorage.setItem('token', res?.data?.data?.token);
                localStorage.setItem('userId', res?.data?.data?._id);
                localStorage.setItem("userDetails", JSON.stringify(res?.data?.data));
            }
            nextStep();
        }
        else {
            toast.dismiss()
            toast.error(res?.message);
        }
    };




    return (
        <>
            <div className='cp_s'>
                <Container>
                    <div className='cp_s_in'>
                        <div className='cp_s_head'>
                            <Link to="/" className='cp_s_logo'><img src={Logoimg} /></Link>
                            <p>This will take just 2 minutes to complete and it allows us to show tailored listings based on your criteria.</p>
                        </div>



                        <div className='cp_s_steps'>

                            <TopSteps currentStep={step} />
                            <div className='cp_s_steps_in'>
                                {step === 1 && <Step1 next={nextStep} setValues={setValues} oldValues={oldValues} updateDetails={updateDetails} />}
                                {step === 2 && <Step2 next={nextStep} prev={prevStep} setValues={setValues} oldValues={oldValues} updateDetails={updateDetails} />}
                                {step === 3 && <Step3 next={nextStep} prev={prevStep} setValues={setValues} oldValues={oldValues} updateDetails={updateDetails} />}
                                {step === 4 && <Step4 next={nextStep} prev={prevStep} setValues={setValues} oldValues={oldValues} updateDetails={updateDetails} />}
                                {step === 5 && <Step5 next={nextStep} prev={prevStep} setValues={setValues} oldValues={oldValues} updateDetails={updateDetails} />}
                                {step === 6 && <Step6 next={nextStep} prev={prevStep} setValues={setValues} oldValues={oldValues} updateDetails={updateDetails} />}
                                {step === 7 && <Step7 next={nextStep} prev={prevStep} setValues={setValues} oldValues={oldValues} updateDetails={updateDetails} />}
                                {step === 8 && <Step8 next={nextStep} prev={prevStep} setValues={setValues} oldValues={oldValues} />}
                            </div>

                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default CompleteProfile;
