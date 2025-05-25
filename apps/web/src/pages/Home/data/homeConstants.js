import {
  DevicesIcon,
  DoNotDisturbIcon,
  HeartFilledIcon,
  LabelIcon,
  VideoCollectionIcon,
  VideoLibraryIcon,
} from '../../../components/common/Icons';
import { APP_NAME } from '../../../utils/appConstants';

export const HERO = {
  heading: `Watch YouTube. Take Back the Remote.`,
  description: `Finally grab back control of your viewing experience. ${APP_NAME} helps you organize and enjoy YouTube videos without getting sucked into endless shorts and distracting recommendations.`,
  imageSrc: null,
  imageAlt: null,
};

export const FEATURES = [
  {
    title: `Personal Collection`,
    description: `Save videos to your private collection for easy access anytime. Like recording your favorite shows, you'll never lose track of that tutorial or documentary again.`,
    iconComponent: VideoCollectionIcon,
    iconProps: { size: 32 },
  },
  {
    title: `Distraction-Free`,
    description: `Watch videos without algorithm suggestions, shorts, or other attention-grabbing distractions pulling you away from what you actually tuned in to see.`,
    iconComponent: DoNotDisturbIcon,
    iconProps: { size: 32 },
    icon: '🎯',
  },
  {
    title: `Favorites`,
    description: `Mark your top videos as favorites for instant access, like programming the number buttons on your remote for your most valued content.`,
    iconComponent: HeartFilledIcon,
    iconProps: { size: 32 },
  },
  {
    title: `Smart Categories`,
    description: `Organize videos into categories like "Learning", "Entertainment", or "Workout" – so you can have custom channels on your terms.`,
    iconComponent: LabelIcon,
    iconProps: { size: 32 },
  },

  {
    title: `Personalized Playlists`,
    description: `Create and save playlists for different moods, projects, or learning journeys – your own personalized broadcasting lineup. No more flipping through endless recommendations.`,
    iconComponent: VideoLibraryIcon,
    iconProps: { size: 32 },
  },
  {
    title: `Seamless Sync`,
    description: `Watch your collection across all your devices, like having your personal TV network wherever you go.`,
    iconComponent: DevicesIcon,
    iconProps: { size: 32 },
    icon: '🔄',
  },
];
