import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios);

const plans = [
  {
    name: "Bronze Plan",
    price: "$69.99",
    benefits: [
      "100mb Disk space",
      "Unlimited download",
      "Free one year support",
      "Free 15gb linux hosting"
    ]
  },
  {
    name: "Silver Plan",
    price: "$99.99",
    benefits: [
      "400mb Disk space",
      "Unlimited download",
      "Free one year support",
      "Free 15gb linux hosting"
    ]
  },
  {
    name: "Gold Plan",
    price: "$169.99",
    benefits: [
      "1gb Disk space",
      "Unlimited download",
      "Free one year support",
      "Free 15gb linux hosting"
    ]
  }
];

mock.onGet("/plans").reply(200, {
  plans
});
const fetchPlans = () => axios.get("/plans");

export default fetchPlans;
