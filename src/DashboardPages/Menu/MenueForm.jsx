import React, { useState } from "react";
import Close from "/src/assets/images/Dashboard-images/Close.png";
import Settings from "/src/assets/images/Dashboard-images/Settings.png";
import UploadtoCloud from "/src/assets/images/Dashboard-images/Upload to Cloud.png";
import Edit from "/src/assets/images/Dashboard-images/Edit.png";
import Expand from "/src/assets/images/Dashboard-images/Expand.png";

function MenueForm({ setIsFormOpen, setProducts, products }) {
  const [showSettings, setshowSettings] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    alias: "",
    ordering: "",
    price: "",
    description: "",
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

    // إضافة المنتج الجديد للمصفوفة
    const updatedProducts = [...products, formState];
    setProducts(updatedProducts);

    // تخزين البيانات في localStorage
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // غلق الفورم بعد الإرسال
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

        <div className="w-full mx-auto py-[20px]  px-[30px] bg-white   rounded-lg">
          <h2 className="text-center InterFont font-[400] text-[24px] leading-[29.05px] text-[#088D56] mb-6">
            New Item In Appetizer
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[25px]">
            {/* Name */}
            <div className="flex flex-col gap-[20px]">
              <label className=" InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Name (*)
              </label>
              <input
                name="name"
                onChange={handleChange}
                type="text"
                className="w-full px-3 py-2 rounded-[20px] border-solid border-[1px] border-[#088D56]"
              />
            </div>

            {/* Alias */}
            <div className="flex flex-col gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Alias (*)
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-[20px] border-solid border-[1px] border-[#088D56]"
              />
            </div>

            {/* Ordering */}
            <div className="flex flex-col gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Ordering (*)
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-[20px] border-solid border-[1px] border-[#088D56]"
              />
            </div>

            {/* Delivery / Pick-up */}
            <div className="flex flex-col  gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Delivery / Pick-up (*)
              </label>
              <div className="flex  items-center pl-[40px] gap-[100px]">
                <button
                  type="button"
                  className="w-[191px] h-[48px] rounded-[20px] border-solid border-[1px] border-[#088D56] InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6] "
                >
                  Delivery
                </button>
                <button
                  type="button"
                  className="w-[191px] h-[48px] rounded-[20px] border-solid border-[1px] border-[#088D56] InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]"
                >
                  Pick-up
                </button>
              </div>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Status (*)
              </label>
              <div className="flex items-center pl-[40px] gap-[100px] ">
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

            {/* Open */}
            <div className="flex flex-col gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Open (*)
              </label>
              <div className="flex items-center pl-[40px] gap-[100px]">
                <button
                  type="button"
                  className="w-[191px] h-[48px] rounded-[20px] border-solid border-[1px] border-[#088D56] InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]"
                >
                  Always
                </button>
                <button
                  type="button"
                  className="w-[191px] h-[48px] rounded-[20px] border-solid border-[1px] border-[#088D56] InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]"
                >
                  Set Time
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-col gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Price (*)
              </label>
              <div className="relative  flex items-center pl-[40px] gap-[20px]">
                <input
                  type="text"
                  className="w-[357px] h-[48px] px-3 py-2 rounded-[20px] border-solid border-[1px] border-[#088D56] InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]"
                  placeholder="$0.00"
                />

                <button
                  type="button"
                  onClick={() => setshowSettings(!showSettings)}
                  className="w-[79px] h-[48px] rounded-[20px] flex justify-center items-center border-solid border-[1px] border-[#088D56]"
                >
                  <img src={Settings} className="w-[35px] h-[35px]"></img>
                </button>

                {showSettings && (
                  <div className="absolute flex flex-col gap-[10px] bottom-4 right-0 w-[176px] h-[106px] rounded-tl-[20px] py-[20px] px-[7px]  rounded-tr-[20px] rounded-br-[20px] rounded-bl-[5px] border-[1px] border-[#B7E2D1] border-solid">
                    <div>
                      <button className="flex items-center gap-[10px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                        <img src={Edit}></img>Update Price
                      </button>
                    </div>
                    <div>
                      <button className="flex items-center gap-[10px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                        <img src={Expand}></img>Update Size
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="flex flex-col gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Image (*)
              </label>

              <div className="pl-[40px]">
                <label
                  htmlFor="fileInput"
                  className="w-[252px] h-[47px]  bg-[#B7E2D133] flex items-center justify-evenly rounded-[20px] border-solid border-[1px] border-[#088D56] cursor-pointer InterFont font-[400] text-[16px] leading-[19.36px] text-[#088D56]"
                >
                  Upload Media
                  <img
                    src={UploadtoCloud}
                    alt="Upload"
                    className="object-contain"
                  />
                  <input
                    id="fileInput"
                    type="file"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-[20px]">
              <label className="nterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Description
              </label>
              <textarea
                name="description"
                onChange={handleChange}
                className="w-full px-3 py-2 h-[48px] rounded-[20px] border-solid border-[1px] border-[#088D56]"
              ></textarea>
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

export default MenueForm;
