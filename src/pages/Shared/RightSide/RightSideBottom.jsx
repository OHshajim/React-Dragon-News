import photo from '../../../assets/bg.png'
const RightSideBottom = () => {
    return (
        <div className="hero min-h-[80vh] my-10" style={{ backgroundImage: `url(${photo})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Create an Amazing Newspaper</h1>
                    <p className="mb-5 text-base">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button
                        className="btn bg-[#D72050] rounded-none text-white border-none text-xl font-semibold px-6"
                    >Learn More</button>
                </div>
            </div>
        </div>
    )
};

export default RightSideBottom;