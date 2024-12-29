import { createSlice } from "@reduxjs/toolkit";

import colorTojbi from "../../assets/imgs/colorTojbi.png";

import Kaba from "../../assets/imgs/kaba.png";

import plane from "../../assets/imgs/plane.png";

import caliography from "../../assets/imgs/Caliography.png";

const initialState = {
  PreReg: {
    preReg: {
      bgImg: caliography,
      imgLink: colorTojbi,
      title: "Hajj pre-registration 2025 process from Dhaka, Bangladesh",
      description:
        "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
      list: [
        "Pre-registration for the Hajj in 2024 is already complete.",
        "Register for Hajj 2025 right away to be the first to receive all the information you need! The order of reservations for all Hajj 2025 packages is first come, first served.",
        "We are still pre-registering pilgrims for the Hajj in 2025. Please complete the form to request a price quote for the possible best Hajj packages in 2025.",
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

    regPro: {
      bgImg: caliography,
      imgLink: colorTojbi,
      title: "Hajj pre-registration 2025 process from Dhaka, Bangladesh",
      description:
        "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
      list: [
        "Pre-registration for the Hajj in 2024 is already complete.",
        "Register for Hajj 2025 right away to be the first to receive all the information you need! The order of reservations for all Hajj 2025 packages is first come, first served.",
        "We are still pre-registering pilgrims for the Hajj in 2025. Please complete the form to request a price quote for the possible best Hajj packages in 2025.",
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
  HajjVisaReq: {
    visaReq: {
      bgImg: caliography,
      imgLink: colorTojbi,
      title: "Hajj visa requirements checklist 2025 from Bangladesh",
      description:
        "As you prepare for the profound pilgrimage of Hajj, ensuring a smooth and hassle-free experience is paramount. Hijaz Hajj & Umrah Kafela’s Hajj visa requirements checklist 2025 / 2026 from Bangladesh is your guide to preparing for this remarkable journey of faith. May your Hajj pilgrimage be accepted and bring you closer to the divine.",
      list: [
        "Valid passport with a 12-month validity period",
        "Two copies of PP-size recent photographs",
        "Active Local Mobile No",
        "Active Email ID",
        "GO/NOC (*) Conditional",
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

    HajjVisaApply: {
      bgImg: caliography,
      imgLink: colorTojbi,
      title: "How to apply for a Hajj visa 2025 from Bangladesh?",
      description:
        "Applying for a Hajj visa from Bangladesh involves several steps, and it's essential to follow the process carefully to ensure a successful application. Here's a guideline on how to apply for a Hajj visa from Bangladesh:",
      list: [
        "Registration with a Hajj agency",
        "Complete the application form",
        "Provide required documents",
        "Submit biometric data",
        "Visa approval",
        "Travel arrangements",
        "Travel Insurance",
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
      buttonText: "Apply For Visa",
    },
    EligibilityCriteria: {
      bgImg: null,
      imgLink: Kaba,
      title: "Eligibility criteria for Saudi Arabia Hajj Visa",
      description:
        "Applying for a Hajj visa from Bangladesh involves several steps, and it's essential to follow the process carefully to ensure a successful application. Here's a guideline on how to apply for a Hajj visa from Bangladesh:",
      list: [
        "Muslim faith: Hajj is a religious pilgrimage that is only available to adherents of Islam, hence the petitioner must be one.",
        "Age Requirement: The age requirement for Hajj visas is not specified. Minors must, however, be accompanied by a parent or legal guardian.",
        "Health condition: Candidates must be in good health and clear of any infectious disorders that could endanger other pilgrims.",
        "Valid passport: For the visa application, a valid passport that is at least six months older than the anticipated departure date is required.",
        "Financial capability: Candidates must show that they have the financial means to pay for their Hajj trip.",
        "Travel arrangements",
        "Travel intentions: The applicant must genuinely want to perform Hajj and ask Allah for his or her blessings and pardon.",
        "Non-Muslims accompanied by Muslims: For the purpose of traveling with Muslim family members on their Hajj, non-Muslims may apply for a special visa.",
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
      buttonText: "Apply For Visa",
    },
    HealthBenefits: {
      bgImg: null,
      imgLink: plane,
      title: "Health benefits of Umrah",
      description:
        "Applying for a Hajj visa from Bangladesh involves several steps, and it's essential to follow the process carefully to ensure a successful application. Here's a guideline on how to apply for a Hajj visa from Bangladesh:",
      list: [null],
      subList: {
        hasSubList: true,
        childList: [
          {
            text: "Women's Hajj visa",
            list: [
              "Women of all ages can apply for a Hajj visa.",
              "Females below 45 years of age must be accompanied by a Mahram.",
              "If a woman is over 45 years old, she can travel without a Mahram but must be part of an organized group.",
            ],
          },
          {
            text: "Children's Hajj visa:",
            list: [
              "Children of all ages require their own Hajj visa to perform the pilgrimage.",
              "Minors (under 18) must be accompanied by a parent or legal guardian during Hajj.",
            ],
          },
          {
            text: "Mahram consent letter:",
            list: [
              "For women traveling without a Mahram, a notarized Mahram consent letter is required, signed by the authorized male guardian (father, brother, son, etc.).",
              "The letter should grant permission for the woman to perform Hajj with her travel group.",
            ],
          },
        ],
      },
      buttonText: "Apply For Visa",
    },
    HajjTips: {
      bgImg: null,
      imgLink: Kaba,
      title: "Tips for a smooth Hajj visa acquisition",
      description:
        "Securing your Hajj visa is a crucial step toward your spiritual journey. To ensure a seamless visa acquisition process, consider the following tips:",
      list: [
        "Early application",
        "Choose a reputable agency",
        "Accurate documentation",
        "Comply with regulations",
        "Financial preparedness",
        "Stay updated",
        "Patience and flexibility",
        "Consult with experts",
        "Follow up",
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
      buttonText: "Apply For Visa",
    },
  },
};

const hajjSlice = createSlice({
  name: "hajj",
  initialState,
  reducers: {},
});

export default hajjSlice.reducer;
