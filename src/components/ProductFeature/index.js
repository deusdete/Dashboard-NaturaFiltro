import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
export default function ProductFeature(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="iq-challanges ">
        <div className="container">
          <div className="row">
              <div className="col-sm-12">
                <div className="title-box">
                  <h2 className="title">{t('productFeature_title')}</h2>
                  <p className="sub-title">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
                </div>
              </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 ">
              <div className="text-center">
                <div className="iq-challange-img">
                  <img src={require('../../assets/images/payment/cards.png')} className="img-fluid mb-2" alt=""></img>
                </div>
                <div className="info-box ">
                  <h4 className="mb-2">Formas de pagamento</h4>
                  <p>Cartões de crédito, cartões de débito, boleto bancário</p>
                  <a className="button mt-3" target="_blank"  href={props.linkCompra} className="link-button">Comprar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="iq-features product-feature">
        <div className="container">
          {props.features.map((item, key) => (
            <div key={key} className="feature1">
              <div className="row ">
                <div className="col-md-6 text-center position-relative">
                  <div className="features-img ">
                    <img src={require(`../../assets/images/solution/${item.imagem}`)} className="img-fluid" alt=""></img>
                  </div>
                </div>
                {item.textos.length > 0 ? (
                <div className="col-md-6 text-left align-self-center mt-5 mt-lg-0">
                  <div className="iq-featurebox">
                    <p className="mt-3 text-white">
                      {item.textos.map(text => (
                        <>
                          {t(text)}<br></br>
                        </>
                      ))}
                    </p>
                  </div>
                </div> ) : null }
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

ProductFeature.propType = {
  features: PropTypes.array.isRequired,
  linkCompra: PropTypes.string.isRequired
}
