import Close from "/src/assets/images/Dashboard-images/Close.png";
import Settings from "/src/assets/images/Dashboard-images/Settings.png";
import UploadtoCloud from "/src/assets/images/Dashboard-images/Upload to Cloud.png";
import { useState } from "react";

function FoodCategoriesForm({ setIsFormOpen, setProducts, products }) {
  const [formState, setFormState] = useState({
    name: "",
    Ordering: "",
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

    const updatedProducts = [...products, formState];
    setProducts(updatedProducts);

    localStorage.setItem("Categories", JSON.stringify(updatedProducts));

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
            New Category
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[55px]">
            {/* Name */}
            <div className="flex flex-col gap-[20px]">
              <label className=" InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Name (*)
              </label>
              <input
                onChange={handleChange}
                name="name"
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
                onChange={handleChange}
                type="text"
                name="Ordering"
                className="w-full px-3 py-2 rounded-[20px] border-solid border-[1px] border-[#088D56]"
              />
            </div>

            {/* Delivery / Pick-up */}
            <div className="flex flex-col gap-[20px]">
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
              <div className="flex  items-center pl-[40px] gap-[100px] ">
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
              <div className="flex  items-center pl-[40px] gap-[100px]">
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

            {/* Image */}
            <div className="flex flex-col gap-[20px]">
              <label className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6]">
                Image (*)
              </label>

              <div className="pl-[40px]">
                <label
                  htmlFor="fileInput"
                  className="w-[252px] h-[47px] bg-[#B7E2D133] flex items-center justify-evenly rounded-[20px] border-solid border-[1px] border-[#088D56] cursor-pointer InterFont font-[400] text-[16px] leading-[19.36px] text-[#088D56]"
                >
                  {/* الصورة التي ستظهر بدلاً من النص */}
                  Upload Media
                  <img
                    src={UploadtoCloud}
                    alt="Upload"
                    className="object-contain"
                  />
                  {/* العنصر المخفي لاختيار الملف */}
                  <input
                    onChange={handleImageChange}
                    id="fileInput"
                    type="file"
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
                onChange={handleChange}
                name="description"
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

export default FoodCategoriesForm;
