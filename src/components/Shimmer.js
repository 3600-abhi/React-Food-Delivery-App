

function Shimmer() {
    return (
        <>
            <div className="flex flex-wrap justify-center">
                {
                    Array(20).fill("").map((_, index) => (
                        <div className="h-80 w-56 p-2 m-2 border shadow-lg bg-gray-100" key={index} ></div>
                    ))
                }
            </div>
        </>
    );
}

export default Shimmer;