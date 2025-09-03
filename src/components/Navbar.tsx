import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-blue-700 text-white shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dịch vụ Nhà Việt</h1>
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#about" className="hover:text-yellow-300">Giới thiệu</a></li>
                    <li><a href="#services" className="hover:text-yellow-300">Dịch vụ</a></li>
                    <li><a href="#testimonials" className="hover:text-yellow-300">Phản hồi</a></li>
                    <li><a href="#contact" className="hover:text-yellow-300">Liên hệ</a></li>
                </ul>
                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </nav>
            {isOpen && (
                <div className="md:hidden bg-blue-600 px-4 py-3 space-y-2">
                    <a href="#about" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Giới thiệu</a>
                    <a href="#services" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Dịch vụ</a>
                    <a href="#testimonials" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Phản hồi</a>
                    <a href="#contact" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Liên hệ</a>
                </div>
            )}
        </header>
    );
}

export default Navbar;
