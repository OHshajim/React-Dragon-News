import moment from "moment";

const Header = () => {
    return (
        <div>
            <img src="../../../../logo.png" alt="logo" />
            <p>Journalism Without Fear or Favour</p>
            {moment().format("dddd, MMMM D, YYYY ")}

        </div>
    );
};

export default Header;