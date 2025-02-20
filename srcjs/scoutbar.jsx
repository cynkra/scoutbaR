import { reactShinyInput } from 'reactR';
import { ScoutBar } from 'scoutbar';
import { processAction } from './utils.jsx';
import './scoutbar.css'

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
  if (!Array.isArray(configuration.actions)) {
    configuration.actions = [configuration.actions]
  }

  // Update cache key by key when necessary
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

  return (
    <ScoutBar
      showRecentSearch={cachedConfig.showRecentSearch || false}
      autocomplete={cachedConfig.autocomplete || 'on'}
      tutorial={cachedConfig.tutorial || true}
      revealScoutbar={configuration.revealScoutbar}
      theme={cachedConfig.theme}
      acknowledgement={cachedConfig.acknowledgement || false}
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
          return (processAction(action, setValue))
        })
      }
    />
  );
};

reactShinyInput('.scoutbar', 'scoutbaR.scoutbar', scoutbarInput);