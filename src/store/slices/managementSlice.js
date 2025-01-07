import { createSlice } from "@reduxjs/toolkit";

import tojbi from "../../assets/imgs/tojbi.png";
import colorTojbi from "../../assets/imgs/colorTojbi.png";

// import caliography from "../../assets/imgs/Caliography.png";

const initialState = {
  flagshipAgency: {
    significance: {
      bgImg: null,
      imgLink: tojbi,
      title: "Significance of Ziyarat Tours",
      description: null,
      list: [
        'Flagship is a well-known word to English-speaking people. The meaning of this word is "largest and most important." Hijaz Hajj & Umrah Kafela has been providing Umrah and Hajj services since 2023. Within a short time, many pilgrims have performed Umrah with us smoothly. Happy with our services, travelers of Kaaba call us the flagship Umrah agency in Bangladesh.',
        "Our services include visa processing, hotel bookings, Ziyarat tours, airline ticketing, and Umrah training. We also offer uncommon Umrah packages including economy Umrah and premium Umrah.",
        "Are you planning to perform Umrah without any difficulties? Call us now at",
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

    umrahServices: {
      bgImg: null,
      imgLink: colorTojbi,
      title: "Our Umrah services",
      description:
        "We provide a range of Umrah services including visa processing, air ticketing, hotel booking, etc. Scroll down to see the details:",
      list: [
        "Visa processing: We provide an Umrah visa processing service without hassle. So that pilgrims can remain tension-free.",
        "Airline ticketing: Our agency ensures airline ticketing and explains to pilgrims on time.",
        "Hotel booking: We think about the comfort of our pilgrims. Thus we book comfortable hotels near Masjid-Al-Haram and Masjid-Al-Nabawi.",
        "Ziyarat tours: Many historical sites are in Mecca and Medina. We guide pilgrims so that they can visit these properly.",
        "Umrah training: We offer Umrah training. Therefore pilgrims can perform Umrah perfectly and at ease.",
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
    reasons: {
      bgImg: null,
      imgLink: tojbi,
      title: "Reasons to perform Umrah with Hijaz Hajj & Umrah Kafela",
      description: null,
      list: [
        "There are many travel agencies in Bangladesh. Why would you choose us from them? The reasons are mentioned below:",
        "Expert guidance: Our expert guides help pilgrims to perform Umrah perfectly. We assist pilgrims in understanding the rituals and significance of Umrah.",
        "Comprehensive services: Umrah services that we offer include visa processing, air ticketing, hotel booking, transportation assistance as well as training for Umrah.",
        "Affordable pricing: Thinking about our pilgrims’ financial issues. we offer affordable prices. So, they can perform Umrah at a cheap price.",
        "Commitment to spiritual fulfillment: We always keep our promise. We do what we say. We provide the services that we promise. As if, the guest of Allah can perform Umrah with us smoothly.",
        "Goodwill: We have been working since 2023. Within a short time, we become a flagship Umrah agency in Bangladesh.",
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
    planning: {
      bgImg: null,
      imgLink: colorTojbi,
      title: "Planning for Umrah with confidence?",
      description:
        "We provide a range of Umrah services including visa processing, air ticketing, hotel booking, etc. Scroll down to see the details:",
      list: [
        "Embark on your Umrah with the proper guidance and support of our flagship Umrah agency in Bangladesh. We are here to make your Umrah meaningful with our experience and expertise.",
        "Call us now at +880 123 456 789. We are ready to answer your all questions. Also, we provide additional details about our packages and help you take the first step toward a memorable spiritual experience.",
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

const managementSlice = createSlice({
  name: "management",
  initialState,
  reducers: {},
});

export default managementSlice.reducer;
