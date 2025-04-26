import { Calculator, PoundSterling } from 'lucide-react';
import React from 'react';
import { useState } from 'react';

const MortgageCalculator = () => {
    const [showResults, setShowResults] = useState(false);
    const [formData, setFormData] = useState({
        mortgageAmount: "",
        mortgageTerm: "",
        interestRate: "",
        mortgageType: "",
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowResults(true);
    }

    const handleClear = (e) => {
        e.preventDefault();
        setFormData({
          mortgageAmount: "",
          mortgageTerm: "",
          interestRate: "",
          mortgageType: "",
        });
    }
  return (
    <form className="px-8 py-6" onSubmit={handleSubmit}>
      <div className="block md:flex items-center justify-between">
        <h1 className="font-700 text-xl text-mySlate-900 tracking-tight">
          Mortgage Calculator
        </h1>
        <button
          onClick={handleClear}
          type="button"
          className="cursor-pointer mt-2 md:mt-0 text-sm underline decoration-mySlate-700 decoration-1 underline-offset-2 text-mySlate-700"
        >
          Clear All
        </button>
      </div>
      <div className="mt-6">
        <label
          htmlFor="mortgageAmount"
          className="block mb-2 text-sm font-700 text-mySlate-700"
        >
          Mortgage Amount
        </label>
        <div className="border-[1.5px] border-mySlate-300 w-full rounded outline-0 flex items-center">
          <span className="bg-mySlate-100 py-2 px-4 rounded-tl rounded-bl">
            £
          </span>
          <input
            type="text"
            value={formData.mortgageAmount}
            onChange={handleInputChange}
            className="outline-0 w-full px-4"
            name="mortgageAmount"
            id="mortgageAmount"
          />
        </div>
      </div>
      <div className="block md:flex items-center gap-5 w-full mt-5">
        <div>
          <label
            htmlFor="mortgageTerm"
            className="block mb-2 text-sm font-700 text-mySlate-700"
          >
            Mortgage Term
          </label>
          <div className="border-[1.5px] border-mySlate-300 w-full rounded outline-0 flex items-center">
            <input
              type="text"
              className="outline-0 w-full px-4"
              value={formData.mortgageTerm}
              onChange={handleInputChange}
              name="mortgageTerm"
              id="mortgageTerm"
            />
            <span className="bg-mySlate-100 py-2 px-4 rounded-tr rounded-br">
              years
            </span>
          </div>
        </div>
        <div className="mt-3 md:mt-0">
          <label
            htmlFor="interestRate"
            className="block mb-2 text-sm font-700 text-mySlate-700"
          >
            Interest Rate
          </label>
          <div className="border-[1.5px] border-mySlate-300 w-full rounded outline-0 flex items-center">
            <input
              type="text"
              className="outline-0 w-full px-4"
              value={formData.interestRate}
              onChange={handleInputChange}
              name="interestRate"
              id="interestRate"
            />
            <span className="bg-mySlate-100 rounded-tr rounded-br py-2 px-4">
              %
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <label className="block mb-2 text-sm font-700 text-mySlate-700">
          Mortgage Type
        </label>
        <div className="flex flex-col w-full gap-3">
          <label
            className={`border-[1.5px]  px-4 py-2 rounded flex items-center gap-4 cursor-pointer ${
              formData.mortgageType === "repayment"
                ? "bg-lime-200/20 border-lime text-lime accent-lime"
                : "border-mySlate-300"
            }`}
          >
            <input
              type="radio"
              name="mortgageType"
              id="repayment"
              value="repayment"
              checked={formData.mortgageType === "repayment"}
              onChange={handleInputChange}
            />{" "}
            <span className="text-mySlate-900 font-bold text-[17px]">
              Repayment
            </span>
          </label>
          <label
            className={`border-[1.5px]  px-4 py-2 rounded flex items-center gap-4 cursor-pointer ${
              formData.mortgageType === "interestOnly"
                ? "bg-lime-200/20 border-lime text-lime accent-lime"
                : "border-mySlate-300"
            }`}
          >
            <input
              type="radio"
              name="mortgageType"
              id="interestOnly"
              value="interestOnly"
              checked={formData.mortgageType === "interestOnly"}
              onChange={handleInputChange}
            />{" "}
            <span className="text-mySlate-900 font-700 text-[17px]">
              Interest Only
            </span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="bg-lime mt-8 cursor-pointer rounded-full flex items-center justify-center gap-1 px-4 py-2 w-full md:w-auto"
      >
        <Calculator
          size={20}
          style={{
            color: "#122F3F",
          }}
        />
        <span>Calculate Repayments</span>
      </button>

      {/* {showResults && (
        <div className="mt-8 p-4 border rounded bg-mySlate-100">
          <h2 className="text-lg font-bold text-mySlate-900">
            Calculation Results
          </h2>
          <p className="text-mySlate-700">
            Your monthly repayment details will be displayed here.
          </p>
        </div>
      )} */}
    </form>
  );
}

export default MortgageCalculator;
