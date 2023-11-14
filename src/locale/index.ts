import { getLocal } from '../utils';
import { enLocale, ruLocale } from './localeText';

const local = getLocal() === 'en' ? enLocale : ruLocale;

export default local;
