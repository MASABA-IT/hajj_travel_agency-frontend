import { createSlice } from "@reduxjs/toolkit";

// Importing images
// import colorTojbi from "../../assets/imgs/colorTojbi.png";
// import mosjid from "../../assets/imgs/mosjid.png";
// import colorKaba from "../../assets/imgs/mosjid.png";
// import Kaba from "../../assets/imgs/kaba.png";
// import visa from "../../assets/imgs/visa.png";
// import plane from "../../assets/imgs/plane.png";
// import performUmrahStep from "../../assets/imgs/performUmrahStep.png";
// import caliography from "../../assets/imgs/Caliography.png";

// Initial State
const initialState = {
  // pages: {
  //   // page:ex-umrah
  //   // umrah: {
  //   //   // section:ex-package
  //   //   Package: {
  //   //     //Key
  //   //     requirements: {
  //   //       bgImg: caliography,
  //   //       imgLink: visa,
  //   //       title: "Umrah visa requirements",
  //   //       description:
  //   //         "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
  //   //       list: [
  //   //         "Valid passport (must be valid for 6 months from the date of travel)",
  //   //         "Recent passport-sized photographs",
  //   //         "Vaccination certificate",
  //   //         "Copy of NID / Smart card",
  //   //         "Birth certificate copy (for children)",
  //   //         "Marriage certificate copy (for couples)",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Apply For Visa",
  //   //     },
  //   //     rewards: {
  //   //       bgImg: caliography,
  //   //       imgLink: mosjid,
  //   //       title:
  //   //         "Rewards of performing Umrah: A spiritual journey that may change your eternal life",
  //   //       description:
  //   //         "Embarking on the sacred pilgrimage of Umrah offers a multitude of rewards and blessings that touch the heart, purify the soul, and strengthen one's connection with Allah.",
  //   //       list: [
  //   //         "Nearness to Allah",
  //   //         "Deduction of poverty",
  //   //         "Forgiveness of Sins",
  //   //         "Spiritual enlightenment",
  //   //         "Du'a (Supplication) acceptance",
  //   //         "Inspiration and reflection",
  //   //         "Strengthened brotherhood and sisterhood.",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Apply For Visa",
  //   //     },
  //   //   },
  //   //   Benefits: {
  //   //     benefit: {
  //   //       bgImg: caliography,
  //   //       imgLink: colorTojbi,
  //   //       title: "Benefits of Umrah: Spiritual rewards of Umrah pilgrimage",
  //   //       description:
  //   //         "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
  //   //       list: [
  //   //         "The Prophet Muhammad (PBUH) regarded Umrah as the most uplifting Sunnah since it is a spiritual act of worship. Millions of pilgrims travel to Makkah to conduct Umrah every year as a spiritual journey.",
  //   //         "The rewards and benefits of Umrah are given to those who execute this spiritual rite with sincere intention. Muslims pray to the merciful Allah for blessings and ask for pardon for their sins.",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Book For Next Umrah",
  //   //     },
  //   //     umrahJourney: {
  //   //       bgImg: caliography,
  //   //       imgLink: colorKaba,
  //   //       title: "Umrah: Journey of Spiritual Healing",
  //   //       description:
  //   //         "Embarking on the sacred pilgrimage of Umrah offers a multitude of rewards and blessings that touch the heart, purify the soul, and strengthen one's connection with Allah.",
  //   //       list: [
  //   //         "Drawing closer to Allah: Umrah fosters a deep connection with Allah, allowing individuals to seek His forgiveness and blessings",
  //   //         "Increased spirituality: The rituals of Umrah, like wearing Ihram and performing Tawaf, inspire spiritual growth and renewal.",
  //   //         "Forgiveness of sins: Sincere Umrah leads to the expiation of past sins, offering a fresh start.",
  //   //         "Hadith: The Prophet (PBUH) said, “Umrah is an expiation for sins committed between it and the previous one, and Hajj Mabrur’s reward is Paradise.” (Sahih Al-Bukhari)",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Talk To Our Consultant",
  //   //     },
  //   //     personalBenefit: {
  //   //       bgImg: caliography,
  //   //       imgLink: Kaba,
  //   //       title: "Personal benefits of Umrah",
  //   //       list: [
  //   //         "Inner peace and tranquillity: Umrah provides a special setting for introspection, self-reflection, and discovering inner calm amidst the holy sites of Makkah and Madinah.",
  //   //         "Strengthened faith: People get a stronger sense of faith and a closer bond with Islam and its teachings as a result of participating in the numerous Umrah rites.",
  //   //         "Enhanced self-discipline: The rigorous routines and adherence to rituals during Umrah cultivate self-discipline, which can be carried forward to other aspects of life.",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Apply For Visa",
  //   //     },
  //   //     socialBenefit: {
  //   //       bgImg: caliography,
  //   //       imgLink: colorKaba,
  //   //       title: "Social benefits of Umrah",
  //   //       list: [
  //   //         "Unity and solidarity: A spirit of solidarity, fraternity, and sisterhood among believers is fostered through the Umrah when Muslims from various backgrounds and cultures congregate in Makkah.",
  //   //         "Cultural exchange: Interacting with other pilgrims from various nations provides a priceless chance to discover various cultures, traditions, and customs within the Muslim community.",
  //   //         "Community bonding: Umrah provides a chance to strengthen relationships with family, friends, and fellow believers, fostering a sense of belonging and togetherness.",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Apply For Visa",
  //   //     },
  //   //     healthBenefit: {
  //   //       bgImg: caliography,
  //   //       imgLink: plane,
  //   //       title: "Health benefits of Umrah",
  //   //       list: [
  //   //         "Physical activity: The performance of Umrah involves walking, standing, and physical exertion, which can contribute to improved cardiovascular health and overall fitness.",
  //   //         "Mental well-being: The spiritual nature of Umrah, coupled with the peaceful surroundings, can positively impact mental health, reducing stress and promoting relaxation.",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Apply For Visa",
  //   //     },
  //   //     benefitAndRewards: {
  //   //       bgImg: caliography,
  //   //       imgLink: colorKaba,
  //   //       title: "Benefits and rewards of performing Umrah in Ramadan",
  //   //       description:
  //   //         "Performing Umrah in Ramadan holds great significance for Muslims and carries numerous benefits and rewards. Here are some of them:",
  //   //       list: [
  //   //         "Increased reward: Performing Umrah in Ramadan carries multiplied rewards, equivalent to performing Hajj with the Prophet (PBUH) (Bukhari).",
  //   //         "Spiritual renewal: Umrah cleanses the soul, offering forgiveness and renewal.",
  //   //         "Honoring Ramadan: It reflects devotion to Allah and the sanctity of the sacred month.",
  //   //         "Laylat al-Qadr: Pilgrims may experience the blessings of this special night during Ramadan.",
  //   //         "Unity and worship: Umrah fosters community spirit and participation in Ramadan rituals.",
  //   //         "Heightened blessings: Makkah and Madinah’s spiritual significance is magnified during Ramadan.",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },

  //   //       buttonText: "Apply For Visa",
  //   //     },
  //   //   },
  //   //   Perform: {
  //   //     performStep: {
  //   //       bgImg: null,
  //   //       imgLink: performUmrahStep,
  //   //       title:
  //   //         "How to perform Umrah from Bangladesh | A step-by-step Guideline",
  //   //       description:
  //   //         "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
  //   //       list: [
  //   //         "The Prophet Muhammad (PBUH) regarded Umrah as the most uplifting Sunnah since it is a spiritual act of worship. Millions of pilgrims travel to Makkah to conduct Umrah every year as a spiritual journey.",
  //   //         "The rewards and benefits of Umrah are given to those who execute this spiritual rite with sincere intention. Muslims pray to the merciful Allah for blessings and ask for pardon for their sins.",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Book For Next Umrah",
  //   //     },
  //   //     performGuide: {
  //   //       bgImg: null,
  //   //       imgLink: performUmrahStep,
  //   //       title:
  //   //         "How to perform Umrah from Bangladesh | A step-by-step Guideline",
  //   //       description:
  //   //         "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
  //   //       list: [
  //   //         "The Prophet Muhammad (PBUH) regarded Umrah as the most uplifting Sunnah since it is a spiritual act of worship. Millions of pilgrims travel to Makkah to conduct Umrah every year as a spiritual journey.",
  //   //         "The rewards and benefits of Umrah are given to those who execute this spiritual rite with sincere intention. Muslims pray to the merciful Allah for blessings and ask for pardon for their sins.",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Book For Next Umrah",
  //   //     },
  //   //   },
  //   //   VisaRequirements: {
  //   //     visaStep: {
  //   //       bgImg: null,
  //   //       imgLink: colorTojbi,
  //   //       title:
  //   //         "How to perform Umrah from Bangladesh | A step-by-step Guideline",
  //   //       description:
  //   //         "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
  //   //       list: [
  //   //         "The Prophet Muhammad (PBUH) regarded Umrah as the most uplifting Sunnah since it is a spiritual act of worship. Millions of pilgrims travel to Makkah to conduct Umrah every year as a spiritual journey.",
  //   //         "The rewards and benefits of Umrah are given to those who execute this spiritual rite with sincere intention. Muslims pray to the merciful Allah for blessings and ask for pardon for their sins.",
  //   //       ],
  //   //       buttonText: "Book For Next Umrah",
  //   //     },
  //   //     visaGuide: {
  //   //       bgImg: null,
  //   //       imgLink: colorTojbi,
  //   //       title:
  //   //         "How to perform Umrah from Bangladesh | A step-by-step Guideline",
  //   //       description:
  //   //         "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
  //   //       list: [
  //   //         "The Prophet Muhammad (PBUH) regarded Umrah as the most uplifting Sunnah since it is a spiritual act of worship. Millions of pilgrims travel to Makkah to conduct Umrah every year as a spiritual journey.",
  //   //         "The rewards and benefits of Umrah are given to those who execute this spiritual rite with sincere intention. Muslims pray to the merciful Allah for blessings and ask for pardon for their sins.",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Book For Next Umrah",
  //   //     },
  //   //   },
  //   // },

  //   // hajj: {
  //   //   PreReg: {
  //   //     preReg: {
  //   //       bgImg: caliography,
  //   //       imgLink: colorTojbi,
  //   //       title: "Hajj pre-registration 2025 process from Dhaka, Bangladesh",
  //   //       description:
  //   //         "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
  //   //       list: [
  //   //         "Pre-registration for the Hajj in 2024 is already complete.",
  //   //         "Register for Hajj 2025 right away to be the first to receive all the information you need! The order of reservations for all Hajj 2025 packages is first come, first served.",
  //   //         "We are still pre-registering pilgrims for the Hajj in 2025. Please complete the form to request a price quote for the possible best Hajj packages in 2025.",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },

  //   //       buttonText: "Book For Next Umrah",
  //   //     },

  //   //     regPro: {
  //   //       bgImg: caliography,
  //   //       imgLink: colorTojbi,
  //   //       title: "Hajj pre-registration 2025 process from Dhaka, Bangladesh",
  //   //       description:
  //   //         "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
  //   //       list: [
  //   //         "Pre-registration for the Hajj in 2024 is already complete.",
  //   //         "Register for Hajj 2025 right away to be the first to receive all the information you need! The order of reservations for all Hajj 2025 packages is first come, first served.",
  //   //         "We are still pre-registering pilgrims for the Hajj in 2025. Please complete the form to request a price quote for the possible best Hajj packages in 2025.",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Book For Next Umrah",
  //   //     },
  //   //   },
  //   //   HajjVisaReq: {
  //   //     visaReq: {
  //   //       bgImg: caliography,
  //   //       imgLink: colorTojbi,
  //   //       title: "Hajj visa requirements checklist 2025 from Bangladesh",
  //   //       description:
  //   //         "As you prepare for the profound pilgrimage of Hajj, ensuring a smooth and hassle-free experience is paramount. Hijaz Hajj & Umrah Kafela’s Hajj visa requirements checklist 2025 / 2026 from Bangladesh is your guide to preparing for this remarkable journey of faith. May your Hajj pilgrimage be accepted and bring you closer to the divine.",
  //   //       list: [
  //   //         "Valid passport with a 12-month validity period",
  //   //         "Two copies of PP-size recent photographs",
  //   //         "Active Local Mobile No",
  //   //         "Active Email ID",
  //   //         "GO/NOC (*) Conditional",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Book For Next Umrah",
  //   //     },

  //   //     HajjVisaApply: {
  //   //       bgImg: caliography,
  //   //       imgLink: colorTojbi,
  //   //       title: "How to apply for a Hajj visa 2025 from Bangladesh?",
  //   //       description:
  //   //         "Applying for a Hajj visa from Bangladesh involves several steps, and it's essential to follow the process carefully to ensure a successful application. Here's a guideline on how to apply for a Hajj visa from Bangladesh:",
  //   //       list: [
  //   //         "Registration with a Hajj agency",
  //   //         "Complete the application form",
  //   //         "Provide required documents",
  //   //         "Submit biometric data",
  //   //         "Visa approval",
  //   //         "Travel arrangements",
  //   //         "Travel Insurance",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Apply For Visa",
  //   //     },
  //   //     EligibilityCriteria: {
  //   //       bgImg: null,
  //   //       imgLink: Kaba,
  //   //       title: "Eligibility criteria for Saudi Arabia Hajj Visa",
  //   //       description:
  //   //         "Applying for a Hajj visa from Bangladesh involves several steps, and it's essential to follow the process carefully to ensure a successful application. Here's a guideline on how to apply for a Hajj visa from Bangladesh:",
  //   //       list: [
  //   //         "Muslim faith: Hajj is a religious pilgrimage that is only available to adherents of Islam, hence the petitioner must be one.",
  //   //         "Age Requirement: The age requirement for Hajj visas is not specified. Minors must, however, be accompanied by a parent or legal guardian.",
  //   //         "Health condition: Candidates must be in good health and clear of any infectious disorders that could endanger other pilgrims.",
  //   //         "Valid passport: For the visa application, a valid passport that is at least six months older than the anticipated departure date is required.",
  //   //         "Financial capability: Candidates must show that they have the financial means to pay for their Hajj trip.",
  //   //         "Travel arrangements",
  //   //         "Travel intentions: The applicant must genuinely want to perform Hajj and ask Allah for his or her blessings and pardon.",
  //   //         "Non-Muslims accompanied by Muslims: For the purpose of traveling with Muslim family members on their Hajj, non-Muslims may apply for a special visa.",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: "",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Apply For Visa",
  //   //     },
  //   //     HealthBenefits: {
  //   //       bgImg: null,
  //   //       imgLink: plane,
  //   //       title: "Health benefits of Umrah",
  //   //       description:
  //   //         "Applying for a Hajj visa from Bangladesh involves several steps, and it's essential to follow the process carefully to ensure a successful application. Here's a guideline on how to apply for a Hajj visa from Bangladesh:",
  //   //       list: [null],
  //   //       subList: {
  //   //         hasSubList: true,
  //   //         childList: [
  //   //           {
  //   //             text: "Women's Hajj visa",
  //   //             list: [
  //   //               "Women of all ages can apply for a Hajj visa.",
  //   //               "Females below 45 years of age must be accompanied by a Mahram.",
  //   //               "If a woman is over 45 years old, she can travel without a Mahram but must be part of an organized group.",
  //   //             ],
  //   //           },
  //   //           {
  //   //             text: "Children's  Hajj visa:",
  //   //             list: [
  //   //               "Children of all ages require their own Hajj visa to perform the pilgrimage.",
  //   //               "Minors (under 18) must be accompanied by a parent or legal guardian during Hajj.",
  //   //             ],
  //   //           },
  //   //           {
  //   //             text: "Mahram consent letter:",
  //   //             list: [
  //   //               "For women traveling without a Mahram, a notarized Mahram consent letter is required, signed by the authorized male guardian (father, brother, son, etc.).",
  //   //               "The letter should grant permission for the woman to perform Hajj with her travel group.",
  //   //             ],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Apply For Visa",
  //   //     },
  //   //     HajjTips: {
  //   //       bgImg: null,
  //   //       imgLink: Kaba,
  //   //       title: "Tips for a smooth Hajj visa acquisition",
  //   //       description:
  //   //         "Securing your Hajj visa is a crucial step toward your spiritual journey. To ensure a seamless visa acquisition process, consider the following tips:",
  //   //       list: [
  //   //         "Early application",
  //   //         "Choose a reputable agency",
  //   //         "Accurate documentation",
  //   //         "Comply with regulations",
  //   //         "Financial preparedness",
  //   //         "Stay updated",
  //   //         "Patience and flexibility",
  //   //         "Consult with experts",
  //   //         "Follow up",
  //   //       ],
  //   //       subList: {
  //   //         hasSubList: false,
  //   //         childList: [
  //   //           {
  //   //             text: " ",
  //   //             list: [],
  //   //           },
  //   //         ],
  //   //       },
  //   //       buttonText: "Apply For Visa",
  //   //     },
  //   //   },
  //   // },
  // },
  travelList: [
    {
      main: {
        smallText: "Our Travel Support Area",
        heading: "We can help you at...",
        areas: [
          "Dhaka",
          "Comilla",
          "Feni",
          "India",
          "Bangladesh",
          "Turkey",
          "Syria",
          "Malaysia",
          "Singapore",
          "London",
          "Italy",
          "Rangpur",
          "Dinajpur",
        ],
      },
    },
    {
      categories: [
        {
          category: "umrah",
          sections: [
            {
              key: "packages",
              smallText: "Affordable Packages",
              heading: "Umrah Packages",
              areas: ["Economy", "Standard", "Premium"],
            },
            {
              key: "benefits",
              smallText: "Why Choose Us",
              heading: "Benefits of Umrah",
              areas: ["Spiritual Guidance", "Comfortable Accommodation"],
            },
            {
              key: "perform",
              smallText: "Steps to Perform",
              heading: "How to Perform Umrah",
              areas: ["Ihram", "Tawaf", "Sa'i"],
            },
            {
              key: "visaReq",
              smallText: "Visa Information",
              heading: "Umrah Visa Requirements",
              areas: ["Valid Passport", "Vaccination Certificate"],
            },
          ],
        },
        {
          category: "hajj",
          sections: [
            {
              key: "preReg",
              smallText: "Pre-registration is Mandatory",
              heading: "Hajj Pre-registration",
              areas: ["Online Forms", "Agency Assistance"],
            },
            {
              key: "visaReq",
              smallText: "Requirements for Visa",
              heading: "Hajj Visa Requirements",
              areas: ["Passport", "Vaccination", "Approval Letter"],
            },
            {
              key: "hajjPackage",
              smallText: "Choose Your Package",
              heading: "Hajj Packages",
              areas: ["Budget", "Standard", "Luxury"],
            },
          ],
        },
      ],
    },
  ],
  ourFaq: [
    {
      categories: [
        {
          category: "umrah",
          sections: [
            {
              key: "umrahPackages",
              ques: "What types of Umrah packages are available?",
              ans: "We offer Economy, Standard, and Premium packages tailored to your needs.",
            },
            {
              key: "umrahBenefits",
              ques: "What are the benefits of choosing your Umrah services?",
              ans: "We provide spiritual guidance, comfortable accommodation, and hassle-free travel arrangements.",
            },
            {
              key: "umrahPerform",
              ques: "How do I perform Umrah?",
              ans: "Umrah involves Ihram, Tawaf, Sa’i, and other rituals. Our guide provides detailed steps.",
            },
            {
              key: "umrahVisaReq",
              ques: "What are the visa requirements for Umrah?",
              ans: "You need a valid passport, a vaccination certificate, and a confirmed Umrah package.",
            },
            {
              key: "differenceBetweenHajjUmrah",
              ques: "What is the difference between Hajj and Umrah?",
              ans: "Hajj is a mandatory pilgrimage that must be performed once in a lifetime by eligible Muslims, while Umrah is a voluntary pilgrimage that can be performed at any time of the year.",
            },
            {
              key: "servicesProvided",
              ques: "What services does your agency provide for Hajj and Umrah?",
              ans: "We provide packages for both Hajj and Umrah that include accommodation, transportation, spiritual guidance, and more.",
            },
            {
              key: "documentsForVisa",
              ques: "What documents are required for a Hajj or Umrah visa?",
              ans: "A valid passport, vaccination certificate, and a confirmed package are required for both Hajj and Umrah visas.",
            },
            {
              key: "visaProcessingTime",
              ques: "How long does it take to process the Hajj or Umrah visa?",
              ans: "The processing time for Hajj and Umrah visas typically takes around 7 to 10 business days, depending on the embassy.",
            },
            {
              key: "groupOrPrivatePackages",
              ques: "Can you arrange group packages or private accommodations?",
              ans: "Yes, we offer both group packages and private accommodations to suit your preferences.",
            },
          ],
        },
        {
          category: "hajj",
          sections: [
            {
              key: "hajjPreReg",
              ques: "Is pre-registration mandatory for Hajj?",
              ans: "Yes, pre-registration is required to secure your spot and ensure compliance with regulations.",
            },
            {
              key: "hajjVisaReq",
              ques: "What are the visa requirements for Hajj?",
              ans: "A valid passport, vaccination, and an approval letter are necessary for obtaining a Hajj visa.",
            },
            {
              key: "hajjPackages",
              ques: "What Hajj packages do you offer?",
              ans: "We offer Budget, Standard, and Luxury packages to suit various preferences.",
            },
          ],
        },
        {
          category: "facilities",
          sections: [
            {
              key: "facilitiesAvailable",
              ques: "What facilities are available during Umrah and Hajj?",
              ans: "We provide accommodation, transportation, meals, and other essential facilities to ensure a smooth experience.",
            },
          ],
        },
        {
          category: "guidance",
          sections: [
            {
              key: "spiritualGuidance",
              ques: "Do you provide spiritual guidance for Umrah and Hajj?",
              ans: "Yes, we offer spiritual guidance and support throughout the journey to help you perform the rituals correctly.",
            },
          ],
        },
        {
          category: "managementBoard",
          sections: [
            {
              key: "boardMembers",
              ques: "Who are the members of the management board?",
              ans: "Our board consists of experienced professionals dedicated to providing the best travel services.",
            },
          ],
        },
      ],
    },
  ],
};

// Reducer Slice
const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    updateData(state, action) {
      const { page, section, key, value } = action.payload;
      state.pages[page][section][key] = value;
    },
  },
});

export const { updateData } = pagesSlice.actions;

export default pagesSlice.reducer;
