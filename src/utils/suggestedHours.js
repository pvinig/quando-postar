import days from "./days";

const suggestedHours = {
  others: {
    facebook: {
      tuesday: ["08:00", "12:00"],
      thursday: ["08:00", "12:00"],
    },
    twitter: {
      monday: ["08:00"],
      thursday: ["08:00"],
    },
    instagram: {
      wednesday: ["11:00"],
    },
    tiktok: {
      tuesday: ["09:00"],
      thursday: ["12:00"],
      friday: ["05:00"],
    },
    others: {
      tuesday: ["10:00"],
      wednesday: ["10:00"],
      thursday: ["10:00"],
    },
  },
};

export const getSuggestedHours = (socialMedia, segment) => {
  const key = suggestedHours[segment] ? segment : "others";
  const hours = suggestedHours[key][socialMedia];
  const response = Object.keys(hours).map((day) => ({
    day: days[day],
    hours: hours[day],
  }));
  return response;
};

export default suggestedHours;
