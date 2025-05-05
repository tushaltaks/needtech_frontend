import { toast } from "react-hot-toast";
import AxiosInstance, { baseURL } from "../utils/AxiosInstance";
import CryptoJS from "crypto-js";

// export const STRIPE_MODE = "test";
export const STRIPE_TYPE = import.meta.env.VITE_STRIPE_TYPE;
export const STRIPE_MODE = import.meta.env.VITE_STRIPE_MODE;
export const ImageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
export const PDfUrl =
  "https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-pdf-file-icon-png-png-image_4899509.png";

export const NoImge =
  "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

export const GetFunction = async (Url) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await AxiosInstance.get(
      Url,
      // Url + "?" + "page=" + page + "&" + "limit=" + limit,
      config
    );
    if (res.status == 200) {
      return res?.data;
    }
  } catch (error) {
    toast.dismiss();
    return toast.error(
      error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : "Something Went Wrong"
    );
  }
};

export const SubmitResponse = async (URL, values) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await AxiosInstance.post(URL, values, config);
    // console.log("resapi", res?.data?.status, res.status);
    if (res.status == 200) {
      return res;
    } else {
      // console.log("resapi", res?.data?.data?.message);
      return { message: res?.data.message };
    }
  } catch (error) {
    return {
      message: error?.response?.data?.data?.message
        ? error?.response?.data?.data?.message
        : "Something Went Wrong In API",
    };
  }
};

export const DeleteRespone = async (URL, values) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await AxiosInstance.delete(URL, config);
    // console.log("resapi", res?.data?.status, res.status);
    if (res.status == 200) {
      return res;
    } else {
      return { message: res?.data?.data?.message };
    }
  } catch (error) {
    return "Something Went Wrong In API";
  }
};

export const FirstLettCapital = (str) => {
  return str != undefined
    ? str?.charAt(0)?.toUpperCase() + str?.slice(1, str?.length)
    : "";
};

export const handleimageUrl = (url) => {
  if (typeof url == "string") {
    // return ImageBaseUrl + url;

    return url != undefined
      ? url?.startsWith("https")
        ? url
        : ImageBaseUrl + url
      : NoImge;
  } else {
    return ImageBaseUrl + url;
  }
};

export const handleErrorImage = (e) => {
  e.target.src = NoImge;
};
export const handleimageUrlPdf = (url) => {
  return ImageBaseUrl + url;
};

export const DownloadGloabal = async (url, filename) => {
  const imageUrl = handleimageUrl(url); // Replace with your image URL

  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    toast.error("something went wrong");
    console.error("Error downloading file:", error);
  }
};

export const formatPhoneNumber = (input) => {
  const cleaned = ("" + input).replace(/\D/g, ""); // Remove non-numeric characters
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,3})$/); // Match groups of digits

  if (match) {
    let formattedValue = "";

    if (match[1]) {
      formattedValue += `(${match[1]}`;
    }
    if (match[2]) {
      formattedValue += `) ${match[2]}`;
    }
    if (match[3]) {
      formattedValue += `-${match[3]}`;
    }

    return formattedValue.trim(); // Return the formatted phone number
  }

  return input; // Return the input unchanged if it doesn't match the pattern
};

export const formatPastedPhoneNumber = (pastedInput) => {
  const cleaned = ("" + pastedInput).replace(/\D/g, ""); // Remove non-numeric characters

  // Define different regex patterns for various phone number formats
  const patterns = [
    /^(\d{3})(\d{3})(\d{4})$/, // Matches 10 digits without any separators
    /^\+?(\d{2})(\d{3})(\d{3})(\d{4})$/, // Matches with a country code (+) followed by 10 digits
    /^\+?(\d{1})(\d{3})(\d{3})(\d{4})$/, // Matches with a country code (+) followed by 11 digits
    /^(\d{3})([\s-]?)(\d{3})([\s-]?)(\d{4})$/, // Matches digits with separators like space or hyphen
  ];

  // Iterate through patterns to find a match
  for (const pattern of patterns) {
    const match = cleaned.match(pattern);
    if (match) {
      let formattedValue = "";

      // Generate formatted phone number based on matched groups
      if (match[1]) {
        formattedValue += `(${match[1]}`;
      }
      if (match[2]) {
        formattedValue += `) ${match[2]}`;
      }
      if (match[3]) {
        formattedValue += `-${match[3]}`;
      }
      if (match[4]) {
        formattedValue += `-${match[4]}`;
      }

      return formattedValue.trim(); // Return the formatted phone number
    }
  }

  return pastedInput; // Return the input unchanged if no pattern matches
};

export const Limits = [
  { value: 10, label: 10 },
  { value: 20, label: 20 },
  { value: 50, label: 50 },
];

const key = CryptoJS.enc.Utf8.parse("JSONTEXTNEEDTECHWORKBYJPLOFT.COM"); // Must be 32 bytes for AES-256
const iv = CryptoJS.enc.Utf8.parse("JSONTEXTNEEDTECH");

export const decryptValue = (encryptedData) => {
  const decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC, // Use CBC mode
    padding: CryptoJS.pad.Pkcs7, // Use PKCS7 padding
  });

  // Convert decrypted bytes to a UTF-8 string
  return decrypted.toString(CryptoJS.enc.Utf8);
};
