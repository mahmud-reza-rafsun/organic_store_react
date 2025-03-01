import FooterLogo from "../../assets/images/logo-white.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#111] text-base-content p-10">
        <aside className="z-10">
          <img className="w-44" src={FooterLogo} />
          <p className="text-gray-100">Providing Organic Food since 1952</p>
        </aside>
        <nav>
          <h6 className="footer-title text-gray-200 font-semibold">Services</h6>
          <a className="link link-hover text-gray-100">Branding</a>
          <a className="link link-hover text-gray-100">Design</a>
          <a className="link link-hover text-gray-100">Marketing</a>
          <a className="link link-hover text-gray-100">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-gray-200 font-semibold">Company</h6>
          <a className="link link-hover text-gray-100">About us</a>
          <a className="link link-hover text-gray-100">Contact</a>
          <a className="link link-hover text-gray-100">Jobs</a>
          <a className="link link-hover text-gray-100">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-gray-200 font-semibold">Legal</h6>
          <a className="link link-hover text-gray-100">Terms of use</a>
          <a className="link link-hover text-gray-100">Privacy policy</a>
          <a className="link link-hover text-gray-100">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
