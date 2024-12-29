import { createSlice } from "@reduxjs/toolkit";

import colorTojbi from "../../assets/imgs/colorTojbi.png";
import Tojbi from "../../assets/imgs/tojbi.png";

import Kaba from "../../assets/imgs/kaba.png";

import plane from "../../assets/imgs/plane.png";

import caliography from "../../assets/imgs/Caliography.png";

const initialState = {
  HotelBooking: {
    hotelProvide: {
      bgImg: null,
      imgLink: colorTojbi,
      title: "We provide hotel booking service according to your needs",
      description: null,
      list: [
        "At Hijaz Hajj & Umrah Kafela, we believe that your accommodation plays a crucial role in enhancing your overall journey. That's why we are committed to providing hotel booking facilities tailored to your specific needs, ensuring your utmost comfort and convenience throughout your sacred journey.",
        "We provide different hotel facilities in Makkah or Medina such as 5 Star, 4 Star, 3 star & other hotels according to your need. Contact us today to learn about our hotel facilities in Makkah and Medina to embark on a journey where your needs and comfort are our top priority.",
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
      buttonText: "Contact for Booking",
    },

    hotelFacilities: {
      bgImg: null,
      imgLink: Tojbi,
      title: "Facilities & Hotel Amenities",
      description:
        "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
      list: [
        "Luxurious Accommodations",
        "Air-conditioned Rooms",
        "Proximity to the Holy Sites",
        "Facilities for Disabled Guests",
        "Gourmet Dining Options",
        "Impeccable Service",
        "Safety and Security",
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
    facilitiesAndAmenities: {
      bgImg: null,
      imgLink: Tojbi,
      title: "Facilities & Hotel Amenities",
      description:
        "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
      list: [
        "Luxurious Accommodations",
        "Air-conditioned Rooms",
        "Proximity to the Holy Sites",
        "Facilities for Disabled Guests",
        "Separate Rooms for Families",
        "Gourmet Dining Options",
        "Impeccable Service",
        "Safety and Security",
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
    facilitiesLogic: {
      bgImg: null,
      imgLink: Tojbi,
      title: "Facilities & Logic",
      description:
        "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
      list: [
        "Luxurious Accommodations",
        "Air-conditioned Rooms",
        "Proximity to the Holy Sites",
        "Facilities for Disabled Guests",
        "Separate Rooms for Families",
        "Gourmet Dining Options",
        "Impeccable Service",
        "Safety and Security",
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
  },
  ZiyaratTours: {
    significance: {
      bgImg: null,
      imgLink: Tojbi,
      title: "Significance of Ziyarat Tours",
      description:
        "As you prepare for the profound pilgrimage of Hajj, ensuring a smooth and hassle-free experience is paramount. Hijaz Hajj & Umrah Kafela’s Hajj visa requirements checklist 2025 / 2026 from Bangladesh is your guide to preparing for this remarkable journey of faith. May your Hajj pilgrimage be accepted and bring you closer to the divine.",
      list: [
        'Ziyarat, meaning "visit" in Arabic, refers to the practice of visiting holy sites associated with Islamic history. Ziyarat tours allow Hajj and Umrah pilgrims to explore sacred landmarks, walk in the footsteps of revered figures, and immerse themselves in the spiritual heritage of Islam.',
        "By participating in Ziyarat, Bangladeshi pilgrims can deepen their connection with the faith and draw inspiration from the rich Islamic legacy. Contact us today to learn more about our Ziyarat tours in Makkah and Medina.",
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
    destinationsMakkah: {
      bgImg: null,
      imgLink: colorTojbi,
      title: "Ziyarat destinations in Makkah",
      description:
        "As you prepare for the profound pilgrimage of Hajj, ensuring a smooth and hassle-free experience is paramount. Hijaz Hajj & Umrah Kafela’s Hajj visa requirements checklist 2025 / 2026 from Bangladesh is your guide to preparing for this remarkable journey of faith. May your Hajj pilgrimage be accepted and bring you closer to the divine.",
      list: [
        "Masjid Al Haram",
        "Masjid Ayesha (Second largest Mosque in Makkah)",
        "Jannat Al-Mu'alla (Cemetery in Makkah)",
        "Jabal Al-Rahma",
        "Jabal Noor (The Mount on which the Cave of Hira is found)",
        "Masjid Al Khayf",
        "Jabal Thawr",
        "Cave (Ghar) of Hira",
        "Birth Place of the Holy Prophet [s] National Library of Makkah",

        "Masjid-E-Namirah",
        "Mount Abu Qubays",
        "Masjid Jin",
        "Mina",
        "Arafah",
        "Muzdalifah",
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
    destinationsMedina: {
      bgImg: null,
      imgLink: Tojbi,
      title: "Ziyarat destinations in Medina",
      description:
        "As you prepare for the profound pilgrimage of Hajj, ensuring a smooth and hassle-free experience is paramount. Hijaz Hajj & Umrah Kafela’s Hajj visa requirements checklist 2025 / 2026 from Bangladesh is your guide to preparing for this remarkable journey of faith. May your Hajj pilgrimage be accepted and bring you closer to the divine.",
      list: [
        "Masjid-e-Nabawi Sharif",
        "Masjid-e-Quba",
        "Roza Mubarak",
        "Ustuwaanah Aisha (may Allah be pleased with her)",
        "Riyaad-ul-Jannah",
        "Masjid-e-Juma",
        "Masjid-e-Khandaq",
        "Masjid Abu Bakar",
        "Masjid-e-Bilal",
        "Bir-e-Usman",
        "Jannat Ul Baqi",
        "Masjid Miqat Bir-e-Ali",
        "Masjid-e-Qiblatain",
        "Wadi-e-Al-Baida (Wadi Jinn)",
        "The battlefield of Badr",
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
  },
  AirlineTicket: {
    cheapest: {
      bgImg: null,
      imgLink: Tojbi,
      title:
        "Cheapest round trip Umrah flights / Airline ticketing from Bangladesh",
      description: null,
      list: [
        "At Hijaz Hajj & Umrah Kafela, we believe that cost should never be a barrier for Muslims seeking to perform their spiritual obligations. We have partnered with reputable airlines to curate affordable flight options without compromising on comfort and quality. Our aim is to ensure that every pilgrim can perform their sacred journey without straining their budget.",
        "Take advantage of our cheapest round-trip Hajj & Umrah flights from Bangladesh to The Kingdom of Saudi Arabia and fulfill your religious obligations without straining your budget. Contact us today to book your pilgrimage with Hijaz Hajj & Umrah Kafela.",
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
    ticketBooking: {
      bgImg: null,
      imgLink: colorTojbi,
      title:
        "Dhaka Medinah or Dhaka Jeddah Round Trip Air-ticket booking for Umrah from Bangladesh",
      description: null,
      list: [null],
      subList: {
        hasSubList: true,
        childList: [
          {
            text: "As a premier Hajj and Umrah Association, we understand the significance and spiritual importance of your pilgrimage journey. Our mission is to provide exceptional services and simplify the process of booking your flights to the holy cities of Mecca and Medina.",
            list: [],
          },
          {
            text: "When you choose Hijaz Hajj & Umrah Kafela for your flight bookings, you can expect the following:",
            list: [
              "Extensive Flight Options",
              "Competitive Prices",
              "Transparent and Secure Booking",
              "Flexibility and Customization",
              "Reliable Customer Support",
            ],
          },
        ],
      },
      buttonText: "Contact For Booking",
    },
    ticketDeals: {
      bgImg: null,
      imgLink: Tojbi,
      title:
        "Cheap Flights, Airline Tickets & Airfare Deals from Bangladesh to KSA",
      description: null,
      list: [
        "Are you searching for affordable Hajj and Umrah air tickets for pilgrims from Bangladesh? Look no further than Hijaz Hajj & Umrah Kafela. Our association not only offers cost-effective flight options but also provides a range of packages tailored to suit various budgets and preferences.",
        "Our team is dedicated to delivering an exceptional travel experience, ensuring that pilgrims traveling to the holy cities of Mecca and Medina can obtain the cheapest air tickets available.",
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
    ticketPrice: {
      bgImg: null,
      imgLink: colorTojbi,
      title: "Bangladesh to Saudi Arabia air ticket price",
      description: null,
      list: [
        "Typically, the most economical period to fly from Dhaka to Saudi Arabia is during the low season, spanning from November to March. During this time, one-way tickets can be obtained for approximately BDT 47,585 - BDT 52,873, while round-trip tickets range from BDT 95,171 - BDT 105,746.",
        "Airfare from Dhaka, Bangladesh to Saudi Arabia can fluctuate based on various elements, including the time of year, choice of airline, and the advance booking window.",
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
  },
  UmrahTraining: {
    training: {
      bgImg: null,
      imgLink: Tojbi,
      title: "Umrah Hajj training program for Bangladeshi Pilgrims",
      description: null,
      list: [
        "At Hijaz Hajj & Umrah Kafela, we understand that undertaking the sacred journey of Hajj or Umrah is a profound and life-changing experience for Muslims around the world. To ensure that Bangladeshi Hajjis are well-prepared for this spiritual pilgrimage, we proudly present our comprehensive Hajj & Umrah training program for Bangladeshi hajjis in Dhaka.",
        "We are dedicated to equipping pilgrims with the necessary knowledge, skills, and guidance to make their journey safe, fulfilling, and spiritually enriching. Register now for our upcoming Hajj & Umrah training program and let us guide you on the path of spiritual enlightenment and fulfillment.",
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
    kafelaJoin: {
      bgImg: null,
      imgLink: colorTojbi,
      title: "Join Hijaz Hajj & Umrah Kafela for an enlightening journey",
      description: null,
      list: [
        "At Hijaz Hajj & Umrah Kafela, we are dedicated to empowering Bangladeshi Hajjis with the proper information, knowledge, and skills necessary to perform Hajj and Umrah with excellence. Our training program goes beyond mere instruction, aiming to instill a deep understanding of the spiritual significance of this sacred journey.",
        "Join us and embark on a transformational experience that will forever enrich your life.",
      ],
      subList: {
        hasSubList: false,
        childList: [
          {
            text: " ",
            list: [],
          },
        ],
      },
      buttonText: "Contact For Booking",
    },
    whyChoose: {
      bgImg: null,
      imgLink: Tojbi,
      title: "Why Choose us for Hajj & Umrah training?",
      description: null,
      list: [
        "By choosing Hijaz Hajj & Umrah Kafela for your Hajj and Umrah training, you benefit from our experience, customized curriculum, comprehensive training, practical demonstrations, emphasis on safety and well-being, emotional and spiritual support, and our strong reputation.",
        "Experience and expertise",
        "Our association brings years of experience and expertise in providing Hajj and Umrah training. We have a team of knowledgeable instructors who possess a deep understanding of the rituals, historical significance, and practical aspects of the pilgrimage.",
        "Their expertise ensures that you receive accurate guidance and comprehensive training.",
        "Customized curriculum",
        "We understand the unique needs and challenges faced by Bangladeshi Hajjis. Our training program is specifically tailored to cater to the requirements of Bangladeshi pilgrims. We address cultural, linguistic, and logistical aspects that are relevant to you, providing training that is customized to your specific needs.",
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
    bdToSaudi: {
      bgImg: null,
      imgLink: colorTojbi,
      title: "Bangladesh to Saudi Arabia air ticket price",
      description: null,
      list: [
        "Typically, the most economical period to fly from Dhaka to Saudi Arabia is during the low season, spanning from November to March. During this time, one-way tickets can be obtained for approximately BDT 47,585 - BDT 52,873, while round-trip tickets range from BDT 95,171 - BDT 105,746.",
        "Airfare from Dhaka, Bangladesh to Saudi Arabia can fluctuate based on various elements, including the time of year, choice of airline, and the advance booking window.",
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
  },
};

const hajjSlice = createSlice({
  name: "facilities",
  initialState,
  reducers: {},
});

export default hajjSlice.reducer;
