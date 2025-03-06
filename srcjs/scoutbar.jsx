import { reactShinyInput } from 'reactR';
import { ScoutBar } from 'scoutbar';
import { processAction, setOpenState, cacheOrExtractConfig, updateConfig } from './utils.jsx';
import './scoutbar.css'

const scoutbarInput = ({ configuration, value, setValue }) => {
  // Cache or extract cached configuration
  let cachedConfig = cacheOrExtractConfig(configuration);
  // Scoutbar does not seem to emit any onClose so it does not know
  // its state
  setOpenState(configuration);
  // Update cache key by key when necessary
  updateConfig(cachedConfig, configuration);

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