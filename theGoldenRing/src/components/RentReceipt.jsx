import { useEffect, useState } from "react";

export default function RentReceipt({ appartId }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [address, setAdress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [landlordGenderUndersigned, setLandlordGenderUndersigned] =
    useState("");
  const [landlordName, setLandlordName] = useState("");
  const [tenantName, setTenantName] = useState("");
  const [totalSumInWords, setTotalSumInWords] = useState("");
  const [totalSumInFigures, setTotalSumInFigures] = useState("");
  const [rentOnly, setRentOnly] = useState("");
  const [rentChargesOnly, setRentChargesOnly] = useState("");
  const [landlordCity, setLandlordCity] = useState("");

  //TODO: fonction qui génère appartId selon mes besoins

  // en attendant la future fonction
  appartId = "appartement-Flocon";

  useEffect(() => {
    const fetchAppartement = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/appartements/${appartId}`
        );
        if (!res.ok)
          throw new Error("Erreur lors de la récupération de l'appartement");

        const data = await res.json();
        setStartDate(data.start_date);
        setEndDate(data.end_date);
        setAdress(data.address);
        setPostcode(data.postcode);
        setLandlordGenderUndersigned(data.landlord_gender_undersigned);
        setLandlordName(data.landlord_name);
        setTenantName(data.tenant_name);
        setTotalSumInWords(data.total_sum_in_words);
        setTotalSumInFigures(data.total_sum_in_figures);
        setRentOnly(data.rent_only);
        setRentChargesOnly(data.rent_charges_only);
        setLandlordCity(data.landlord_city);
      } catch (err) {
        console.error("Erreur :", err);
      }
    };

    fetchAppartement();
  }, []);

  //TODO: manque la génération automatique du mois actuel et de l'année actuelle

  //TODO: manque la ville dans "adresse de la location"

  return (
    <div className="quittance-container" id={appartId}>
      <header>
        <h1>QUITTANCE DE LOYER</h1>
      </header>

      <p className="time-period">
        Quittance de loyer du <span className="start-date">{startDate}</span> au{" "}
        <span className="end-date">{endDate}</span>
      </p>

      <div className="adresse">
        <p>
          <strong>Adresse de la location :</strong>
        </p>
        <p id="address" className="appart-adress">
          {address}
        </p>
        <p id="postcode">{postcode}</p>
      </div>

      <div className="contenu">
        <p>
          Je,{" "}
          <span id="landlord-gender-undersigned">
            {landlordGenderUndersigned}
          </span>
          <strong id="landlord-name"> {landlordName}</strong>, propriétaire du
          logement désigné ci-dessus, déclare avoir reçu de{" "}
          <strong id="tenant-name">{tenantName}</strong> la somme de .....{" "}
          <strong id="total-sum-in-words">{totalSumInWords}</strong>{" "}(
          <strong className="total-sum-in-figures">
            {totalSumInFigures}
          </strong>€{" "})
          ..... au titre du paiement du loyer et des charges pour la période de
          location du <span className="start-date">{startDate}</span> au{" "}
          <span className="end-date">{endDate}</span> et lui en donne quittance,
          sous réserve de tous mes droits.
        </p>
      </div>

      <div className="details">
        <h2>Détail du règlement :</h2>
        <ul>
          <li>
            Loyer : <span id="rent-only">{rentOnly} €</span>
          </li>
          <li>
            Provision pour charges :{" "}
            <span id="rent-charges-only">{rentChargesOnly} €</span>
          </li>
          <li>
            Total du loyer :
            <strong className="total-sum-in-figures">{totalSumInFigures} {" "} €</strong>
          </li>
        </ul>
      </div>

      <div className="signature">
        <p>
          Date du paiement : <span className="start-date">{startDate}</span>
        </p>
        <p>
          Fait à <span id="landlord-city">{landlordCity}</span>, le
          <span className="start-date">{startDate}</span>.
        </p>
      </div>

      <div className="note">
        <p>
          Cette quittance annule tous les reçus qui auraient pu être établis
          précédemment en cas de paiement partiel du montant du présent terme.
          Elle est à conserver pendant cinq ans par le locataire (article 2224
          du Code civil).
        </p>
      </div>
    </div>
  );
}
