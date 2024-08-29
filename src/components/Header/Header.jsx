import React, {useState} from 'react';
import logo from '../../assets/Logo.png';
import Buttons from '../Buttons/Buttons';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	return (
		<div className="flex flex-col md:flex-row pt-8 justify-between px-6 md:px-24 items-center">
			<div className="flex items-center w-full md:w-auto">
				<div className="pt-2">
					<img src={logo} alt="logo" style={{width: '240px', height: '30px'}} />
				</div>
				<div className="md:hidden ml-auto flex items-center">
					<Buttons
						label={<GiHamburgerMenu size={30} color="#C90F50" />}
						navHandler={toggleMenu}
						className={"pt-2"}
					/>
				</div>
			</div>
			<div
				className={`md:flex flex-col md:flex-row items-center ${
					isMenuOpen ? 'block' : 'hidden'
				} md:block`}
				style={{marginTop: isMenuOpen ? '10px' : ''}}
			>
				<div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto">
					<Buttons
						label={'Categories'}
						className="text-[#A5B2B5] font-[500] border-b-2 border-transparent mb-2 md:mb-0 md:mr-7 text-[13px] w-full md:w-[90px] hover:text-[#1C0E0D] hover:border-[#C90F50]"
					/>
					<Buttons
						label={'Brands'}
						className="text-[#A5B2B5] font-[500] border-b-2 border-transparent mb-2 md:mb-0 md:mr-7 text-[13px] w-full md:w-[90px] hover:text-[#1C0E0D] hover:border-[#C90F50]"
					/>
					<Buttons
						label={'Contact Us'}
						className="text-[#A5B2B5] font-[500] border-b-2 border-transparent mb-2 md:mb-0 md:mr-7 text-[13px] w-full md:w-[90px] hover:text-[#1C0E0D] hover:border-[#C90F50]"
					/>
				</div>
				<div className="md:flex items-center w-full justify-center mt-2 md:mt-0">
					<Buttons
						label="Sell With Us"
						className="border-b-2 bg-[#C90F50] font-medium text-white rounded-full text-xs md:text-sm w-[140px] md:w-[120px] p-2 md:p-3 lg:p-3"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
