export default function RentReceipt() {
  return (
    <div className="quittance-container">
      <h1>QUITTANCE DE LOYER</h1>

      <p className="periode">
        Quittance de loyer du <span className="start-date"></span> au
        <span className="end-date"></span>
      </p>

      <div className="adresse">
        <p>
          <strong>Adresse de la location :</strong>
        </p>
        <p id="address"></p>
        <p id="postcode"></p>
      </div>

      <div className="contenu">
        <p>
          <span id="landlord-gender-undersigned"></span>
          <strong id="landlord-name"></strong>, propriétaire du logement désigné
          ci-dessus, déclare avoir reçu de <strong id="tenant-name"></strong> la
          somme de <strong id="total-sum-in-words"></strong>
          <strong className="total-sum-in-figures"></strong> au titre du paiement du
          loyer et des charges pour la période de location du
          <span className="start-date"></span> au <span className="end-date"></span> et
          lui en donne quittance, sous réserve de tous mes droits.
        </p>
      </div>

      <div className="details">
        <h2>Détail du règlement :</h2>
        <ul>
          <li>
            Loyer : <span id="rent-only"></span>
          </li>
          <li>
            Provision pour charges : <span id="rent-charges-only">€</span>
          </li>
          <li>
            <strong>
              Total du loyer : <span className="total-sum-in-figures"></span>
            </strong>
          </li>
        </ul>
      </div>

      <div className="signature">
        <p>
          Date du paiement : <span className="start-date"></span>
        </p>
        <p>
          Fait à <span id="landlord-city"></span>, le
          <span className="start-date"></span>.
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
