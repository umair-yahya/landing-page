import React from 'react';
import logo from '../../assets/Logo.png';
import Buttons from '../Buttons/Buttons';

const Header = () => {
	return (
		<div className="flex flex-col md:flex-row pt-8 justify-between px-6 md:px-24">
			<div className="pt-2">
				<img src={logo} alt="logo" style={{width: '240px', height: '30px'}} />
			</div>
			<div className="flex flex-col md:flex-row items-center">
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
				<Buttons
					label={'Sell With Us'}
					className="border-b-2 bg-[#C90F50] font-[500] mb-2 md:mb-0 md:mr-3 p-3 text-white rounded-[30px] text-[13px] w-[110px]"
				/>
			</div>
		</div>
	);
};

export default Header;
