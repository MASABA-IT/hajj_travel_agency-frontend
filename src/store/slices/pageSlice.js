import { createSlice } from "@reduxjs/toolkit";

// Importing images
import colorTojbi from "../../assets/imgs/colorTojbi.png";
import mosjid from "../../assets/imgs/mosjid.png";
import colorKaba from "../../assets/imgs/mosjid.png";
import Kaba from "../../assets/imgs/kaba.png";
import visa from "../../assets/imgs/visa.png";
import plane from "../../assets/imgs/plane.png";
import caliography from "../../assets/imgs/Caliography.png";

// Initial State
const initialState = {
  pages: {
    // page:ex-umrah
    umrah: {
      // section:ex-package
      Package: {
        requirements: {
          bgImg: caliography,
          imgLink: visa,
          title: "Umrah visa requirements",
          description:
            "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
          list: [
            "Valid passport (must be valid for 6 months from the date of travel)",
            "Recent passport-sized photographs",
            "Vaccination certificate",
            "Copy of NID / Smart card",
            "Birth certificate copy (for children)",
            "Marriage certificate copy (for couples)",
          ],
          buttonText: "Apply For Visa",
        },
        rewards: {
          bgImg: caliography,
          imgLink: mosjid,
          title:
            "Rewards of performing Umrah: A spiritual journey that may change your eternal life",
          description:
            "Embarking on the sacred pilgrimage of Umrah offers a multitude of rewards and blessings that touch the heart, purify the soul, and strengthen one's connection with Allah.",
          list: [
            "Nearness to Allah",
            "Deduction of poverty",
            "Forgiveness of Sins",
            "Spiritual enlightenment",
            "Du'a (Supplication) acceptance",
            "Inspiration and reflection",
            "Strengthened brotherhood and sisterhood.",
          ],
          buttonText: "Apply For Visa",
        },
      },
      Benefits: {
        benefit: {
          bgImg: caliography,
          imgLink: colorTojbi,
          title: "Benefits of Umrah: Spiritual rewards of Umrah pilgrimage",
          description:
            "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
          list: [
            "The Prophet Muhammad (PBUH) regarded Umrah as the most uplifting Sunnah since it is a spiritual act of worship. Millions of pilgrims travel to Makkah to conduct Umrah every year as a spiritual journey.",
            "The rewards and benefits of Umrah are given to those who execute this spiritual rite with sincere intention. Muslims pray to the merciful Allah for blessings and ask for pardon for their sins.",
          ],
          buttonText: "Book For Next Umrah",
        },
        umrahJourney: {
          bgImg: caliography,
          imgLink: colorKaba,
          title: "Umrah: Journey of Spiritual Healing",
          description:
            "Embarking on the sacred pilgrimage of Umrah offers a multitude of rewards and blessings that touch the heart, purify the soul, and strengthen one's connection with Allah.",
          list: [
            "Drawing closer to Allah: Umrah fosters a deep connection with Allah, allowing individuals to seek His forgiveness and blessings",
            "Increased spirituality: The rituals of Umrah, like wearing Ihram and performing Tawaf, inspire spiritual growth and renewal.",
            "Forgiveness of sins: Sincere Umrah leads to the expiation of past sins, offering a fresh start.",
            "Hadith: The Prophet (PBUH) said, “Umrah is an expiation for sins committed between it and the previous one, and Hajj Mabrur’s reward is Paradise.” (Sahih Al-Bukhari)",
          ],
          buttonText: "Talk To Our Consultant",
        },
        personalBenefit: {
          bgImg: caliography,
          imgLink: Kaba,
          title: "Personal benefits of Umrah",
          list: [
            "Inner peace and tranquillity: Umrah provides a special setting for introspection, self-reflection, and discovering inner calm amidst the holy sites of Makkah and Madinah.",
            "Strengthened faith: People get a stronger sense of faith and a closer bond with Islam and its teachings as a result of participating in the numerous Umrah rites.",
            "Enhanced self-discipline: The rigorous routines and adherence to rituals during Umrah cultivate self-discipline, which can be carried forward to other aspects of life.",
          ],
          buttonText: "Apply For Visa",
        },
        socialBenefit: {
          bgImg: caliography,
          imgLink: colorKaba,
          title: "Social benefits of Umrah",
          list: [
            "Unity and solidarity: A spirit of solidarity, fraternity, and sisterhood among believers is fostered through the Umrah when Muslims from various backgrounds and cultures congregate in Makkah.",
            "Cultural exchange: Interacting with other pilgrims from various nations provides a priceless chance to discover various cultures, traditions, and customs within the Muslim community.",
            "Community bonding: Umrah provides a chance to strengthen relationships with family, friends, and fellow believers, fostering a sense of belonging and togetherness.",
          ],
          buttonText: "Apply For Visa",
        },
        healthBenefit: {
          bgImg: caliography,
          imgLink: plane,
          title: "Health benefits of Umrah",
          list: [
            "Physical activity: The performance of Umrah involves walking, standing, and physical exertion, which can contribute to improved cardiovascular health and overall fitness.",
            "Mental well-being: The spiritual nature of Umrah, coupled with the peaceful surroundings, can positively impact mental health, reducing stress and promoting relaxation.",
          ],
          buttonText: "Apply For Visa",
        },
        benefitAndRewards: {
          bgImg: caliography,
          imgLink: colorKaba,
          title: "Benefits and rewards of performing Umrah in Ramadan",
          description:
            "Performing Umrah in Ramadan holds great significance for Muslims and carries numerous benefits and rewards. Here are some of them:",
          list: [
            "Increased reward: Performing Umrah in Ramadan carries multiplied rewards, equivalent to performing Hajj with the Prophet (PBUH) (Bukhari).",
            "Spiritual renewal: Umrah cleanses the soul, offering forgiveness and renewal.",
            "Honoring Ramadan: It reflects devotion to Allah and the sanctity of the sacred month.",
            "Laylat al-Qadr: Pilgrims may experience the blessings of this special night during Ramadan.",
            "Unity and worship: Umrah fosters community spirit and participation in Ramadan rituals.",
          ],
          buttonText: "Apply For Visa",
        },
      },
    },
    hajj: {
      mainData: {
        bgImg: "/path/to/hajjMain.png",
        title: "Hajj - Pilgrimage to Mecca",
        description: "Details about the Hajj journey.",
      },
      childPages: {
        steps: {
          bgImg: "/path/to/steps.png",
          imgLink: "/path/to/stepDetails.png",
          title: "Steps of Hajj",
          description: "Learn the steps of performing Hajj.",
          list: ["Step 1 of Hajj...", "Step 2 of Hajj..."],
          buttonText: "Learn More",
        },
      },
    },
  },
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
