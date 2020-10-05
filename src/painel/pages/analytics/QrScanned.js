import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";

export default function QrScanned(props) {
  const history = useHistory();
  const [qrScanned, setQrScanned] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obterAnalyticsQrScanned();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function obterAnalyticsQrScanned() {
    setLoading(true);
    api
      .get("analytics/qr-scanned")
      .then((res) => {
        const { scannedQR } = res.data;
        console.log(scannedQR);
        setQrScanned(scannedQR);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }


  return (
    <div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              {/* <p className="card-description"> Add className <code>.table-striped</code> </p>*/}
              {loading ? (
                <h4 className="card-title">Carregando</h4>
              ) : qrScanned ? (
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> ID QR Code </th>
                        <th> Aberto em </th>
                      </tr>
                    </thead>
                    <tbody>
                      {qrScanned.map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.qrCodeId}</td>
                          <td>{item.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <h4 className="card-title">Nenhum registos para filtros</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}