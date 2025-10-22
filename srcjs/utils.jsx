import { createScoutAction, createScoutPage, createScoutSection } from 'scoutbar';

const processAction = (el, setValue) => {
  let cl = el.class;
  let label = el.label;
  let children = el.children;
  let func;

  switch (cl) {
    case 'scout_page':
      func = createScoutPage;
      break;
    case 'scout_section':
      func = createScoutSection;
      break;
    default:
  }

  // When we don't have an action, we don't go further
  if (cl !== "scout_action") {
    return (
      func({
        label: label,
        children: children.map((child) => {
          return (processAction(child, setValue))
        })
      })
    )
  }
  // Convert icons to React elements
  if (children.icon !== undefined) {
    if (!React.isValidElement(children.icon)) {
      children.icon = reactR.hydrate({}, children.icon);
    }
  }
  children.action = (e, { close, clearSearch }) => {
    // Reset input so that if we select the same choice
    // observers can trigger.
    setValue(null);
    // # id isn't passed to the HTML element so
    // we can't find it in the DOM. This is hacky but
    // works since aria-labels appears.
    let val = $(e.currentTarget).attr('aria-label');
    setValue(val);
    // Default is true
    if (children.closeOnClick) {
      close(false);
    }
    // Reset search input
    clearSearch(true);
  }

  func = createScoutAction(children);
  return (func)
}

const setOpenState = (configuration) => {
  setInterval(() => {
    let actual = Shiny.shinyapp.$inputValues[`${configuration.id}-open`];
    let newVal = $(`#scoutbar___root`).children().length > 0;
    if (actual != newVal) {
      Shiny.setInputValue(
        `${configuration.id}-open`,
        newVal
      );
    }
  }, 100)
}

const cacheOrExtractConfig = (configuration) => {
  let cachedConfig;
  let configInputId = `${configuration.id}-configuration`;
  if (Shiny.shinyapp.$inputValues[configInputId] === undefined) {
    cachedConfig = configuration;
    Shiny.setInputValue(configInputId, cachedConfig);
  } else {
    cachedConfig = Shiny.shinyapp.$inputValues[configInputId];
  }
  return (cachedConfig)
}

const updateConfig = (cachedConfig, configuration) => {
  let configInputId = `${configuration.id}-configuration`;
  let canUpdateConfig = false;
  // When we call update input, then
  // it is possible we don't pass any action.
  // In that case we don't want to overwrite the existing state.
  // The state is kept in a secondary input which is updated
  // whenever actions change.
  if (configuration.actions === undefined) {
    configuration.actions = Shiny.shinyapp.$inputValues[configInputId].actions;
  }
  if (!Array.isArray(configuration.actions)) {
    configuration.actions = [configuration.actions]
  }

  // Find whether we can update
  Object.keys(configuration).forEach(function (key, index) {
    if (configuration[key] !== cachedConfig[key]) {
      canUpdateConfig = true;
      cachedConfig[key] = configuration[key];
    }
  });

  // Only update if any difference was detected
  if (canUpdateConfig) {
    Shiny.setInputValue(configInputId, cachedConfig);
  }
}

export { processAction, setOpenState, cacheOrExtractConfig, updateConfig }
