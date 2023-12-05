import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-52">
            <Link to='/'><button className="btn btn-success mb-3 text-white text-base">Go Home</button></Link>
            <h1 className="text-6xl font-semibold">Opps!!!</h1>
        </div>
    );
};

export default ErrorPage;