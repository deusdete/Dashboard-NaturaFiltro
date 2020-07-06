import React from 'react'
import { useTranslation } from 'react-i18next';
import PropType from 'prop-types';

export default function Breadcrumb(props) {
  const { t, i18n } = useTranslation();
  return (
    <section class="iq-breadcrumb">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="text-white mb-3">{t(props.title)}</h2>
            <nav aria-label="breadcrumb" >
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">{t('home')}</a></li>
                <li class="breadcrumb-item active" aria-current="page">{t(props.title)}</li>
              </ol>
            </nav>
          </div>
            <div class="col-lg-6 d-flex justify-content-end breadcrumb-image">
            {/* <img src="images/breadcrumb/01.png" class="img-fluid" alt="images">  */}
          </div>
        </div>
      </div>
    </section>
  )
}

Breadcrumb.propType = {
  title: PropType.string.isRequired,
}
