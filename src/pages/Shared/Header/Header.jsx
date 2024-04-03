import moment from "moment";

const Header = () => {
    return (
        <div className="text-center ">
            <img src="../../../../logo.png" alt="logo"  className="mx-auto my-10"/>
            <p className="my-3 text-[#706F6F] text-lg ">Journalism Without Fear or Favour</p>
            <p className="text-xl text-[#403F3F] font-medium ">{moment().format(`dddd,MMMM D, YYYY  `)}</p>
        </div>
    );
};

export default Header;