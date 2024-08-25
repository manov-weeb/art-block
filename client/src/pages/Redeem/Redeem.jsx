import { useContext } from "react";
import { WalletContext } from "../../context/WalletContext"; // Adjust the path as necessary
import styles from "./Redeem.module.css"; // Optional: create a CSS module for styling

const Redeem = () => {
  const { connectedAccount, pointsEarned } = useContext(WalletContext); // Access pointsEarned and connectedAccount from WalletContext

  console.log(connectedAccount, pointsEarned)

  // Define a redemption value per point
  const redemptionValuePerPoint = 0.003; // Example: 1 point = $0.01
  const redeemableAmount = pointsEarned * redemptionValuePerPoint;

  const handleRedeem = async () => {
    if (redeemableAmount <= 0) {
      alert("You have no points to redeem.");
      return;
    }

    try {
      const response = await fetch("http://localhost:9000/withdraw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientAddress: connectedAccount,
          claimAmt: redeemableAmount, // Sending the redeemable amount
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Redemption successful! Transaction: ${data.transaction}`);
      } else {
        alert(`Error: ${data.message || "Redemption failed."}`);
      }
    } catch (error) {
      console.error("Error during redemption:", error);
      alert("An error occurred while processing your redemption.");
    }
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.pointsInfo}>
        <p>
          <strong>Points Earned:</strong> {pointsEarned}
        </p>
        <p>
          <strong>Redeemable Amount:</strong> {redeemableAmount.toFixed(2)}FTO
        </p>
      </div>
      <button className={styles.redeemButton} onClick={handleRedeem}>
        Redeem Points
      </button>
    </div>
  );
};

export default Redeem;
