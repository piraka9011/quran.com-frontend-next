import React, { useRef } from 'react';

import useTranslation from 'next-translate/useTranslation';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import CloseIcon from '../../../public/icons/close.svg';
import MicrophoneIcon from '../../../public/icons/microphone.svg';

import styles from './Trigger.module.scss';

import Button, { ButtonShape, ButtonVariant } from 'src/components/dls/Button/Button';
import useBrowserLayoutEffect from 'src/hooks/useBrowserLayoutEffect';
import {
  toggleIsSearchDrawerVoiceFlowStarted,
  toggleIsCommandBarVoiceFlowStarted,
  selectIsCommandBarVoiceFlowStarted,
  selectIsSearchDrawerVoiceFlowStarted,
} from 'src/redux/slices/voiceSearch';

interface Props {
  isCommandBar?: boolean;
}

const TarteelVoiceSearchTrigger: React.FC<Props> = ({ isCommandBar = false }) => {
  const { t } = useTranslation('common');
  const isSupported = useRef(true);
  const dispatch = useDispatch();
  const isCommandBarVoiceFlowStarted = useSelector(
    selectIsCommandBarVoiceFlowStarted,
    shallowEqual,
  );
  const isSearchDrawerVoiceFlowStarted = useSelector(
    selectIsSearchDrawerVoiceFlowStarted,
    shallowEqual,
  );

  const onMicClicked = () => {
    dispatch({
      type: isCommandBar
        ? toggleIsCommandBarVoiceFlowStarted.type
        : toggleIsSearchDrawerVoiceFlowStarted.type,
    });
  };

  // check whether the microphone is supported first.
  useBrowserLayoutEffect(() => {
    isSupported.current =
      navigator.mediaDevices?.getUserMedia ||
      // @ts-ignore
      navigator.getUserMedia ||
      // @ts-ignore
      navigator.webkitGetUserMedia ||
      // @ts-ignore
      navigator.mozGetUserMedia;
  }, []);

  // if the mic is not supported.
  if (!isSupported.current) {
    return <></>;
  }

  const showCloseIcon =
    (isCommandBar && isCommandBarVoiceFlowStarted) ||
    (!isCommandBar && isSearchDrawerVoiceFlowStarted);

  return (
    <Button
      onClick={onMicClicked}
      shape={ButtonShape.Circle}
      variant={ButtonVariant.Ghost}
      className={styles.button}
      tooltip={t('command-bar.search-by-voice')}
      hasSidePadding={false}
    >
      {showCloseIcon ? <CloseIcon /> : <MicrophoneIcon />}
    </Button>
  );
};

export default TarteelVoiceSearchTrigger;
