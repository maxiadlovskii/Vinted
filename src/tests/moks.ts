export const dog = {
  breeds: [
    {
      weight: {
        imperial: "20 - 40",
        metric: "9 - 18",
      },
      height: {
        imperial: "15 - 19",
        metric: "38 - 48",
      },
      id: 12,
      name: "American Eskimo Dog",
      country_code: "US",
      bred_for: "Circus performer",
      breed_group: "Non-Sporting",
      life_span: "12 - 15 years",
      temperament: "Friendly, Alert, Reserved, Intelligent, Protective",
      reference_image_id: "Bymjyec4m",
    },
  ],
  id: "rVOHQ6r1R",
  url: "https://cdn2.thedogapi.com/images/rVOHQ6r1R.jpg",
  width: 1500,
  height: 1200,
};

export const responseMock = {
  data: {
    cars: [dog],
  },
};

export const fetcher = (): Promise<any> => Promise.resolve(responseMock);
