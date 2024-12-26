import { useState, useEffect } from 'react';
import { QRCode } from 'react-qrcode-logo';
import { QrPlaceComponentStyle } from './styles.qrplace';
import { useLinkValue } from '../../contexts/LinkValueContext';

export const QrPlaceComponent = ({qrRef}: {qrRef: any}) => {
  const { linkValue } = useLinkValue();
  const [qrValue, setQrValue] = useState<string>('Valor padrão do QR CODE');

  useEffect(() => {
    setQrValue(linkValue || 'Valor padrão do QR CODE');
  }, [linkValue]);

      return (
        <QrPlaceComponentStyle>
          <QRCode
            value={qrValue}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            size={1000}
            logoImage="src/styles/assets/brasao_novo.png"
            removeQrCodeBehindLogo={true}
            logoWidth={200}
            bgColor="#FFF"
            ref={qrRef}
          />
        </QrPlaceComponentStyle>
      );
    }