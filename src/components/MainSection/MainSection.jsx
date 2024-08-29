import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './styles.css';
import mobile1 from '../../assets/Mobile Screen 1.png';
import mobile2 from '../../assets/Mobile Screen 2.png';

const MainSection = () => {
	return (
		// <div className="relative py-10 px-4 md:px-8 lg:px-16">
		// 	<div className="absolute left-0 bottom-10 z-10  top-10">
		// 		<img src={mobile1} alt="Mobile 1" className="w-[340px]" />
		// 	</div>

		// 	<div className="text-center z-20 mt-9">
		// 		<span className="block text-[#1C0E0D] text-2xl md:text-3xl lg:text-4xl font-bold">
		// 			Compare price for over
		// 		</span>
		// 		<span className="block text-[#1C0E0D] text-2xl md:text-3xl lg:text-4xl font-bold">
		// 			5 million products sold online
		// 		</span>
		// 		<div className="mt-6">
		// 			<SearchBar />
		// 		</div>
		// 	</div>

		// 	<div className="absolute right-0 bottom-10 z-10 top-8">
		// 		<img src={mobile2} alt="Mobile 2" className="w-[283px]" />
		// 	</div>
		// </div>
//         <div className="relative py-12 px-4 md:px-8 lg:px-18 overflow-hidden">
//     <div className="absolute left-0 top-20 z-10">
//         <img src={mobile1} alt="Mobile 1" className="w-[340px] object-cover" />
//     </div>

//     <div className="text-center z-20 mt-9">
//         <span className="block text-[#1C0E0D] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Compare price for over
//         </span>
//         <span className="block text-[#1C0E0D] text-2xl md:text-3xl lg:text-4xl font-bold">
//             5 million products sold online
//         </span>
//         <div className="mt-6">
//             <SearchBar />
//         </div>
//     </div>

//     <div className="absolute right-0 top-20 z-10">
//         <img src={mobile2} alt="Mobile 2" className="w-[283px] object-cover" />
//     </div>
// </div>
<div className="relative py-10 px-4 md:px-8 lg:px-16 overflow-hidden h-[500px]">
    <div className="absolute right-0 top-[90px] z-10">
        <img src={mobile2} alt="Mobile 2" className="w-[283px] relative" />
    </div>

    <div className="text-center z-20 mt-9">
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

    <div className="absolute left-0 top-[90px] z-10">
        <img src={mobile1} alt="Mobile 1" className="w-[340px]" />
    </div>
</div>

	);
};

export default MainSection;
