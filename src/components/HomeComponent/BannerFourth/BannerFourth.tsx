import promo3 from "../../../assets/img/promo3.webp";
const BannerFourth = () => {
  return (
    <div className="mt-24 lg:pt-10">
      <div className="relative flex flex-col lg:flex-row bg-slate-50 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
        <div className="absolute inset-0"></div>
        <div className="lg:w-[50%] max-w-lg relative">
          <h2 className="text-4xl font-semibold md:text-5xl">
            Đừng bỏ lỡ những ưu đãi đặc biệt
          </h2>
          <span className="block mt-5 text-neutral-500">
            Đăng ký để nhận tin tức mới nhất, combo tiết kiệm, mã giảm giá...
          </span>
          <ul className="mt-10 space-y-4">
            <li className="flex items-center space-x-4">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-purple-800 bg-purple-100 relative">
                01
              </span>
              <span className="font-medium text-neutral-700">
                Combo tiết kiệm
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-blue-800 bg-blue-100 relative">
                02
              </span>
              <span className="font-medium text-neutral-700">
                Miễn phí vận chuyển
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-red-800 bg-red-100 relative">
                03
              </span>
              <span className="font-medium text-neutral-700">
                Sản phẩm cao cấp
              </span>
            </li>
          </ul>
          <form className="relative max-w-sm mt-10">
            <input
              className="block w-full px-4 py-3 text-sm font-normal bg-white rounded-full border-neutral-200 h-11"
              required
              aria-required="true"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="flex items-center justify-center rounded-full !leading-none bg-slate-900 hover:bg-slate-800 text-slate-50 absolute transform top-1/2 -translate-y-1/2 right-1 w-9 h-9"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </form>
        </div>
        <div className="relative block lg:absolute lg:right-0 lg:bottom-0 mt-10 lg:mt-0 max-w-lg lg:max-w-[calc(50%-40px)]">
          <img width="751" height="824" src={promo3} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default BannerFourth;
