import dbConnect from "@/db/dbConnect";
import QRCode from "@/db/models/QRCode";
// import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();
  // console.log(mongoose.connection.readyState);
  switch (req.method) {
    case "GET":
      const qrCodes = await QRCode.find();
      res.send(qrCodes);
      break;
    case "POST":
      const newQrCode = await QRCode.create(req.body);
      res.status(201).send(newQrCode);
      break;
    default:
      res.status(404).send();
      break;
  }
}
