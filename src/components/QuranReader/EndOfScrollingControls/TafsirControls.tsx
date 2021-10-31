import React from 'react';

import useTranslation from 'next-translate/useTranslation';

import EndOfScrollingButton from './EndOfScrollingButton';

import {
  getVerseNavigationUrl,
  getVerseSelectedTafsirNavigationUrl,
  getVerseTafsirNavigationUrl,
} from 'src/utils/navigation';
import { isFirstVerseOfSurah, isLastVerseOfSurah } from 'src/utils/verse';
import Verse from 'types/Verse';

interface Props {
  lastVerse: Verse;
  isTafsirIdSetFromUrl: boolean;
}

const TafsirControls: React.FC<Props> = ({ lastVerse, isTafsirIdSetFromUrl: isSelectedTafsir }) => {
  const { t } = useTranslation('quran-reader');
  const tafsirId = lastVerse?.tafsirs?.[0]?.resourceId;
  // if the id in the url is a non-existent tafsir id.
  if (isSelectedTafsir && !tafsirId) {
    return <></>;
  }
  const { chapterId, verseNumber } = lastVerse;
  return (
    <>
      {!isFirstVerseOfSurah(verseNumber) && (
        <EndOfScrollingButton
          text={t('prev-ayah')}
          href={
            isSelectedTafsir
              ? getVerseSelectedTafsirNavigationUrl(chapterId, verseNumber - 1, tafsirId)
              : getVerseTafsirNavigationUrl(chapterId, verseNumber - 1)
          }
        />
      )}
      <EndOfScrollingButton
        text={t('back-to-ayah')}
        href={getVerseNavigationUrl(`${chapterId}:${verseNumber}`)}
      />
      {!isLastVerseOfSurah(String(chapterId), verseNumber) && (
        <EndOfScrollingButton
          text={t('next-ayah')}
          href={
            isSelectedTafsir
              ? getVerseSelectedTafsirNavigationUrl(chapterId, verseNumber + 1, tafsirId)
              : getVerseTafsirNavigationUrl(chapterId, verseNumber + 1)
          }
        />
      )}
    </>
  );
};

export default TafsirControls;
