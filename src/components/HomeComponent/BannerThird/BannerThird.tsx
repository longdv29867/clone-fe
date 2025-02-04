import imgBanner2 from "../../../assets/img/promo2.webp";
import imgBg from "../../../assets/img/bg-banner.svg";
import imgLogo from "../../../assets/img/sf-logo.png";

const BannerThird = () => {
  return (
    <div className="mt-28">
      <div className="lg:pt-10">
        <div className="container mx-auto relative flex flex-col lg:flex-row lg:justify-end bg-yellow-50 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
          <div>
            <img
              alt=""
              className="absolute top-0 left-0 object-contain w-full h-full"
              src={imgBg}
            />
          </div>
          <div className="lg:w-[45%] max-w-lg relative">
            <a className="inline-block text-slate-600" href="/">
              <img
                alt="logo"
                className="w-auto h-8 sm:h-10"
                src={imgLogo}
                style={{ color: "transparent" }}
              />
            </a>
            <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-4 sm:mt-6 !leading-[1.13] tracking-tight">
              Sản phẩm <br /> trẻ em đặc biệt
            </h2>
            <span className="block mt-4 text-slate-500">
              Thời trang là một hình thức thể hiện bản thân và tự chủ ở một thời
              điểm và địa điểm cụ thể.
            </span>
            <div className="flex mt-4 space-x-2 sm:space-x-5 sm:mt-8">
              <a
                className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 bg-slate-900  hover:bg-slate-800 text-slate-50 shadow-xl"
                href="/search"
              >
                Xem thêm
              </a>
            </div>
          </div>
          <div className="relative block lg:absolute lg:left-0 lg:bottom-0 mt-10 lg:mt-0 max-w-xl lg:max-w-[calc(55%-40px)]">
            <img alt="" src={imgBanner2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerThird;
