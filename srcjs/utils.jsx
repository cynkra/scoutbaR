import { createScoutAction, createScoutPage, createScoutSection } from 'scoutbar';

export const processAction = (el, setValue) => {
    let cl = el.class;
    let label = el.label;
    let children = el.children;
    let func;
  
    switch(cl) {
      case 'scout_page':
        func = createScoutPage;
        break;
      case 'scout_section':
        func = createScoutSection;
        break;
      default:
    }
  
    // When we don't have an action, we don't go further
    if (el.class !== "scout_action") {
      return(
        func({
          label: el.label,
          children: el.children.map((child) => {
            return(processAction(child, setValue))
          })
        })
      )
    }
  
    if (children.icon !== undefined && typeof children.icon === 'string') {
      children.icon = <i 
        class={`fas fa-${children.icon}`}
        role="presentation"
        aria-label={`${children.icon} icon`}
        >
      </i>
    }
    children.action = (e, { close }) => {
      // # id isn't passed to the HTML element so
      // we can't find it in the DOM. This is hacky but
      // works since aria-labels appears.
      let val = $(e.currentTarget).attr('aria-label');
      setValue(val);
      // Default is true
      if (children.closeOnClick) {
        close(false);
      }
    }
  
    func = createScoutAction(children);
    return(func)
  }
