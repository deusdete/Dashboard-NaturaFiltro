import ReactGA from "react-ga";

export const initGA = (trackingID) => {           
    ReactGA.initialize(trackingID); 
 }

 export const PageView = () => {  
    ReactGA.pageview(window.location.pathname +  
                     window.location.search); 
}

/**
 * Event - Add custom tracking event.
 * @param {string} category 
 * @param {string} action 
 * @param {string} label 
 */
export const Event = (category, action, label = 'NOT', interaction = false) => {

    // Envia só a categoria e ação
    if((category && action) && (label === 'NOT' && interaction === false)){
      console.log('category nd action');
      ReactGA.event({
        category: category,
        action: action,
      });
    }else if((category && action) && (label !== 'NOT' && interaction === false)){
      console.log('category, action end label');
      ReactGA.event({
        category: category,
        action: action,
        label: label,
      });
    }else if((category && action) && (label !== 'NOT' && interaction === true)){
      console.log('category, action, label end nonInteraction');
      ReactGA.event({
        category: category,
        action: action,
        label: label,
        nonInteraction: true
      });
    }

    
  };

  export const EventLink = (category, action, label) => {
    console.log('link');
    ReactGA.event({
      category: category || 'PÁGINA',
      action: action,
      label: label,
      transport: 'beacon'
    });
  }