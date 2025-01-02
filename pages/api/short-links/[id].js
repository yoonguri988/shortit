export default function handler(req, res) {
  // res.send(req.query);
  // res.send(req.body);
  // res.send(req.cookies);
  switch (req.method) {
    case "POST":
      res.send("생성");
      break;
    case "GET":
      res.send("조회");
      break;
    default:
      break;
  }
}
