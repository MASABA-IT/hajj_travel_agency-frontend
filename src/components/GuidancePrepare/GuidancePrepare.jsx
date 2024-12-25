import GuidanceStep from "../../assets/imgs/GuidanceStep.png";

const GuidancePrepares = () => {
  return (
    <section className="w-full py-14">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center   px-5 md:px-0">
        <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center">
          <img
            src={GuidanceStep}
            alt="Visa"
            className="max-w-[300px] w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h2 className="text-xl md:text-3xl text-[#727066] font-bold text-center md:text-left">
            Preparing for Umrah: Step-by-step guide
          </h2>
          <p className="w-full md:w-3/4 mx-auto md:mx-0 text-center md:text-left">
            Preparing for Umrah is not just about physical arrangements;
            it&apos;s about nurturing your soul and heart and anticipating the
            spiritual journey that lies ahead.
          </p>
          <ul className="list-inside pl-5 space-y-3">
            <li className="flex items-center space-x-3">
              <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-white border-2 border-[#727066] rounded-full"></span>
              <span>The Niyyah</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-white border-2 border-[#727066] rounded-full"></span>
              <span>
                Before embarking on the sacred pilgrimage of Umrah, Muslims are
                encouraged to set their hearts on the profound act of Niyyah, or
                intention. The Niyyah for Umrah is a heartfelt commitment to
                embark on this spiritual journey solely for the sake of Allah,
                seeking His pleasure and blessings.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-white border-2 border-[#727066] rounded-full"></span>
              <span>Attaining a state of Ihram</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-white border-2 border-[#727066] rounded-full"></span>
              <span>
                Before commencing the journey, pilgrims must enter the state of
                Ihram, a sacred state of purity and devotion. This involves
                wearing the designated white clothing for men and dressing
                modestly for women. During Ihram, certain actions are
                prohibited, such as cutting hair or nails, using perfume, and
                engaging in arguments or harmful behavior.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-white border-2 border-[#727066] rounded-full"></span>
              <span>Reciting Talbiyah</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-white border-2 border-[#727066] rounded-full"></span>
              <span>
                Talbiyah is a profound and sacred invocation recited by Muslims
                during the pilgrimage of Hajj and Umrah. Derived from the Arabic
                word &quot;labbayk,&quot; meaning &quot;here I am,&quot; it
                reflects the pilgrim&apos;s humble response to Allah&apos;s call
                to embark on this spiritual journey.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-white border-2 border-[#727066] rounded-full"></span>
              <span>
                Talbiya is, لَبَّيْكَ اللهُمَّ لَبَّيْكَ - لَبَّيْكَ لَا
                شَرِيْكَ لَكَ لَبَّيْكَ - إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ
                وَالْمُلْكَ - لَا شَرِيْكَ لَكَ Pronunciation: Labbayk allahumma
                labbayeek, labbayeeka l’aa sharika laka labbayeek, innal-ḥamda
                wan-ni’mata, laka wal-mulk, l’aa sharika lak.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-white border-2 border-[#727066] rounded-full"></span>
              <span>Engaging in spiritual preparation</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-white border-2 border-[#727066] rounded-full"></span>
              <span>
                Preparing for Umrah requires more than just physical
                arrangements. Pilgrims are encouraged to engage in spiritual
                preparation by seeking forgiveness, reading the Quran, and
                increasing acts of worship in the days leading up to their
                departure.
              </span>
            </li>
          </ul>
          <div className="flex justify-center md:justify-start mt-5">
            <button className="min-w-[200px] px-6 py-3 bg-[#5a584f] text-white rounded-md shadow-lg hover:bg-[#3f3e38] transition">
              Book For Next Umrah
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidancePrepares;
