import { useEffect, useState } from "react";
import CurrentMonth from "./CurrentMonth";
import CurrentYear from "./CurrentYear";

export default function RentReceipt({ appartId }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [address, setAdress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [appartCity, setAppartCity] = useState("");
  const [landlordGenderUndersigned, setLandlordGenderUndersigned] =
    useState("");
  const [landlordName, setLandlordName] = useState("");
  const [tenantName, setTenantName] = useState("");
  const [totalSumInWords, setTotalSumInWords] = useState("");
  const [totalSumInFigures, setTotalSumInFigures] = useState("");
  const [rentOnly, setRentOnly] = useState("");
  const [rentChargesOnly, setRentChargesOnly] = useState("");
  const [landlordCity, setLandlordCity] = useState("");
  let updatedStartDate;
  let updatedEndDate;

  //TODO 1 :  manque la génération automatique d'un mois au choix et de l'année au choix

  //TODO 2 : fonction qui génère appartId selon mes besoins

  // en attendant la future fonction
  appartId = "appartement-Terrage";

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
        setAppartCity(data.appart_city);
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

  const updatedYear = CurrentYear();
  const updatedMonth = CurrentMonth();

  if (
    startDate === 1 &&
    (updatedMonth === "janvier" ||
      updatedMonth === "mars" ||
      updatedMonth === "mai" ||
      updatedMonth === "juillet" ||
      updatedMonth === "août" ||
      updatedMonth === "octobre" ||
      updatedMonth === "décembre")
  ) {
    updatedStartDate = startDate + "er";
    updatedEndDate = 31;
  } else if (
    startDate === 1 &&
    (updatedMonth === "avril" ||
      updatedMonth === "juin" ||
      updatedMonth === "septembre" ||
      updatedMonth === "novembre")
  ) {
    updatedStartDate = startDate + "er";
    updatedEndDate = 30;
  } else if (startDate === 1 && updatedMonth === "février") {
    updatedStartDate = startDate + "er";
    updatedEndDate = 28;
  } else {
    updatedStartDate = startDate;
    updatedEndDate = endDate;
  }

  return (
    <div className="quittance-container" id={appartId}>
      <header>
        <h1>QUITTANCE DE LOYER</h1>
      </header>

      <p className="time-period">
        Quittance de loyer du{" "}
        <span className="start-date">
          {updatedStartDate} {updatedMonth} {updatedYear}{" "}
        </span>
        au{" "}
        <span className="end-date">
          {updatedEndDate} {updatedMonth} {updatedYear}
        </span>
      </p>

      <div className="bordered-container address">
        <h2>Adresse de la location :</h2>
        <p id="address" className="appart-adress">
          {address}
        </p>
        <p id="postcode">
          {postcode} {appartCity}
        </p>
      </div>

      <div className="contenu">
        <p>
          Je,{" "}
          <span id="landlord-gender-undersigned">
            {landlordGenderUndersigned}
          </span>
          <span id="landlord-name"> {landlordName}</span>, propriétaire du
          logement désigné ci-dessus, déclare avoir reçu de{" "}
          <span id="tenant-name">{tenantName}</span> la somme de .....{" "}
          <span id="total-sum-in-words">{totalSumInWords}</span> (
          <span className="total-sum-in-figures">{totalSumInFigures}</span>€ )
          ..... au titre du paiement du loyer et des charges pour la période de
          location du{" "}
          <span className="start-date">
            {updatedStartDate} {updatedMonth} {updatedYear}
          </span>{" "}
          au{" "}
          <span className="end-date">
            {updatedEndDate} {updatedMonth} {updatedYear}{" "}
          </span>
          et lui en donne quittance, sous réserve de tous mes droits.
        </p>
      </div>

      <div className="bordered-container details">
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
            <span className="total-sum-in-figures">{totalSumInFigures} €</span>
          </li>
          <li>
            Date du paiement :
            <span className="start-date">
              {updatedStartDate} {updatedMonth} {updatedYear}
            </span>
          </li>
        </ul>
      </div>

      <div className="signature">
        <p>
          Fait à <span id="landlord-city">{landlordCity}</span>, le{" "}
          <span className="start-date">
            {updatedStartDate} {updatedMonth} {updatedYear}
          </span>
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
