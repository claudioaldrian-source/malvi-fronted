import { useEffect, useState } from "react";

type MFASetupModalProps = {
  open: boolean;
  onClose: () => void;
};

function MFASetupModal({ open, onClose }: MFASetupModalProps) {
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState("");
  const [manualCode, setManualCode] = useState("");

  const handleSetup = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:7000/mfa/setup", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      setQrCode(result.data.qrCode);
      setManualCode(result.data.manualCode);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      handleSetup();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div>
      <h2>Autenticación en dos pasos</h2>

      {loading && <p>Cargando...</p>}

      {qrCode && (
        <>
          <img src={qrCode} alt="QR MFA" width={220} />

          <p>{manualCode}</p>
        </>
      )}

      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default MFASetupModal;