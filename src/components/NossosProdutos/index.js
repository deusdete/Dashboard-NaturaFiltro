import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
export default function NossoProdutos(props) {
  const { t, i18n } = useTranslation();
  return (
    <section class="iq-blogs position-relative iq-product-blog">
      <div class="container">
          <div class="row">
            <div class="col-sm-12">
                <div class="title-box">
                  <h2 class="title" style={{color: "#000"}}>{t('nossasSolucoes')}</h2>
                  {/* <p class="sub-title">It is a long established fact that a reader will be distracted.</p>  */}
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
                <div class="owl-carousel"  data-autoPlay="true" data-loop="true" data-nav="false" data-dots="false" data-items="3" data-items-laptop="3" data-items-tab="2" data-items-mobile="1" data-items-mobile-sm="1" data-margin="30">
                  {props.produtos.map((item, key) => {
                    console.log(item, key);
                    return(
                      <div class="item">
                        <div class="main-blog">
                          <div class="blog-img" style={{backgroundColor: "#f16624", padding: 20}}>
                              <img src={require(`../../assets/images/solution/${item.imagem}`)} class="img-fluid" style={{display: "block", marginLeft: 'auto', marginRight: "auto", width: "50%"}} alt="produto"></img>
                          </div>
                          <div class="blog-detail">
                              <a href="blog-details-left-sidebar.html">
                              <h6 class="">{t(item.nome)}</h6>
                              </a>
                              <p class="mb-0">{t(item.descricao)}</p>
                              <a class="btn btn-primary mt-2" href={`${item.link}`}>{t('saibaMais')}</a>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}

NossoProdutos.propTypes = {
  produtos: PropTypes.array.isRequired,
}
