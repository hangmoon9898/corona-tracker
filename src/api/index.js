import axios from "axios";

const baseUrl = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/";
const options = {
  headers: {
    'X-RapidAPI-Key': 'c2d2986792msh0e33471291a27cdp11b909jsnfadbf6ee851f',
    'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
  }
}

export const fetchData = async (country) => {
  const optionsWithParam  = {...options, params: { country },}

  try {
    const { data: {
      data: {
        confirmed,
        recovered,
        deaths,
        lastChecked,
        active = confirmed - (recovered  + deaths),
      },
    }
    } = await axios.get(`${baseUrl}total`, optionsWithParam );

    return {
      confirmed,
      recovered,
      deaths,
      lastChecked,
      active,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}stats`, options);
    const modifiedData = data.data.covid19Stats.map((dailyData) => ({
      confirmed: dailyData.confirmed,
      deaths: dailyData.deaths,
      date: dailyData.lastUpdate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const countries = async () => {
  try {
    const {
      data: { data: {covid19Stats} },
    } = await axios.get(`${baseUrl}stats`, options);
    const rawData = covid19Stats.map((item) => item.country);
    return [...new Set(rawData)]
  } catch (error) {
    console.log(error);
  }
};
