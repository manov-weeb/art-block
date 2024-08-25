import { useWalletContext } from '../../context/WalletContext';
import styles from './connectWallet.module.css';

const ConnectWallet = () => {
  const { connectedAccount, connectWallet, pointsEarned } = useWalletContext();

  return (
    <div className={styles.wallet}>
      <h5>Connect to Wallet</h5>
      <button
        className={`${styles.connectButton} ${
          connectedAccount ? styles.connected : ''
        }`}
        onClick={connectWallet}
        disabled={!!connectedAccount} // Disable button if already connected
        aria-label={connectedAccount ? 'Wallet Connected' : 'Connect Wallet'}
      >
        {connectedAccount ? 'Connected' : 'Connect'}
      </button>
      {connectedAccount ? (
        <div className={styles.walletInfo}>
          <p>
            <strong>Wallet Address:</strong> {connectedAccount}
          </p>
          <p>
            <strong>Points Earned:</strong> {pointsEarned}
          </p>
        </div>
      ) : (
        <p className={styles.connectMessage}>
          Please connect your wallet to see your details.
        </p>
      )}
    </div>
  );
};

export default ConnectWallet;
