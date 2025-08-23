const Footer = () => {
  return (
    <footer className="w-full mt-10 bg-background">
      <div className="bg-gradient-to-r from-[#C6C6C600] via-[#C6C6C6] to-[#C6C6C600] h-px"></div>
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center justify-center text-sm text-gray-400 text-center">
        <p>
          &copy; {new Date().getFullYear()} Ronak Majdi. تمام حقوق محفوظ است.
        </p>
        <p className="mt-2">
           طراحی و توسعه توسط تیم{" "}
          <span className="font-semibold text-gold">Kimia Farshadnia</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;