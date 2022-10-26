import products from "../../data/products";

const handler = (req, res) => {
  return res.status(200).json(products);
};

export default handler;
