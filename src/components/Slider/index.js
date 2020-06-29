import React from 'react';
import { Link } from "react-router-dom"
import './slider.css'
export default function Slider({imgBg, imgProd, titulo, discricao, linkTo}){
  return(
      <>
        <li data-index="rs-19" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="300"  data-thumb="revslider/assets/100x50_5e86b-shap.png"  data-rotate="0"  data-saveperformance="off"  data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
          <img src={imgBg}  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" class="rev-slidebg" data-no-retina></img>
          <h1 class={`title tp-caption   tp-resizeme`}
              id="slide-19-layer-1" 
              data-x="29" 
              data-y="center" 
              data-voffset="-81" 
              data-width="['auto']"
              data-height="['auto']"
              data-transform_idle="o:1;"
              data-transform_in="x:50px;opacity:0;s:1000;e:Power3.easeInOut;" 
              data-transform_out="opacity:0;s:300;e:Power3.easeInOut;" 
              data-start="600" 
              data-splitin="none" 
              data-splitout="none" 
              data-responsive_offset="on" 
              >
              {titulo}<br></br>
          </h1>
          <p class={`caption tp-caption   tp-resizeme`}
              id="slide-19-layer-2" 
              data-x="30" 
              data-y="center" 
              data-voffset="40" 
              data-width="['auto']"
              data-height="['auto']"
              data-transform_idle="o:1;"
              data-transform_in="x:50px;opacity:0;s:1000;e:Power3.easeInOut;" 
              data-transform_out="opacity:0;s:300;e:Power3.easeInOut;" 
              data-start="600" 
              data-splitin="none" 
              data-splitout="none" 
              data-responsive_offset="on" 
              >
              {discricao}<br></br>
          </p>
          <Link class={`link tp-caption  rev-btn  tp-resizeme`}
              id="slide-20-layer-3" 
              data-x="30" 
              data-y="center" 
              data-voffset="140" 
              data-width="['auto']"
              data-height="['auto']"
              data-transform_idle="o:1;"
              data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:0;e:Linear.easeNone;"
              data-style_hover="c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);"
              data-transform_in="x:50px;opacity:0;s:1000;e:Power3.easeInOut;" 
              data-transform_out="opacity:0;s:300;e:Power3.easeInOut;" 
              data-start="600" 
              data-splitin="none" 
              data-splitout="none" 
              data-responsive_offset="on" 
              to={linkTo}
              >
              Clique e saiba como
          </Link>
          <div class="tp-caption   tp-resizeme" 
              id="slide-19-layer-5" 
              data-x="right" 
              data-hoffset="10" 
              data-y="100" 
              data-width="['none','none','none','none']"
              data-height="['none','none','none','none']"
              data-transform_idle="o:1;"
              data-transform_in="x:50px;opacity:0;s:1000;e:Power3.easeInOut;" 
              data-transform_out="opacity:0;s:300;" 
              data-start="1600" 
              data-responsive_offset="on" 
              style={{zIndex: 8}}><img src={imgProd} alt="" data-ww="auto" data-hh="auto" data-no-retina></img>
          </div>
        </li>
      </>
  );
}