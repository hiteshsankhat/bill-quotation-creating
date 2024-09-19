const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-[0.8fr_0.15fr_2fr_0.20fr_1fr] grid-rows-3 items-center justify-items-center gap-y-2">
        <p className="col-start-3 text-center text-xl font-semibold text-red-500">
          || Jai Agnel ||
        </p>
        <p className="col-start-5 justify-self-end text-lg font-semibold">
          Phone No.: 9821694761
        </p>
        <p className="col-span-3 col-start-2 row-start-2 text-3xl font-bold uppercase tracking-widest text-red-500">
          Vanita Pankaj Sankjat
        </p>
        <p className="col-start-3 row-start-3 text-xl font-extrabold uppercase tracking-widest text-black underline">
          Contractor
        </p>
      </div>
      <p className="px-12 pb-4 text-center text-base font-semibold">
        Chemical Roof Repairing, Water Proofing, Building Repairer, Painting,
        Roofing, Tilling, Civil & Carpaintering
      </p>
      <p className="mb-3 border border-l-0 border-r-0 border-black text-center text-sm">
        Nankusingh Chawl No. 95, Room No. A, G. D. Ambekar Marg, Ambewadi,
        Kalachowki, Mumbaf - 400 033
      </p>
    </header>
  );
};

export default Header;
