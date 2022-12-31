import Image from 'next/image';
import lgolmg from '../public/Logo.svg';
import vctrlmg from '../public/vectorLanding.svg';
import { useState } from 'react';

export default function Login() {


    return (


        <div
            className="max-w-max"
            style={{
                fontFamily: 'Poppins'
            }}>

            <div className="grid grid-cols-2 divide-x">

            {/* Left Side */}
                <div
                    className="bg-login container mx-auto px-[60px] pt-[29px] h-screen text-white">
                    <Image className='object-contain w-[150px] mb-[17px]' src={lgolmg} alt='/'/>
                    <div
                        className="leading-tight font-semibold"
                        style={{
                            fontSize: '53px'
                        }}>
                        <h1 className="Txt-login">Halo,</h1>
                        <h1>Selamat Datang</h1>
                    </div>
                    <h2 className="font-mono pr-32 leading-normal text-xl ">Kami menjaga data anda dengan enkripsi yang aman</h2>
                    
                    <div className=" mt-24  flex justify-center">
                      
                    <Image className=' w-[500px]' src={vctrlmg} alt='/'/>
                    </div>
                </div>
            {/* Left Side */}


                        
                {/* Right Side */}        
                <div className='container mx-auto px-[60px] pt-[80px] h-screen spa'>
                    <div className="inline-flex flex-col space-y-3 justify-end mb-3">
                        <h2 className="text-5xl font-semibold text-indigo-900">Masuk</h2>
                        <p className="font-mono text-md text-slate-400 w-[300px]">Masukan ID dan Passwordmu melalui email yang terdartar di rumah sakit</p>
                    </div>

                   {/* Form Login */}
                    <form className="mb-5">
                        <label className="block mb-1 text-sm font-medium text-indigo-900">ID</label>
                        <input
                            type="text"
                            className=" font-mono bg-white border-2 border-indigo-900 text-sm rounded-lg block w-96 p-2 focus:outline-none  placeholder-indigo-900 focus:placeholder-slate-400  focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Masukan ID"/>
                    </form>

                    <form className="mb-5">
                        <label className="block mb-1 text-sm font-medium text-indigo-900">Password</label>
                        <input
                            type="password"
                            className=" font-mono bg-white border-2 border-indigo-900 text-sm rounded-lg block w-96 p-2 focus:outline-none placeholder-indigo-900 focus:placeholder-slate-400  focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Masukan Password"/>
                    </form>
                    {/* Form Login */}

                    {/* Button */}
                    <a href="/home">
                    <button type="submit" 
                        className="transition ease-in-out delay-150 text-white bg-indigo-500 hover:-translate-y-[2px]  hover:bg-blue-500 duration-700 font-medium rounded-lg text-sm w-96 px-5 py-2.5 text-center mr-2 mb-3">
                        Masuk
                    </button>
                    </a>
                        <p className='font-mono text-xs w-72 text-slate-400'>By clicking the “Masuk” button, you are login and therefore you agree to terms of Use and Privacy Policy.</p>
                        

                </div>

            </div>
            {/* Right Side */}

        </div>

    )
}