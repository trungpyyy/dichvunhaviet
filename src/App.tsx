import './App.css'

function App() {

  return (
    <>
      <header className="hero-bg text-white shadow-lg">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dịch vụ Nhà Việt</h1>
          <ul className="flex space-x-6 hidden md:flex">
            <li><a href="#about" className="hover:text-yellow-300">Giới thiệu</a></li>
            <li><a href="#services" className="hover:text-yellow-300">Dịch vụ</a></li>
            <li><a href="#testimonials" className="hover:text-yellow-300">Phản hồi</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Liên hệ</a></li>
          </ul>
          <button className="md:hidden focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
        <div id="mobile-menu" className="md:hidden bg-blue-700 p-4 space-y-2">
          <a href="#about" className="block text-white hover:text-yellow-300">Giới thiệu</a>
          <a href="#services" className="block text-white hover:text-yellow-300">Dịch vụ</a>
          <a href="#testimonials" className="block text-white hover:text-yellow-300">Phản hồi</a>
          <a href="#contact" className="block text-white hover:text-yellow-300">Liên hệ</a>
        </div>
      </header>

      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 fade-in">
            <h2 className="text-4xl font-bold mb-4">Chào mừng đến với Dịch vụ Nhà Việt</h2>
            <p className="text-lg mb-6">Chúng tôi cung cấp các dịch vụ vệ sinh, sửa chữa và bảo dưỡng nhà cửa chuyên nghiệp,
              đáng tin cậy với đội ngũ tay nghề cao và công nghệ hiện đại.</p>
            <button className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition">Khám
              phá ngay</button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4238727a-f80a-4e63-b60b-c05ac5134b4d.png"
              alt="Spacious modern Vietnamese home interior featuring a clean living room with wooden floors, large windows allowing natural light, minimalist furniture including a beige sofa, coffee table with fresh flowers, and a subtle traditional Vietnamese painting on the wall, conveying a sense of warmth, cleanliness, and harmony in a suburban family home setting."
              className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </section>


      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">Về chúng tôi</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Dịch vụ Nhà Việt cam kết mang đến cho khách hàng trải nghiệm dịch vụ tốt
            nhất với sự chuyên nghiệp, minh bạch và giá cả cạnh tranh. Chúng tôi phục vụ các hộ gia đình, doanh nghiệp tại
            Việt Nam với mục tiêu tạo nên không gian sống sống động và bền vững.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fa150ec2-e761-404f-8636-e1b937eaa744.png"
              alt="Team of professional cleaners in Vietnamese home settings, wearing uniforms, holding cleaning supplies like vacuums and cloths, working diligently in a bright kitchen with marble countertops, stainless steel appliances, and tiled floors, showing collaboration and attention to detail in maintaining a hygienic and tidy environment."
              className="w-full md:w-1/3 h-48 object-cover rounded-lg shadow-md" />
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cc23628b-813d-4ac1-aa68-3bc21aa0a3cc.png"
              alt="Technician repairing a household appliance in a modern Vietnamese villa, using tools to fix a washing machine in a laundry room with shelves of detergents, tiled floor, and ample natural light from windows, emphasizing reliability, skill, and customer-focused service for daily convenience."
              className="w-full md:w-1/3 h-48 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>


      <section id="services" className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Dịch vụ của chúng tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/116589be-6e1d-41f6-b208-75bae8dfe4e0.png"
                alt="High-quality cleaning service illustration showing a spotless Vietnamese home bathroom with gleaming tiles, polished mirrors, organized towels, fresh greenery, water droplets on surfaces indicating recent cleaning, and a sense of freshness and sanitation."
                className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Vệ sinh nhà cửa</h3>
              <p className="text-gray-700">Dịch vụ vệ sinh chuyên sâu cho mọi loại nhà, căn hộ với tiêu chuẩn cao.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27b3526b-800d-44c1-a6fc-7059bc331a30.png"
                alt="Electrical repair service image depicting a skilled electrician in a Vietnamese living room, fixing wiring in an open ceiling panel, surrounded by tools like screwdrivers and multimeter, lampshade light hanging, wooden parquet floor, creating an atmosphere of safety and expertise in home maintenance."
                className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Sửa chữa điện nước</h3>
              <p className="text-gray-700">Sửa chữa và lắp đặt hệ thống điện, nước an toàn và bền vững.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0f65a70-d408-43bb-9d5b-1f0fd5c21ce0.png"
                alt="Gardening and landscaping service scene in a sunny backyard of a Vietnamese home, featuring workers planting flowers and trimming hedges around a stone patio, lush green grass, garden tools spread out, gazebo with traditional Vietnamese design, promoting beauty, nature, and outdoor harmony."
                className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Vườn cây cảnh</h3>
              <p className="text-gray-700">Thiết kế và chăm sóc vườn cây cảnh đẹp mắt và thân thiện môi trường.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Khách hàng nói gì</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a5e46036-1d07-4d70-94e1-83ed32a6c1b4.png"
                alt="Smiling Vietnamese customer testimonial portrait, middle-aged woman with short hair, warm expression, wearing casual clothing, photographed in a home setting with blurred background to focus on satisfied facial features conveying trust and happiness."
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4" />
              <p className="text-gray-700 italic mb-2">"Dịch vụ tuyệt vời, đội ngũ làm việc chuyên nghiệp và sạch sẽ. Tôi sẽ
                giới thiệu cho bạn bè!"</p>
              <p className="font-bold">- Bà Nguyễn Thị A</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4442d6cd-214a-4052-b77a-757e704c8fa6.png"
                alt="Content Vietnamese man customer feedback image, elderly gentleman with gray hair, smiling broadly, dressed in traditional shirt, shown in front of a well-maintained terrace with plants, expression of relief and approval highlighting excellent service quality."
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4" />
              <p className="text-gray-700 italic mb-2">"Giá cả phải chăng và hiệu quả cao. Cảm ơn Dịch vụ Nhà Việt đã giúp đỡ."
              </p>
              <p className="font-bold">- Ông Trần Văn B</p>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Liên hệ chúng tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Thông tin liên hệ</h3>
              <p><strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP.HCM, Việt Nam</p>
              <p><strong>Email:</strong> info@duochonanviet.com</p>
              <p><strong>Điện thoại:</strong> +84 123 456 789</p>
              <p className="mt-4">Chúng tôi luôn sẵn sàng phục vụ bạn 24/7. Hãy liên hệ ngay để nhận báo giá miễn phí!</p>
            </div>
            <div>
              <form id="contact-form" className="bg-white p-6 rounded-lg text-gray-800">
                <div className="mb-4">
                  <label className="block font-bold mb-2">Tên</label>
                  <input type="text" id="name" className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2">Email</label>
                  <input type="email" id="email" className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2">Nội dung</label>
                  <textarea id="message" rows={4} className="w-full p-2 border rounded" required></textarea>
                </div>
                <button type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Gửi</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4 px-4">
        <div className="container mx-auto text-center">
          <p>© 2023 Dịch vụ Nhà Việt. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>
    </>
  )
}

export default App
