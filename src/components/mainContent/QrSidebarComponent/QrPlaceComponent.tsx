import React, { useState, useEffect } from 'react';
import { QRCode } from 'react-qrcode-logo';
import { QrPlaceComponentStyle } from './styles.qrplace';
import { useVCardValue } from '../../contexts/vCardContext';

export const QrPlaceComponent = () => {
  const { vCardValue } = useVCardValue();
  const [qrValue, setQrValue] = useState<string>('Valor padrão do QR CODE');

  // Atualiza o estado local do valor do QR Code sempre que vCardValue mudar
  useEffect(() => {
    setQrValue(vCardValue || 'Valor padrão do QR CODE');
    console.log("formulário recebido", vCardValue);
  }, [vCardValue]);

  return (
    <QrPlaceComponentStyle>
      <QRCode
        value={qrValue}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        size={600}
        logoImage="src/styles/assets/brasao_novo.png"
        removeQrCodeBehindLogo={true}
        logoWidth={200}
        bgColor="#F2F2F2"
      />
    </QrPlaceComponentStyle>
  );
};
