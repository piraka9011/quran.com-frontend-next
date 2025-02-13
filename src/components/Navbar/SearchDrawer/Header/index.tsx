import React, { RefObject } from 'react';

import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import DrawerSearchIcon from '../Buttons/DrawerSearchIcon';

import styles from './Header.module.scss';

import TarteelVoiceSearchTrigger from 'src/components/TarteelVoiceSearch/Trigger';
import useElementComputedPropertyValue from 'src/hooks/useElementComputedPropertyValue';

interface Props {
  isVoiceFlowStarted: boolean;
  isSearching: boolean;
  searchQuery: string;
  onSearchQueryChange: (event: React.FormEvent<HTMLInputElement>) => void;
  resetQueryAndResults: () => void;
  inputRef: RefObject<HTMLInputElement>;
}

const Header: React.FC<Props> = ({
  isVoiceFlowStarted,
  onSearchQueryChange,
  resetQueryAndResults,
  inputRef,
  isSearching,
  searchQuery,
}) => {
  const { t } = useTranslation('common');
  // we detect whether the user is inputting a right-to-left text or not so we can change the layout accordingly
  const isRTLInput = useElementComputedPropertyValue(inputRef, 'direction') === 'rtl';
  return (
    <>
      {isVoiceFlowStarted ? (
        <TarteelVoiceSearchTrigger />
      ) : (
        <>
          <DrawerSearchIcon />
          <div
            className={classNames(styles.searchInputContainer, {
              [styles.searchInputContainerRTL]: isRTLInput,
            })}
          >
            <input
              className={styles.searchInput}
              type="text"
              ref={inputRef}
              dir="auto"
              placeholder={t('search.title')}
              onChange={onSearchQueryChange}
              value={searchQuery}
              disabled={isSearching}
            />
            <TarteelVoiceSearchTrigger />
            {searchQuery && (
              <button type="button" className={styles.clear} onClick={resetQueryAndResults}>
                {t('input.clear')}
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
