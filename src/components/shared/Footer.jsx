const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f3d2e] to-[#1f5e4a] text-white flex justify-center items-center">
      
      <div className="w-full max-w-6xl px-4 text-center py-10">
        
        {/* Logo Image */}
        <div className="flex text-3xl font-bold justify-center mb-4">
         SkillSphere
        </div>

        {/* Subtitle */}
        <p className="text-[#fafafa83] mb-6 max-w-4xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <p className="mb-4 font-medium">Social Links</p>

        <div className="flex justify-center gap-4 mb-8">
          
          <div className="bg-white p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <img src="/assets/instagram.png" alt="instagram" className="w-5 h-5" />
          </div>

          <div className="bg-white p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <img src="/assets/facebook.png" alt="facebook" className="w-5 h-5" />
          </div>

          <div className="bg-white p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <img src="/assets/twitter.png" alt="twitter" className="w-5 h-5" />
          </div>

        </div>

        {/* Divider */}
        <hr className="border-[#2f5b4ab6] border-1 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#fafafa64]">
          
          <p>© 2026 SkillSphere. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Terms of Service</span>
            <span className="cursor-pointer hover:underline">Cookies</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;