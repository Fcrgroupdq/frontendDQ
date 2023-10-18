const TableOne = ({ doctor }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white"></h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              photo
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
             S.N
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            Experience (in Years)
            </h5>
          </div>
        </div>

        {doctor.map((item,index) => (
          <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
            <div className="flex items-center gap-2 p-2.5 xl:p-5">
              <div className="flex-shrink-0 rounded-md">
                <img
                  className="rounded-full"
                  width={"60px"}
                  src={item.image}
                  alt="Brand"
                />
              </div>
              {/* <p className="hidden text-black dark:text-white sm:block">Google</p> */}
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white font-bold">{index+1}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-7 font-bold">{item.name}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p 
                className={`text-white ${
                  item.status === "approved" ? "bg-meta-5 p-1 rounded-md" : "bg-red-500"
                }`}
              >
                {item.status}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{item.exp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
