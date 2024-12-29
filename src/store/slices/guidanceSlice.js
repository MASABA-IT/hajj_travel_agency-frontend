import { createSlice } from "@reduxjs/toolkit";

// Importing images for use in state
import colorTojbi from "../../assets/imgs/colorTojbi.png";
import Tojbi from "../../assets/imgs/tojbi.png";
import Kaba from "../../assets/imgs/kaba.png";
import plane from "../../assets/imgs/plane.png";
import caliography from "../../assets/imgs/Caliography.png";

// Initial state structure
const initialState = {
  English: {
    process: {
      bgImg: null,
      imgLink: colorTojbi, // Default image link
      title: "Hajj pre-registration 2025 process from Dhaka, Bangladesh",
      description:
        "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
      list: [], // Initialize with an empty array instead of [null]
      subList: {
        hasSubList: true,
        childList: [
          {
            text: "Umrah is an act of worship performed by millions of Muslims every year. Following in the footsteps of Prophet Muhammad (PBUH), believers experience deep spiritual connections, seek Allah's blessings, and find opportunities for self-reflection and repentance.",
            list: [],
          },
          {
            text: "Umrah has four (4) different customs:",
            list: ["Putting up of Ihram", "Tawaf", "Sa’yee", "Halq or Taqsir"],
          },
        ],
      },
      buttonText: "Talk To Our Expert",
    },

    guide: {
      bgImg: null,
      imgLink: Tojbi, // Default image link for the guide
      title: "Preparing for Umrah: Step-by-step guide",
      description:
        "Preparing for Umrah is not just about physical arrangements; it's about nurturing your soul and heart and anticipating the spiritual journey that lies ahead.",
      list: [
        "The Niyyah",
        "Before embarking on the sacred pilgrimage of Umrah, Muslims are encouraged to set their hearts on the profound act of Niyyah, or intention. The Niyyah for Umrah is a heartfelt commitment to embark on this spiritual journey solely for the sake of Allah, seeking His pleasure and blessings.",
        "Attaining a state of Ihram",
        "Before commencing the journey, pilgrims must enter the state of Ihram, a sacred state of purity and devotion. This involves wearing the designated white clothing for men and dressing modestly for women. During Ihram, certain actions are prohibited, such as cutting hair or nails, using perfume, and engaging in arguments or harmful behavior.",
        "Reciting Talbiyah",
        "Talbiyah is a profound and sacred invocation recited by Muslims during the pilgrimage of Hajj and Umrah. Derived from the Arabic word 'labbayk,' meaning 'here I am,' it reflects the pilgrim's humble response to Allah's call to embark on this spiritual journey.",
        "Talbiya is, لَبَّيْكَ اللهُمَّ لَبَّيْكَ - لَبَّيْكَ لَا شَرِيْكَ لَكَ لَبَّيْكَ - إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ - لَا شَرِيْكَ لَكَ",
        "Engaging in spiritual preparation",
        "Preparing for Umrah requires more than just physical arrangements. Pilgrims are encouraged to engage in spiritual preparation by seeking forgiveness, reading the Quran, and increasing acts of worship in the days leading up to their departure.",
      ],
      subList: {
        hasSubList: false,
        childList: [
          {
            text: "",
            list: [],
          },
        ],
      },
      buttonText: "Contact For Booking",
    },
    spiritualJourney: {
      bgImg: null,
      imgLink: colorTojbi, // Default image link for the guide
      title: "The rites of Umrah: A profound spiritual journey",
      description:
        "The rites of Umrah offer a unique opportunity for self-reflection, devotion, and a renewed connection with the divine, making this journey an unforgettable and life-changing experience.",
      list: [
        "Tawaf: Circumambulation of the Kaaba. Upon reaching the Masjid al-Haram in Mecca, pilgrims perform Tawaf, which involves walking seven times around the Kaaba in a counterclockwise direction. This ritual represents the commitment to Allah and the solidarity of Muslims.",
        "Sa’yee: Walking between Safa and Marwah. After Tawaf, pilgrims perform Sai, walking seven times between the hills of Safa and Marwah. This commemorates the actions of Hajar, the wife of Prophet Ibrahim (peace be upon them), who searched for water for her son Ismail in the exact location.",
        "Halq or Taqsir. Halaq refers to the act of shaving or trimming the hair after completing the Hajj pilgrimage, a mandatory religious duty for Muslims who are physically and financially able to undertake it. For those, who choose not to shave their heads completely, trimming a portion of the hair is also acceptable.",
        "Prayers and supplications. Throughout the Umrah journey, prayers and supplications hold great significance. Pilgrims are encouraged to spend time in reflection, asking for forgiveness, and making sincere prayers for themselves, their families, and the entire Muslim community.",
      ],
      subList: {
        hasSubList: false,
        childList: [
          {
            text: "",
            list: [],
          },
        ],
      },
      buttonText: "Book For Next Umrah",
    },
    journey: {
      bgImg: null,
      imgLink: colorTojbi, // Default image link for the guide
      title: "Umrah: A journey of a lifetime",
      description:
        "The rites of Umrah offer a unique opportunity for self-reflection, devotion, and a renewed connection with the divine, making this journey an unforgettable and life-changing experience.",
      list: [
        "Undertaking the sacred journey of Umrah is a deeply enriching experience that leaves a lasting impact on the hearts and souls of believers. It is a unique opportunity to seek closeness to Allah, purify the soul, and strengthen one's faith. By following these essential Umrah guidelines, you can embark on a journey of a lifetime, leaving behind a transformed and spiritually fulfilled self.",
      ],
      subList: {
        hasSubList: false,
        childList: [
          {
            text: "",
            list: [],
          },
        ],
      },
      buttonText: "Book For Next Umrah",
    },
  },
  Bangla: {
    process: {
      bgImg: null,
      imgLink: colorTojbi, // Default image link
      title: "ওমরাহ পালনের ধারাবাহিক কার্যপ্রণালী: ০১. ইহরাম (ফরজ)",
      description: null,
      list: [], // Initialize with an empty array instead of [null]
      subList: {
        hasSubList: true,
        childList: [
          {
            text: "ওমরাহ পালন করার জন্য ইহরাম অপরিহার্য। ইহরাম অবস্থায় প্রবেশের জন্য এই পদক্ষেপগুলি অনুসরণ করুন:",
            list: [
              "পরিষ্কার-পচ্ছিন্ন হয়ে গোসল বা অজু করে নিন।",
              "সেলাইবিহীন একটি সাদা কাপড় পরিধান করুন মিকাত অতিক্রমের আগেই।",
              "ইহরামের নিয়তে দুই রাকাত নামাজ পড়ে নিন।",
              "ওমরাহর নিয়ত করার পর এক বা তিনবার নিন্মোক্ত তাকবির পড়ে নিন।",
            ],
          },
          {
            text: "তালবিয়া হলো-",
            list: [
              "লাব্বাইকা আলাহুম্মা লাব্বাইক, লাব্বাইকা লা শারিকা লাকা লাব্বাইক, ইন্নাল হামদা ওয়ান নি’মাতা লাকা ওয়াল মুলক, লা শারিকা লাকা।",
              "অর্থ: আমি হাজির, হে আল্লাহ! আমি হাজির, হে আল্লাহ! আমি হাজির, তোমার কোন অংশীদার নেই, আমি হাজির, নিশ্চয়ই সমস্ত প্রশংসা এবং নেয়ামত তোমার এবং একচ্ছত্র আধিপত্য তোমার, তোমার কোন অংশীদার নেই।",
            ],
          },
        ],
      },
      buttonText: "Book For Next Umrah",
    },

    guide: {
      bgImg: null,
      imgLink: Tojbi, // Default image link for the guide
      title: "০২. তাওয়াফ (ফরজ)তাওয়াফের সময়, এই পদক্ষেপগুলি অনুসরণ করুন:",
      description:
        "তাওয়াফের নিয়ত করুন। অজু করে নিন। ইহরামের চাদর সঠিকভাবে ডান কাঁধে পেঁচিয়ে নিয়ে বাম কাঁধের ওপর রাখুন। হাজরে আসওয়াদকে সামনে রেখে তার ডান পাশ বরাবর দাঁড়ান।",
      list: [
        'ভিড় না থাকলে হাজরে আসওয়াদ চুম্বন করে তাওয়াফ শুরু করুন। আলতোভাবে উভয় হাত পাথরের উপর রাখুন, "বিসমিল্লাহ আল্লাহু আকবার" বলুন এবং চুম্বন করুন। বিকল্পভাবে, ডান হাত দিয়ে হাজরে আসওয়াদ স্পর্শ করুন এবং সরাসরি চুম্বন করা কঠিন হলে হাতের স্পর্শ করা অংশে চুম্বন করুন।',
        "হাজরে আসওয়াদ স্পর্শ করা বা চুম্বন করা সম্ভব না হলে দূরত্বে দাঁড়িয়ে ডান হাত তুলে ‘বিসমিল্লাহি আল্লাহু আকবার’ বলুন এবং এক হাত দিয়ে হাজরে আসওয়াদের দিকে ইশারা করুন। এই ক্ষেত্রে চুম্বন বা হাত স্পর্শ করা আবশ্যক নয়। এভাবে তাওয়াফ শেষ করুন সাত চক্করে।",
      ],
      subList: {
        hasSubList: false,
        childList: [
          {
            text: "",
            list: [],
          },
        ],
      },
      buttonText: "Book For Next Umrah",
    },
    sai: {
      bgImg: null,
      imgLink: colorTojbi, // Default image link for the guide
      title: "০৩. সায়ি (ওয়াজিব)",
      description: "এখানে সায়ি’র পদ্ধতি দেওয়া হল:",
      list: [
        "সাফা পাহাড়ের কাছে গিয়ে কাবা শরিফের দিকে মুখ করে দাঁড়ান।",
        "দোয়ার মতো হাত তুলে তিনবার তাকবির বলুন।",
        "সাফা পাহাড় থেকে মারওয়া পাহাড়ের দিকে রওনা হন।",
        "মারওয়া পাহাড়ের কাছে পৌঁছালে, সাফা পাহাড়ের দিকে মুখ করে দোয়ার মতো হাত তুলে তাকবির বলুন।",
        "মারওয়া পাহাড়ের উপরে উঠুন।",
        "মারওয়া পাহাড় থেকে সাফা পাহাড়ের দিকে রওনা হন।",
        "উভয় পাহাড়ের দিকে মুখ করে দোয়ার মতো হাত তুলে তাকবির বলুন।",
        "সাফা পাহাড় থেকে মারওয়া পাহাড়ের দিকে রওনা হন।",
        "এইভাবে সাত চক্কর লাগান।",
        "সায়ি শেষে দোয়া করুন।",
        "সায়ি করার সময় আপনি হাঁটতে পারেন, দৌড়াতে পারেন, বা হেঁটে যেতে পারেন।",
      ],
      subList: {
        hasSubList: false,
        childList: [
          {
            text: "",
            list: [],
          },
        ],
      },
      buttonText: "Book For Next Umrah",
    },
    wajib: {
      bgImg: null,
      imgLink: colorTojbi, // Default image link for the guide
      title: "০৪. হলক করা (ওয়াজিব)",
      description: null,
      list: [
        "হলক করা (ওয়াজিব)। এটি ওমরাহ পালনে অবশ্যই করনীয়। পুরুষের ক্ষেত্রে রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লামের আদর্শ অনুসরণে সম্পূর্ণ মাথা মুণ্ডন করবেন । তবে মাথার চুল ছাঁটতেও পারেন। মহিলাদের ক্ষেত্রে চুল এক ইঞ্চি পরিমাণ কাটবেন।",
      ],
      subList: {
        hasSubList: false,
        childList: [
          {
            text: "",
            list: [],
          },
        ],
      },
      buttonText: "Book For Next Umrah",
    },
    obligations: {
      bgImg: null,
      imgLink: colorTojbi, // Default image link for the guide
      title: "ওমরাহ পালনে করনীয় বর্জনীয়:কি করা যাবে:",
      description: "এখানে সায়ি’র পদ্ধতি দেওয়া হল:",
      list: [
        "নিয়ত করা",
        "ইহরাম বাঁধা",
        "সাফা ও মারওয়া পাহাড়ের মধ্যে সায়ি করা",
        "হাজরে আসওয়াদে চুমু খাওয়া বা ইশারা করা",
        "হলক করা",
      ],
      subList: {
        hasSubList: false,
        childList: [
          {
            text: "",
            list: [],
          },
        ],
      },
      buttonText: "Book For Next Umrah",
    },
    doNot: {
      bgImg: null,
      imgLink: colorTojbi, // Default image link for the guide
      title: "কি করা যাবেনা:",
      description: null,
      list: [
        "ইহরাম অবস্থায় যৌন মিলন করা",
        "শেভ করা",
        "নখ কাটা",
        "লোম তোলা",
        "সুগন্ধি ব্যবহার করা",
        "শিকার করা",
        "ঝগড়া করা",
        "গালাগালি করা",
        "খারাপ কথা বলা",
      ],
      subList: {
        hasSubList: false,
        childList: [
          {
            text: "",
            list: [],
          },
        ],
      },
      buttonText: "Book For Next Umrah",
    },
  },
};

// Create slice with reducers for updating the state
const guidanceSlice = createSlice({
  name: "guidance",
  initialState,
  reducers: {},
});

// Export actions if you want to dispatch them
export const { updateProcess, updateGuide } = guidanceSlice.actions;

// Export reducer to be used in the store
export default guidanceSlice.reducer;
