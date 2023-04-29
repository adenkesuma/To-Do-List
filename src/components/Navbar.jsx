export default function Navbar() {
    return (
      <nav className="h-[105px] bg-[#16abf8] text-[#ffffff] flex items-center">
        <div
          data-cy="header-background"
          className="w-full pl-[186px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] max-w-[1000px]"
        >
          <h2 data-cy="header-title" className="text-[24px] font-[700]">TO DO LIST APP</h2>
        </div>
      </nav>
    );
}
