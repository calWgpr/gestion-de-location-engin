const express = require("express");
const app = express();
const port = 8080;
const portMongo = 8083;
const cors = require("cors");
const { ObjectId } = require("mongodb");
const nodemailer = require("nodemailer");
const { connectToDb, getDb } = require("./mongoConnection");


app.use(express.json());
// app.use(cors());
app.use(cors({ origin: "http://localhost:3000" }));
app.options("/", cors());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "calwgpr@gmail.com",
    pass: "wfuu qorf qiez yupf",
  },
});

app.post("/email", (req, res) => {
  const { to, subject, htmlContent } = req.body;

  const mailOptions = {
    from: "calwg28@gmail.com",
    to,
    subject,
    html: htmlContent,
  };
  try {
    const info = transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.json({ message: "Email sent successfully!" }); // Inform client
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" }); // Inform client
  }
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error("Error sending email: ", error);
  //   } else {
  //   }
  //     console.log("Email sent: ", info.response);
  // });
});

connectToDb((err) => {
  if (!err) {
    var serv = app.listen(portMongo, () => {
      var host = serv.address().address;
      var port = serv.address().port;
      console.log("server is listening on port mogno " + port, host);
    });
    db = getDb();
  }
});
app.patch("/update/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("users")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
      .then((result) => {
        res.status(200).json(result);
        console.log("updated successfully datag");
      })
      .catch((error) => {
        console.error("Error updating data:");
        res.status(500).json({ error: "Could not update data" });
      });
  }
});

app.get("/", (req, res) => {console.log("objectvvv");
  let docs = [];
  db.collection("users")
    .find()
    .forEach((doc) => docs.push(doc))
    .then(() => {
      //sending the json format of the data
      res.status(200).json(docs);
      console.log("Docs fetched successfully");
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch documents" });
    });
});

app.post("/", (req, res) => {
  formData = req.body;

  db.collection("users")
    .insertOne(formData)
    .then((Newdoc) => {
      res.status(201).json(Newdoc);
    })
    .catch((err) => {
      console.log("error in handling request: " + err);
    });
});

//conection
const mysql = require("mysql");
const fct = require("./test");

// Connection details
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ihmproject",
  port: 3306,
});
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database!");

  // Perform database operations here
  // ...

  // Close the connection when done
});

//FETCH all list of a specific categorie
app.get("/:listEngin", async (req, res) => {
  const listEngin = req.params.listEngin;
  if (listEngin != 1 && listEngin !="userCredential") {
    var sql = "select * from engin where categorie =? ";

    connection.query(sql, [listEngin], function (err, result, fields) {
      if (err) {
        console.log("error querying engin");
        connection.end();
        return;
      }
      if (result.length > 0) {
        res.status(200).json(result);
      }
    });
  }else if(listEngin =="userCredential" ) {
     try {
      const sql = "SELECT * FROM user";
      connection.query(sql, (err, result) => {
        if (err) {
          console.error("Error querying engin:", err);
          res.status(500).send("Error fetching data");
        } else {
          res.json(result);
        }
      });
    } catch (error) {
      console.error("Error handling request:", error);
      res.status(500).send("Internal server error");
    }
  } 
  
  else {
    try {
      const sql = "SELECT * FROM engin";
      connection.query(sql, (err, result) => {
        if (err) {
          console.error("Error querying engin:", err);
          res.status(500).send("Error fetching data");
        } else {
          res.json(result);
        }
      });
    } catch (error) {
      console.error("Error handling request:", error);
      res.status(500).send("Internal server error");
    }
  }
});
// app.get("/userCredential", async (req, res) => {console.log("obbbject");
//   try {
//     const sql = "SELECT * FROM user";
//     connection.query(sql, (err, result) => {
//       if (err) {
//         console.error("Error querying engin:", err);
//         res.status(500).send("Error fetching data");
//       } else {
//         res.json(result);
//       }
//     });
//   } catch (error) {
//     console.error("Error handling request:", error);
//     res.status(500).send("Internal server error");
//   }
// });

app.get("/all", async (req, res) => {
  console.log("yesdfe");
  try {
    const sql = "SELECT * FROM engin";
    connection.query(sql, (err, result) => {
      if (err) {
        console.error("Error querying engin:", err);
        res.status(500).send("Error fetching data");
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => console.log("listening on port " + port));
