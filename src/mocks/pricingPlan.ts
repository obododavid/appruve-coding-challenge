import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios);

const plans = [
  {
    name: "Bronze Plan",
    price: "$69.99",
    benefits: [
      "100mb Disk space",

    ]
  },
  {
    name: "Silver Plan",
    price: "$99.99",
    benefits: [
      "400mb Disk space",

    ]
  },
  {
    name: "Gold Plan",
    price: "$169.99",
    benefits: [
      "1gb Disk space",

    ]
  }
];

mock.onGet("/plans").reply(200, {
  plans
});
const fetchPlans = () => axios.get("/plans");

export default fetchPlans;
