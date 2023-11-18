import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-3 space-y-4 mb-7">
                <h2 className="text-2xl font-medium">Login With</h2>
                <button className="btn btn-outline btn-info w-full">
                <FaGoogle className="text-xl"/>
                    LogIn With Google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub className="text-xl"/>
                    LogIn With GitHub
                </button>
            </div>
            {/* find us */}
            <div className="p-3  mb-7">
                <h2 className="text-2xl font-medium mb-4">Find Us On</h2>
                <a className="p-4 flex items-center border rounded-t-lg" href="">
                <FaFacebook  className="mr-4 text-xl"/>
                Facebook
                </a>
                <a className="p-4 flex items-center border-x" href="">
                <FaTwitter  className="mr-4 text-xl"/>
                Twitter
                </a>
                <a className="p-4 flex items-center border rounded-b-lg" href="">
                <FaInstagram  className="mr-4 text-xl"/>
                Instragram
                </a>
            </div>
            {/* Q zone */}
            <div className="p-3 space-y-4 mb-7">
                <h2 className="text-2xl font-medium">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;