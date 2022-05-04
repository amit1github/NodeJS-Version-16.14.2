const dbConnect = require("./mongoDB01");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.update(
    { name: "note 5" },
    {
      $set: { name: "mi note 5 pro", price: 300 },
    }
  );
  console.warn(result);
};

updateData();
