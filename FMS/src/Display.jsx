import { useState } from "react";
import pdfImage from "../public/pdf.png";
import axios from "axios";
import Header from './Header'


function Display() {
  const [pdf, setPdf] = useState();
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = new FormData();
      data.append("file", formData);
      const response = await axios.post(
        "http://localhost:3001/upload/file",
        data
      );
      if (!response.data) {
        throw new Error("Cannot fetch data");
      } else {
        console.log(response.data.data);
        setPdf(response.data.data.toString());
      }
    } catch (err) {
      console.log("Error fetching PDF:", err);
    }
  };

  return (
    <div>
      
    <Header/>
      <form onSubmit={handleSubmit}></form>

      {pdf && (
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="bg-gray-800 text-white text-center">
                      <th className="w-1/6 min-w-[160px] text-lg font-semibold py-4 px-3 border-l border-transparent">
                        TLD
                      </th>
                      <th className="w-1/6 min-w-[160px] text-lg font-semibold py-4 px-3">
                        Duration
                      </th>
                      <th className="w-1/6 min-w-[160px] text-lg font-semibold py-4 px-3">
                        Registration
                      </th>
                      <th className="w-1/6 min-w-[160px] text-lg font-semibold py-4 px-3">
                        Renewal
                      </th>
                      <th className="w-1/6 min-w-[160px] text-lg font-semibold py-4 px-3">
                        Transfer
                      </th>
                      <th className="w-1/6 min-w-[160px] text-lg font-semibold py-4 px-3 border-r border-transparent">
                        Register
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center font-medium text-base py-5 px-2 bg-gray-100 border-b border-l border-gray-200">
                        .com
                      </td>
                      <td className="text-center font-medium text-base py-5 px-2 bg-white border-b border-gray-200">
                        1 Year
                      </td>
                      <td className="text-center font-medium text-base py-5 px-2 bg-gray-100 border-b border-gray-200">
                        $75.00
                      </td>
                      <td className="text-center font-medium text-base py-5 px-2 bg-white border-b border-gray-200">
                        $5.00
                      </td>
                      <td className="text-center font-medium text-base py-5 px-2 bg-gray-100 border-b border-gray-200">
                        $10.00
                      </td>
                      <td className="text-center font-medium text-base py-5 px-2 bg-white border-b border-r border-gray-200">
                        <a
                          href="javascript:void(0)"
                          className="border border-blue-600 py-2 px-6 text-blue-600 inline-block rounded hover:bg-blue-600 hover:text-white"
                        >
                          Sign Up
                        </a>
                      </td>
                    </tr>
                    {/* Additional rows go here */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Display;
