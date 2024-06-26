import "./Erorr.css";

const E404 = () => {
    return (
        <>
            <div className="contain">
                <div className="content-center">
                    <h2 className="error">404</h2>
                    <p>PAGE NOT FOUND</p>
                    <p>It looks like nothing was found at this location.</p>
                    <button onClick={() => (window.location.href = "/")}>
                        BACK TO HOME
                    </button>
                </div>
            </div>
        </>
    );
};

export default E404;
