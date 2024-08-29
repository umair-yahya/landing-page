import React from 'react';
import {HiMagnifyingGlass} from 'react-icons/hi2';
import Buttons from '../Buttons/Buttons';
import {IoMdArrowForward} from 'react-icons/io';

const SearchBar = () => {
	return (
		<>
			<div className="flex justify-center items-center w-full mt-6 md:mt-8 lg:mt-10">
				<div className="flex justify-center bg-white w-full md:w-3/4 lg:w-2/3 xl:w-[40%] rounded-full overflow-hidden border border-gray-300 shadow-md">
					<HiMagnifyingGlass
						size={24}
						color="#9D9D9D"
						className="ml-4 my-3 mt-5"
					/>
					<input
						placeholder="Search for a product, GTIN, brand or category"
						className="flex-1 px-6 py-5 focus:outline-none"
					/>
					<div className="hidden md:flex items-center pr-1">
						<Buttons
							label={<IoMdArrowForward size={24} color="white" />}
							className="bg-[#C90F50] text-white font-medium p-4 rounded-full"
						/>
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center mt-4 md:mt-6 lg:mt-8">
				<Buttons
					label="Search"
					className="bg-[#C90F50] text-white font-medium p-3 rounded-full text-sm md:text-base lg:text-lg w-40"
				/>
			</div>
		</>
	);
};

export default SearchBar;
