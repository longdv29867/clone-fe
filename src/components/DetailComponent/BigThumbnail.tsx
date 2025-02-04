const BigThumbnail = () => {
  return (
    <>
      <div className="relative pb-[100%]">
        <div className="absolute w-full h-full">
          <img
            alt=""
            className="object-cover w-full h-full rounded-2xl"
            src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/460324/item/vngoods_05_460324.jpg?width=750"
          />
        </div>
        <div className="absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white rounded-full flex items-center justify-center text-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3.5 h-3.5"
          >
            <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
          <span className="ml-1 leading-none">Mới</span>
        </div>
        <button className="absolute flex items-center justify-center bg-white rounded-full w-9 h-9 text-neutral-700 dark:text-slate-200 right-3 top-3 ">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
              stroke="#ef4444"
              fill="#ef4444"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default BigThumbnail;
