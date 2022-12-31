import Image from 'next/image';
import card1 from '../../public/card-1.webp';
import card2 from '../../public/card-2.webp';
import card3 from '../../public/card-3.webp';
import card4 from '../../public/card-4.webp';

const Card = () => {
    return (

        <div>

            <h1
                className=" text-center font-semibold text-[42px] mt-16 -tracking-wide leading-[65.07px] text-indigo-900">Kami membantu
                <span className='text-blue-600'> Anda</span> dengan</h1>

            <div className="flex flex-row flex-wrap justify-center mt-16 gap-x-8">

                <div
                    className="justify-self-start w-72 h-50 font-mono bg-white border-4 border-gray-300 rounded-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-[10px] hover:shadow-lg hover:shadow-indigo-500 duration-700 ">
                    <a href="#">
                        <Image className='w-full rounded-t-sm' src={card1} alt='/'/>
                        <div className="p-5">

                            <h5 className="text-xl font-medium tracking-tight text-indigo-900 mb-1">My Recap</h5>

                            <p className=" text-xs font-normal text-gray-700 mb-8">Pengguna dapat memasukkan sekaligus melihat rekapan data kesehatan.</p>

                            <div className="icn-learn flex flex-row items-center gap-x-2">
                                <h5 className='text-[13px] text-blue-600'>Learn More</h5>
                                <svg
                                    width="13"
                                    height="12"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.21795 11L11.8333 6M11.8333 6L7.21795 1M11.8333 6H1"
                                        stroke="#1F2B6C"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg>

                            </div>
                        </div>
                    </a>
                </div>

                <div
                    className="justify-self-start w-72 h-50 font-mono bg-white border-4 border-gray-300 rounded-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-[10px] hover:shadow-lg hover:shadow-indigo-500 duration-700 ">
                    <a href="#">
                        <Image className='w-72 rounded-t-md' src={card2} alt='/'/>
                        <div className="p-5">

                            <h5 className="text-xl font-medium tracking-tight text-indigo-900 mb-1">My Hospital</h5>

                            <p className=" text-xs font-normal text-gray-700 mb-4">Temukan rumah sakit yang
                                tersebar di seluruh Indonesia untuk melayani dan menanganimu.</p>

                            <div className="icn-learn flex flex-row items-center gap-x-2">
                                <h5 className='text-[13px] text-blue-600'>Learn More</h5>
                                <svg
                                    width="13"
                                    height="12"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.21795 11L11.8333 6M11.8333 6L7.21795 1M11.8333 6H1"
                                        stroke="#1F2B6C"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg>

                            </div>
                        </div>
                    </a>
                </div>

                <div
                    className="justify-self-start w-72 h-50 font-mono bg-white border-4 border-gray-300 rounded-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-[10px] hover:shadow-lg hover:shadow-indigo-500 duration-700 ">
                    <a href="#">
                        <Image className='w-72 rounded-t-md' src={card3} alt='/'/>
                        <div className="p-5">

                            <h5 className="text-xl font-medium tracking-tight text-indigo-900 mb-1">Payment Insurance</h5>

                            <p className=" text-xs font-normal text-gray-700 mb-12">Nikmati manfaat asuransimu untuk layanan HealTalk</p>

                            <div className="icn-learn flex flex-row items-center gap-x-2">
                                <h5 className='text-[13px] text-blue-600'>Learn More</h5>
                                <svg
                                    width="13"
                                    height="12"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.21795 11L11.8333 6M11.8333 6L7.21795 1M11.8333 6H1"
                                        stroke="#1F2B6C"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg>

                            </div>
                        </div>
                    </a>
                </div>

                <div
                    className="justify-self-start w-72 h-50 font-mono bg-white border-4 border-gray-300 rounded-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-[10px] hover:shadow-lg hover:shadow-indigo-500 duration-700 ">
                    <a href="#">
                        <Image className='w-72 rounded-t-md' src={card4} alt='/'/>
                        <div className="p-5">

                            <h5 className="text-xl font-medium tracking-tight text-indigo-900 mb-1">My Consul</h5>

                            <p className=" text-xs font-normal text-gray-700 mb-8">Pengguna dapat
                                berkonsultasi dengan dokter online secara langsung. Tak perlu khawatir</p>

                            <div className="icn-learn flex flex-row items-center gap-x-2">
                                <h5 className='text-[13px] text-blue-600'>Learn More</h5>
                                <svg
                                    width="13"
                                    height="12"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.21795 11L11.8333 6M11.8333 6L7.21795 1M11.8333 6H1"
                                        stroke="#1F2B6C"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg>

                            </div>
                        </div>
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Card
