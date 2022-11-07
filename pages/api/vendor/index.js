import dbConnect from "../../../db/dbconnect";
import vendorModel from "../../../models/VendorModel";

dbConnect();

// get all vendors and create a vendor

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const vendors = await vendorModel.find({});
        res.status(200).json({ success: true, vendors: vendors });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
      break;
    case "POST":
      try {
        const vendor = await vendorModel.create(req.body);
        res.status(200).json({ success: true, vendor: vendor });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
