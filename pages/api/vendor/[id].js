import dbConnect from "../../../db/dbconnect";
import vendorModel from "../../../models/VendorModel";

dbConnect();

// get a unique vendor, edit,delete

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const vendor = await vendorModel.findById(id);
        if (!vendor) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, vendor: vendor });
      } catch (error) {
        res.status(400).json({ success: false, message: "not working" });
      }

      break;
    case "PUT":
      try {
        const vendor = await vendorModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!vendor) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, vendor: vendor });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;
    case "DELETE":
      try {
        const vendor = await vendorModel.deleteOne({ _id: id });

        if (!vendor) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, vendor: vendor });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
