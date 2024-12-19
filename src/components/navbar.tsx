import React from 'react'

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-gray-800">מספרת אטיאס</a>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-800 hover:text-gray-600">מסך בית</a>
                <a href="#" className="text-gray-800 hover:text-gray-600">קביעת תורים</a>
                <a href="#" className="text-gray-800 hover:text-gray-600">צור קשר</a>
            </div>
        </div>
    </nav>
  )
}
