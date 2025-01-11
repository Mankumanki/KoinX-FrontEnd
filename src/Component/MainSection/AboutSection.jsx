function AboutSection() {
  return (
    <section
      id="About_Section"
      className="bg-white flex flex-col rounded-md mt-4 p-6 gap-6"
    >
      <p className="text-xl font-bold">About BitCoin</p>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-black">What is BitCoin?</p>
        <p className="text-sm">
          Bitcoin (BTC) is a cryptocurrency (a virtual currency) designed to act
          as money and a form of payment outside the control of any one person,
          group, or entity. This removes the need for trusted third-party
          involvement (e.g., a mint or bank) in financial transactions.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-black">What is Lorem Ipsum?</p>
        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold">Already Holding BitCoin?</p>

        <div className="flex flex-row gap-10 max-[768px]:flex-col max-[768px]:w-fit max-[768px]:gap-4">
          <div className="flex bg-blue-400 p-2 gap-2 rounded-md">
            <img
              className="w-20 h-full rounded-md self-center"
              alt="calculate_profit_img"
              src="https://s3-alpha-sig.figma.com/img/4a59/7cf5/e39cee97d83ba894aa0c105133924b9b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BIpcdewbeHvpF0MrAHY9Lvoj0pca~n77kDxgd55mI~LL6DhUVkQkiHr5pBEMM7AtTgJ3r50AD5rDtCXdoDGT56v03G1oM0r4wyjQQsqlRn7plrafv4xMISOsNszaNThUXSJrUlWt~XLXr7r86YIkB5PwI3lVDyklbGy~48E2qc86bk25uWBfyp2yk-BGZORYlvmG4DNJRnQ8qtcIJ8nj1kxPzIKT4O676Cdkfd09WRDGFQLhBevRjdipHN7UW6y1LZz651u9k7qWHX-nCLWNBhpwzx4i0aH4FddzREaKCwnmK~DAkruz1qAfUnsFZLCClIobUtEFP58DdJkB8Iyc1A__"
            ></img>
            <div className="flex flex-col gap-4 px-4 py-2 ">
              <p className="text-white font-semibold">Calculate Your Profits</p>
              <button className="text-black font-semibold bg-white p-2 rounded-md text-xs group">
                <div className="flex justify-center text-center gap-2">
                  <p className="self-center">Check Now</p>
                  <i className="transition-transform fa-solid fa-arrow-right self-center group-hover:translate-x-1"></i>
                </div>
              </button>
            </div>
          </div>

          <div className="flex bg-red-400 p-2 gap-2 rounded-md ">
            <img
              className="w-20 h-full rounded-md self-center"
              alt="calculate_profit_img"
              src="https://s3-alpha-sig.figma.com/img/b324/e6e3/5c577ca47c764bd8af01d840fe7ffccb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d4l6utWlIkrTQzqt77v9j0~gF~vbeJRrczq6KNeIyXwZT~GK~Lf~qi4wM95eBzMG3moI5HEb268uf2MKQuKUD6wweZBgLLHTk6QZsDSs8nG7Nz7CiR-h5Iw79zDhEU19rKCbLW~hJ1zjAjS0~-knfUlYgUq6TKJUUkaU0x3gNR0JFYjAUFYU5mGq~tfgaFpijbiNjl5z4AC4OllIoyuSrVGxTQu6~FX2-Fuzr8K3235R65bN7rlrzduhg6fIoYkkdy4zWD2~fnmekMZ5soQX0Vk~S3eDEs8YmPn5A6xFzi~MiO53Xe2K6bBVVtGA-eY-urXUeeYJHhrTlxAmvlSIyA__"
            ></img>
            <div className="flex flex-col gap-4 px-4 py-2 ">
              <p className="text-white font-semibold ">
                Calculate Your tax liability
              </p>
              <button className="text-black font-semibold bg-white p-2 rounded-md text-xs group">
                <div className="flex justify-center text-center gap-2">
                  <p className="self-center">Check Now</p>
                  <i className="transition-transform fa-solid fa-arrow-right self-center group-hover:translate-x-1"></i>
                </div>
              </button>
            </div>
          </div>
        </div>

        <p className="text-sm pt-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
