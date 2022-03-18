import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({color, title, icons, subtitle}) => (
    <div className="flex flex-row items-center justify-start p-3 m-2 white-glassmorphism cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icons}
        </div>
        <div className="flex flex-1 flex-col ml-5">
            <h3 className="dark:text-white text-gray-700 mt-2 text-lg">{title}</h3>
            <p className="dark:text-white text-gray-700 mt-2 text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
);

const Services = () => {
    return (
        <div className="flex flex-col mf:flex-row w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex items-start justify-start flex-col">
                    <h1 className="dark:text-white text-gradient py-2 text-3xl sm:text-5xl ">
                        Services that we
                        <br />
                        continue to improve
                    </h1>
                </div>
            </div>
            <div className="flex-1 flex-col items-center justify-start">
                <ServiceCard 
                    color="bg-[#2952E3]"
                    title="Security Guaranteed"
                    icons={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
                />
                <ServiceCard 
                    color="bg-[#8945F8]"
                    title="Best exchange rates"
                    icons={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
                />
                <ServiceCard 
                    color="bg-[#F84550]"
                    title="Fastest transactions"
                    icons={<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
                />
            </div>
        </div>
    );
}

export default Services;