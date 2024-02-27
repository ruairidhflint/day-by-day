function generatePastBirthdays() {
  const birthYear = 1991 + 1;
  const birthMonth = 2;
  const birthDay = 27;

  const today = new Date();
  const birthdays: Record<string, { summary: string }> = {};

  for (let year = birthYear; year <= today.getFullYear(); year++) {
    const birthday = new Date(year, birthMonth - 1, birthDay);
    if (birthday <= today) {
      const key = `${year}-${String(birthMonth).padStart(2, "0")}-${String(
        birthDay
      ).padStart(2, "0")}`;
      const age = year - birthYear + 1;
      birthdays[key] = {
        summary: `${age}${
          age === 1 ? "st" : age === 2 ? "nd" : age === 3 ? "rd" : "th"
        } Birthday 🎉`,
      };
    }
  }

  return birthdays;
}
const days: { [key: string]: { url?: string; summary?: string } } = {
  "1991-02-27": { summary: "Born in London, England" },
  ...generatePastBirthdays(),
  "2008-07-14": { summary: "Start dating Rebecca" },
  "2018-03-14": {
    summary: "Read 'Yes Man' by Danny Wallace. Changes everything.",
  },
  "1994-04-24": {
    summary: "My brother was born",
  },
  "1996-01-04": {
    summary: "Start Primary School",
  },
  "2002-09-03": {
    summary: "Start Secondary School",
  },
  "2018-06-24": {
    summary: "First tattoo",
  },
  "2018-09-29": {
    summary: "Propose to Rebecca",
  },
  "2018-12-31": {
    summary: "Finish reading 100 books in a year",
  },
  "2019-04-23": {
    summary: "Start Lambda School to retrain as a Software Engineer",
  },
  "2020-08-22": {
    summary: "Walked a marathon distance around London",
  },
  "2020-09-09": {
    summary: "First day as a professional Software Engineer at CP+R",
  },
  "2020-09-29": {
    summary: "Met Ivor Cradock",
  },
  "2020-09-10": {
    summary: "We buy our first home together",
  },
  "2021-08-07": { summary: "Married to Rebecca" },
  "2021-08-21": { summary: "Bella and Trix join the family" },
  "2022-06-06": { summary: "Start work at Tipalti" },
  "2022-01-15": { summary: "See Hak Baker perform live" },
  "2022-04-23": { summary: "Honeymoon to Thailand 🇹🇭" },
  "2023-01-05": { summary: "Found out Rebecca was pregnant" },
  "2023-02-07": { summary: "My father passes away" },
  "2023-07-06": { summary: "This project is launched" },
  "2023-09-07": {
    summary: "Elijah Flint is born. 7lbs 5oz and a full head of hair",
  },
  "2023-10-18": {
    summary: "Launch Great Books project (books.rory.codes)",
  },
};

export { days };
