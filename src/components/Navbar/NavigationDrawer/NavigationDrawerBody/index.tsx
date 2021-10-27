import React from 'react';

// import IconCollection from '../../../../../public/icons/collection.svg';
// import IconDonate from '../../../../../public/icons/donate.svg';
// import IconRadio2 from '../../../../../public/icons/radio-2.svg';
// import IconUpdates from '../../../../../public/icons/updates.svg';
import IconDevelopers from '../../../../../public/icons/developers.svg';
import IconFeedback from '../../../../../public/icons/feedback.svg';
import IconHome from '../../../../../public/icons/home.svg';
import IconInfo from '../../../../../public/icons/info.svg';
import IconLock from '../../../../../public/icons/lock.svg';
import IconQ from '../../../../../public/icons/Q_simple.svg';
import QuranReflect from '../../../../../public/icons/QR.svg';
import IconQuestionMark from '../../../../../public/icons/question-mark.svg';
import CommunitySection from '../CommunitySection';
import MobileApps from '../MobileApps';
import NavigationDrawerItem from '../NavigationDrawerItem';

import styles from './NavigationDrawerBody.module.scss';

const NavigationDrawerBody = () => {
  return (
    <div className={styles.listItemsContainer}>
      <h3 className={styles.subtitle}>Menu</h3>
      <NavigationDrawerItem title="Home" icon={<IconHome />} href="/" />
      <NavigationDrawerItem title="About us" icon={<IconInfo />} href="/about-us" />
      {/* <NavigationDrawerItem title="Updates" icon={<IconUpdates />} href="/updates" /> */}
      <NavigationDrawerItem title="Developers" icon={<IconDevelopers />} href="/developers" />
      {/* <NavigationDrawerItem title="Contribute" icon={<IconDonate />} href="/contribute" /> */}
      <NavigationDrawerItem title="Privacy" icon={<IconLock />} href="/privacy" />
      <NavigationDrawerItem
        title="Feedback"
        icon={<IconFeedback />}
        href="https://feedback.quran.com/"
        isExternalLink
      />
      <NavigationDrawerItem title="Help" icon={<IconQuestionMark />} href="/support" />
      {/* <NavigationDrawerItem title="Quran Radio" icon={<IconRadio2 />} /> */}
      {/* <h3 className={styles.subtitle}>Selected Collections</h3> */}
      {/* <NavigationDrawerItem title="Duaas" icon={<IconCollection />} /> */}
      {/* <NavigationDrawerItem title="Jewels of Quran" icon={<IconCollection />} /> */}
      {/* <NavigationDrawerItem title="Names of Allah" icon={<IconCollection />} /> */}
      {/* <NavigationDrawerItem title="Revelation" icon={<IconCollection />} />  */}
      <h3 className={styles.subtitle}>Community</h3>
      <CommunitySection />
      <h3 className={styles.subtitle}>Network</h3>
      <NavigationDrawerItem
        title="Quranicaudio.com"
        icon={<IconQ />}
        href="https://quranicaudio.com"
        isExternalLink
      />
      <NavigationDrawerItem
        title="Salah.com"
        icon={<IconQ />}
        href="https://salah.com"
        isExternalLink
      />
      <NavigationDrawerItem
        title="Sunnah.com"
        icon={<IconQ />}
        href="https://sunnah.com"
        isExternalLink
      />
      <NavigationDrawerItem
        title="Legacy.quran.com"
        icon={<IconQ />}
        href="https://legacy.quran.com"
        isExternalLink
      />
      <NavigationDrawerItem
        title="Corpus.quran.com"
        icon={<IconQ />}
        href="https://corpus.quran.com"
        isExternalLink
      />
      <NavigationDrawerItem
        title="QuranReflect.com"
        icon={<QuranReflect />}
        href="https://quranreflect.com/"
        isExternalLink
      />
      <MobileApps />
    </div>
  );
};

export default NavigationDrawerBody;
