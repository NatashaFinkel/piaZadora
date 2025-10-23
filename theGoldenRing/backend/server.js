import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();
app.use(express.json());

// Connexion réutilisable
async function getConnection() {
    return await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "piaZadoraDataBase"
    });
}

/* ----------------------
   ➤ Récupérer tous les appartements
---------------------- */
app.use(cors());
app.get("/appartements", async (res) => {
    try {
        const connection = await getConnection();
        const [rows] = await connection.execute("SELECT * FROM appartements");
        await connection.end();

        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// Récupérer un seul appartement
app.get("/appartements/:appartId", async (req, res) => {
    try {
        const { appartId } = req.params;

        // Vérifie que l'id n'est pas vide
        if (!appartId || appartId.trim() === "") {
            return res.status(400).json({ error: "Invalid appartement ID" });
        }

        const connection = await getConnection();
        const [rows] = await connection.execute(
            "SELECT * FROM appartements WHERE appart_id = ?",
            [appartId]
        );

        await connection.end();

        if (rows.length === 0) {
            return res.status(404).json({ error: "Appartement not found" });
        }

        res.json(rows[0]);

    } catch (err) {
        console.error("Erreur serveur :", err);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// Lancer le serveur
app.listen(3000, () => {
    console.log("🚀 Serveur démarré sur http://localhost:3000");
});
