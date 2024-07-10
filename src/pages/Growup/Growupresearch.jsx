import React from "react";

const Growupresearch = () => {
  return (
    <div className="">
      <div className="w-[50%] pb-10">
        <h1
          className="uppercase font-semibold pb-2"
          style={{
            fontFamily: "Montserrat",
            fontSize: "32px",
          }}
        >
          Research
        </h1>
        <p className="text-[18px] font-light">
          What i did was creating a research plan for usability testing. I
          created a list of questions for user to interact and gave feedbacks
          from there.
        </p>
        <br />
        <p className="text-[18px] font-light">
          From the usability testing, here are the key findings that i found the
          most:
        </p>
        <ul className="">
          <li className="list-disc list-inside font-medium text-[18px] leading-tight">
            Copywriting of the website is confusing and mostly not done.
          </li>
          <li className="list-disc list-inside font-medium text-[18px] leading-tight">
            The website doesn't have a good user flow.
          </li>
          <li className="list-disc list-inside font-medium text-[18px] leading-tight">
            A lot of missing features.
          </li>
          <li className="list-disc list-inside font-medium text-[18px] leading-tight">
            No consistency in spacing.
          </li>
        </ul>
      </div>
      <hr className="border-[#D9D9D9] h-[1px] pb-10" />
    </div>
  );
};

export default Growupresearch;
