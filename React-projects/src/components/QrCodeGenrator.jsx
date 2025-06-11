import React, { useState } from 'react';
import QRCode from "react-qr-code";

const QrCodeGenrator = () => {
  const [qrCode, setQrCode] = useState();
  const [value, setValue] = useState("");

  function handleGenrateQr() {
    setQrCode(value);
    setValue("");
  }

  return (
    <div className='flex w-full h-screen justify-center items-center'>
      <div className='flex flex-col justify-center items-center p-3 w-[400px] border rounded'>
        <p className='font-semibold text-xl'>QR Code Generator</p>

        <div className='py-3 flex gap-3'>
          <input
            onChange={(e) => setValue(e.target.value)}
            type="text"
            value={value}
            placeholder='Enter anything here'
            className='px-2 py-1 border rounded'
          />
          <button onClick={handleGenrateQr} className='p-1 border rounded cursor-pointer'>
            Generate
          </button>
        </div>

        <div className='mt-4'>
          {qrCode && (
            <QRCode
              size={200}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={qrCode}
              viewBox={`0 0 256 256`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QrCodeGenrator;
