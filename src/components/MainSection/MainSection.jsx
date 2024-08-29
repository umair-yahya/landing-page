import React, {useEffect, useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import mobile1 from '../../assets/Mobile Screen 1.png';
import mobile2 from '../../assets/Mobile Screen 2.png';

const MainSection = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<div>
			<div className="relative py-10 px-4 md:px-8 lg:px-16 overflow-hidden md:h-[560px]"> 
				{windowWidth > 786 ? (
					<div className="absolute right-0 top-[90px] z-10">
						<img src={mobile2} alt="Mobile 2" className="w-[283px] relative" />
					</div>
				) : (
					''
				)}

				<div className="text-center z-20 mt-5">
					<span className="block text-[#1C0E0D] text-2xl md:text-3xl lg:text-4xl font-bold">
						Compare price for over
					</span>
					<span className="block text-[#1C0E0D] text-2xl md:text-3xl lg:text-4xl font-bold">
						5 million products sold online
					</span>
					<div className="mt-6">
						<SearchBar />
					</div>
				</div>

				{windowWidth > 786 ? (
					<div className="absolute left-0 top-[90px] z-10">
						<img src={mobile1} alt="Mobile 1" className="w-[340px]" />
					</div>
				) : (
					''
				)}
			</div>
			{windowWidth < 786 ? (
				<div className="flex flex-wrap justify-center gap-2 md:hidden">
					<div className="flex-none w-[140px]">
						<img src={mobile2} alt="Mobile 2" className="w-full" />
					</div>
					<div className="flex-none w-[140px]">
						<img src={mobile1} alt="Mobile 1" className="w-full" />
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default MainSection;
