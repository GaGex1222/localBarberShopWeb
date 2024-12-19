import Image from "next/image";

export default function Home() {
  return (
    <>

    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://sakishears.com/cdn/shop/articles/supplies_and_tools_needed_by_a_barber.jpg?v=1670474783&width=2048")' }}
      ></div>
      <div className="absolute inset-0 opacity-90 bg-gradient-to-br from-white/10 to-gray-800/70"></div>
      <div className="relative container mx-auto px-6 h-full flex items-center justify-center z-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">מספרת אריאל אטיאס</h1>
          <p className="mt-4 mb-6 text-xl text-white">תספורות מקצועיות לגברים</p> 
          <a href="#" className="mt-6 px-8 py-3 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700">Book Now</a>
        </div>
      </div>
    </section>


    <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">תגובות הלקוחות</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600 mb-4">"תספורת חדה כמו שצריך"</p>
                    <p className="font-bold">- שגיא</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600 mb-4">"אטיאס מקצוען אמיתי"</p>
                    <p className="font-bold">- עמית</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600 mb-4">"תספורת אש"</p>
                    <p className="font-bold">- עומר</p>
                </div>
            </div>
        </div>
    </section>

    <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-white">
            <p>&copy; 2024 . All rights reserved.</p>
            <p className="mt-4">צפת 6, פתח תקווה </p>
        </div>
    </footer>
    </>
  );
}
