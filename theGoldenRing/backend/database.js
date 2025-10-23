import mysql from "mysql2";

// 1. Créer une connexion
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "lapin_database"
});

// 2. Connecter à MySQL
connection.connect(err => {
  if (err) {
    console.error("Erreur de connexion :", err);
    return;
  }
  console.log("Connecté à MySQL !");
});
