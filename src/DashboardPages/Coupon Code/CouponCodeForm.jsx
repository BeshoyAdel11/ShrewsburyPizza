import Close from "/src/assets/images/Dashboard-images/Close.png";
import Settings from "/src/assets/images/Dashboard-images/Settings.png";
import UploadtoCloud from "/src/assets/images/Dashboard-images/Upload to Cloud.png";
import { useState } from "react";

function CouponCodeForm({ setIsFormOpen, setProducts, products }) {
  const [formState, setFormState] = useState({
    Code: "",
    Type: "",
    Price: "",
    Numberofuses: "",
    Status: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    console.log(name);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState({ ...formState, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProducts = [...products, formState];
    setProducts(updatedProducts);

    localStorage.setItem("CouponCode", JSON.stringify(updatedProducts));

    setIsFormOpen(false);
  };

  return (
    <section className="overflow-y-auto flex justify-center w-screen z-30 inset-0 fixed bg-[#7C7C7C7A] bg-opacity-90">
      <div className="w-[766px] h-[1248px] bg-[#ffffff]">
        <div className="w-fit ml-auto pt-[30px] pr-[30px]">
          <button onClick={() => setIsFormOpen(false)}>
            {" "}
            <img src={Close}></img>
          </button>
        </div>

        <div className="w-full mx-auto py-[20px] px-[30px] bg-white   rounded-lg">
          <h2 className="text-center InterFont font-[400] text-[24px] leading-[29.05px] text-[#088D56] mb-6">
            Add New Coupon Code
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[55px]">
            {/* Code */}
            <div className="flex flex-col gap-[20px]">
              <div className="flex justify-between items-center">
                <label className=" InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                  Code (*)
                </label>
                <button className="flex items-center justify-center h-[56px] gap-2  w-[213px] bg-[#088D56B2] rounded-[20px] ">
                  <i className="fa-solid fa-circle-plus   text-[#666666A6]"></i>
                  <span className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000] ">
                    Add Random
                  </span>
                </button>
              </div>

              <div className="flex flex-col InterFont font-[400] text-[16px] leading-[19.36px] text-[#00000080]">
                <span>Example 1: ABCDEFGH</span>
                <span>Example 2: AAAA, BBBB, CCCC, DDDD</span>
              </div>
              <input
                onChange={handleChange}
                name="Code"
                type="text"
                className="w-full px-3 py-2 rounded-[20px] border-solid border-[1px] border-[#088D56]"
              />
            </div>

            {/* Type (*) */}
            <div className="flex flex-col  gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Type (*)
              </label>
              <div className="pl-[40px]">
                <select
                  onChange={handleChange}
                  name="Type"
                  className=" w-[341px] pl-[40px] px-3 h-[48px] rounded-[20px] border-solid border-[1px] border-[#088D56] InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]"
                >
                  <option>Amount</option>
                  <option>Percentage</option>
                </select>
              </div>
            </div>

            {/* Number of uses (*) */}
            <div className="flex flex-col gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Number of uses (*)
              </label>
              <div className="pl-[40px]">
                <input
                  onChange={handleChange}
                  name="Numberofuses"
                  type="number"
                  className="w-[341px]   px-3 h-[48px] rounded-[20px] border-solid border-[1px] border-[#088D56]"
                />
              </div>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Status (*)
              </label>
              <div className="flex items-center pl-[40px] gap-[100px] ">
                <button
                  name="Status"
                  value="Yes"
                  onClick={handleChange}
                  type="button"
                  className="w-[191px] h-[48px] rounded-[20px] border-solid border-[1px] border-[#088D56] InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]"
                >
                  YES
                </button>
                <button
                  name="Status"
                  value="No"
                  onClick={handleChange}
                  type="button"
                  className="w-[191px] h-[48px] rounded-[20px] border-solid border-[1px] border-[#088D56] InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]"
                >
                  NO
                </button>
              </div>
            </div>

            {/* Price (*) */}
            <div className="flex flex-col gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Price (*)
              </label>
              <div className="pl-[40px]">
                <input
                  onChange={handleChange}
                  placeholder=" $ 0.00"
                  name="Price"
                  type="number"
                  className="w-[341px] px-3 h-[48px] rounded-[20px] border-solid border-[1px] border-[#088D56]"
                />
              </div>
            </div>

            {/* Expiration (*) */}
            <div className="flex flex-col gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Expiration (*)
              </label>
              <div className="flex items-center pl-[40px] gap-[100px]">
                <button
                  type="button"
                  className="w-[191px] h-[48px] rounded-[20px] border-solid border-[1px] border-[#088D56] InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]"
                >
                  YES
                </button>
                <button
                  type="button"
                  className="w-[191px] h-[48px] rounded-[20px] border-solid border-[1px] border-[#088D56] InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]"
                >
                  NO
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex flex-col gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Image
              </label>

              <div className="pl-[40px]">
                <label
                  htmlFor="fileInput"
                  className="w-[252px]    h-[47px] bg-[#B7E2D133] flex items-center justify-evenly rounded-[20px] border-solid border-[1px] border-[#088D56] cursor-pointer InterFont font-[400] text-[16px] leading-[19.36px] text-[#088D56]"
                >
                  Upload Media
                  <img
                    src={UploadtoCloud}
                    alt="Upload"
                    className="object-contain"
                  />
                  <input
                    onChange={handleImageChange}
                    id="fileInput"
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end items-center gap-[20px]">
              <button
                onClick={() => setIsFormOpen(false)}
                type="button"
                className="w-[126px] h-[48px] rounded-[20px] bg-[#ffffff] border-solid border-[1px] border-[#088D56] nterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6] "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-[126px] h-[48px] rounded-[20px] bg-[#B7E2D133] border-solid border-[1px] border-[#088D56] nterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56] "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CouponCodeForm;
