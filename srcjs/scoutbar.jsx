import { reactShinyInput } from 'reactR';
import { createScoutAction, createScoutPage, createScoutSection, ScoutBar } from 'scoutbar';

const processAction = (el, setValue) => {
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
    close(false);
  }

  func = createScoutAction(children);
  return(func)
}

const scoutbarInput = ({ configuration, value, setValue }) => {

  let canUpdateConfig = false;
  let configInputId = `${configuration.id}-configuration`;

  // Cache or extract cached configuration
  let cachedConfig;
  if (Shiny.shinyapp.$inputValues[configInputId] === undefined) {
    cachedConfig = configuration;
    Shiny.setInputValue(configInputId, cachedConfig);
  } else {
    cachedConfig = Shiny.shinyapp.$inputValues[configInputId];
  }

  // When we call update input, then
  // it is possible we don't pass any action.
  // In that case we don't want to overwrite the existing state.
  // The state is kept in a secondary input which is updated
  // whenever actions change.
  if (configuration.actions === undefined) {
    configuration.actions = Shiny.shinyapp.$inputValues[configInputId].actions;
  }

  // Update cache key by key when necessary
  Object.keys(configuration).forEach(function(key, index) {
    if (configuration[key] !== cachedConfig[key]) {
      canUpdateConfig = true;
      cachedConfig[key] = configuration[key];
    }
  });
  
  // Only update if any difference was detected
  if (canUpdateConfig) {
    Shiny.setInputValue(configInputId, cachedConfig);
  }

  return (
    <ScoutBar
        showRecentSearch={cachedConfig.showRecentSearch || false}
        autocomplete={cachedConfig.autocomplete || 'on'}
        tutorial={cachedConfig.tutorial || true}
        revealScoutbar={configuration.revealScoutbar}
        theme={cachedConfig.theme}
        acknowledgement={cachedConfig.acknowledgement || true}
        bodyScroll={cachedConfig.bodyScroll || true}
        disableFocusTrap={cachedConfig.disableFocusTrap || false}
        barWidth={cachedConfig.barWidth || '650px'}
        noResultsOnEmptySearch={cachedConfig.noResultsOnEmptySearch || false}
        persistInput={cachedConfig.persistInput || false}
        disableClickOutside={cachedConfig.disableClickOutside || false}
        disableSnackbar={cachedConfig.disableSnackbar || false}
        placeholder={cachedConfig.placeholder}
        actions={
          cachedConfig.actions.map((action) => {
            return(processAction(action, setValue))
          })
        }
      />
  );
};

reactShinyInput('.scoutbar', 'scoutbaR.scoutbar', scoutbarInput);