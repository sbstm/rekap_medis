export default function Help() {
    return (
        <div>
            <div className="grid grid-cols-2 gap-16 justify-center items-center  container mx-32 mt-16 mb-16">

                <div className="inline-flex flex-col space-y-4  ">
                    <h1 className="text-5xl font-semibold text-blue-600 w-96 leading-normal">
                        <span className="text-indigo-900">Bagaimana
                        </span> kami bekerja??</h1>
                    <p
                        className="text-xl text-gray-800 font-mono"
                        style={{
                            width: 548
                        }}>Ketika
                        pasien akan melakukan registrasi wajib datang ke rumah sakit, karena hanya pihak
                        rumah sakit yang dapat melakukan registrasi. Kemudian pasien dapat melaporkan
                        kesehatan ke aplikasi HealTalk, yang akan dikelola oleh rumah sakit agar pasien
                        mendapat penanganan yang tepat.</p>

                    <a href="#" className="text-base font-medium text-blue-700 font-mono">Learn More</a>
                </div>

               <div className="vidio">
                    <div className="">
                    <iframe className="w-[550px] aspect-video" src="https://www.youtube.com/embed/KmYm6zphh_A"></iframe>
                    </div>
                </div>

                
            </div>
        </div>
    )
}
