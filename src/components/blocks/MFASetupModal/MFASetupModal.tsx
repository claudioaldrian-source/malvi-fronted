import { useEffect, useState } from "react";

type MFASetupModalProps = {
  open: boolean;
  onClose: () => void;
};

function MFASetupModal({ open, onClose }: MFASetupModalProps) {
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState("");
  const [manualCode, setManualCode] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

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

  const handleVerify = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:7000/mfa/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          token: code,
        }),
      });

      const result = await response.json();

      setMessage(result.message);
    } catch (error) {
      console.error(error);
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

          <input
            type="text"
            placeholder="Código de 6 dígitos"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button onClick={handleVerify}>
            Verificar
          </button>

          {message && (
  <p
    style={{
      color: "green",
      fontWeight: "bold",
      fontSize: "18px",
      marginTop: "10px",
    }}
  >
    {message}
  </p>
)}
        </>
      )}

      <button onClick={onClose}>
        Cerrar
      </button>
    </div>
  );
}

export default MFASetupModal;