import React, {useEffect, useState} from 'react';
import footerImg from '../../assets/Group 10249.png';

const Footer = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			{windowWidth > 786 ? (
				<div
					className="h-[130px] bg-white w-[82%] absolute top-[510px] z-20"
					style={{
						clipPath:
							'polygon(0px 0px, calc(96% - 44px) 0px, 100% 100%, 0px 100%)',
						borderRadius: '2px 232px 2px 2px',
					}}
				>
					<div className="h-[100px] w-[100%] pt-10 pl-4">
						<img src={footerImg} alt="" className="w-[1000px]" />
					</div>
				</div>
			) : (
				<div className="w-[100%] h-[50px] mt-6 bg-[white] pt-4">
					<img src={footerImg} alt="Footer Logos" className="footer-img" />
				</div>
			)}
		</>
	);
};

export default Footer;
