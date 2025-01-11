import navBarConfig from "../../Config/nav-bar.json";

function TeamSection() {
  return (
    <section id="Team_Section">
      <div className="bg-white h-max rounded-lg my-5 p-6">
        <div className="text-2xl text-[#0F1629] font-semibold">Team</div>
        <div className="text-[#3E424A] text-[16px] font-medium my-4 pt-2">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </div>
        {navBarConfig.TeamData.map((team) => {
          return (
            <div
              key={team.name}
              className="flex bg-[#E8F4FD] rounded-lg py-4 md:px-8 my-6 max-[768px]:flex-col max-[768px]:gap-4"
            >
              <div className="justify-center flex flex-col items-center ">
                <div>
                  <img
                    className="rounded-xl w-full max-[768px]:w-32"
                    src={team.img}
                    alt={team.name}
                  />
                </div>
                <div className="text-[#0F1629] text-[15px] font-semibold py-1 text-center w-full">
                  {team.name}
                </div>
                <div className="text-[#788F9B] text-xs font-medium text-center w-full">
                  {team.designation}
                </div>
              </div>
              <div className="flex justify-center px-4 ml-4  text-[#0F1629] text-sm font-normal">
                {team.about}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TeamSection;
