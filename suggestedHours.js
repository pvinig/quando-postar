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

  healthcare: {
    facebook: {
      monday: ["10:00","11:00"],
      tuesday: ["11:00", "12:00"],
      wednesday: ["11:00", "12:00"],
      thursday: ["10:00", "11:00"],
      friday: ["10:00", "11:00"],
    },
    twitter: {
      monday: ["10,00", "14:00"],
      tuesday: ["09:00", "11:00"],
      thursday: ["08:00"],
    },
    instagram: {
      monday: ["09:00","14:00","17:00"],
      tuesday: ["08:00","09:00"],
      wednesday: ["08:00","09:00","17:00"],
    },
    tiktok: {
      tuesday: ["09:00"],
      thursday: ["12:00"],
      friday: ["05:00"],
    },
    others: {
      tuesday: ["11:00"],
      thursday: ["11:30"],
      friday: ["11:00"],
    },
  },

  media: {
    facebook: {
      monday: ["06:00"],
      tuesday: ["06:00", "08:00"],
      friday: ["07:00"],
    },
    twitter: {
      monday: ["06:00", "09:00"],
      tuesday: ["07:00", "10:00"],
    },
    instagram: {
      tuesday: ["13:00"],
      wednesday: ["06:00","11:00"],
      thursday:["08:00","09:00"],
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

  education: {
    facebook: {
      tuesday:["09:00"],
      wednesday:["10:00"],
      thursday:["10:00"],
    },
    twitter: {
      monday: ["18:00", "21:00"],
      thursday: ["10:00"],
    },
    instagram: {
      thursday:["14:00"],
      friday:["04:00"],
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

  nonprofit: {
    facebook: {
      tuesday:["13:00"],
      wednesday:["10:00","12:00","14:00"],
      thursday:["11:00","15:00"],
      friday:["13:00"],
    },
    twitter: {
      wednesday:["10:00","14:00"],
      friday:["11:00"],
    },
    instagram: {
      wednesday:["10:00","13:00","18:00"],
      thursday:["12:00"],
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

  restaurants: {
    facebook: {
      wednesday:["10:00"],
      friday:["14:00"],
    },
    twitter: {
      wednesday:["12:00"],
      thursday:["10:00"],
    },
    instagram: {
      monday:["10:00","11:30"],
      tuesday:["12:00"],
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

  tech: {
    facebook: {
      thursday:["16:00"],
      friday:["11:00"],
    },
    twitter: {
      tuesday:["09:00","14:00"],
      wednesday:["09:00"],
    },
    instagram: {
      monday:["11:00","20:00"],
      tuesday:["11:00"],
      thursday:["12:00"],
      friday:["11:00"],
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

  travel: {
    facebook: {
      monday:["10:00"],
      tuesday:["09:00","12:00"],
      wednesday:["10:00","12:00"],
      friday:["10:30","11:30"],
    },
    twitter: {
      monday:["10:00","13:00"],
      wednesday:["08:00"],
    },
    instagram: {
      monday:["12:30","14:30"],
      tuesday:["13:00"],
      thursday:["12:00"],
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

  finances: {
    facebook: {
      wednesday:["10:00","23:00"],
      friday:["11:00"],
    },
    twitter: {
      monday:["02:00"],
      tuesday:["01:00"],
      thursday:["01:00"],
      friday:["14:00"],
      sunday:["05:00"],

    },
    instagram: {
      monday:["12:30","14:30"],
      tuesday:["13:00"],
      thursday:["12:00"],
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

  hospitality: {
    facebook: {
      monday:["11:00"],
      friday:["09:00","11:00"],
    },
    twitter: {
      wednesday:["16:00"],
      thursday:["10:00"],
    },
    instagram: {
      wednesday:["12:00"],
      thursday:["15:00"],
      friday:["08:00","10:00"],
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
