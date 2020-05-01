import { useContext } from 'react';
import SettingsContext from 'src/context/SettingsContext';

export default function useSettings() {
  const context = useContext(SettingsContext);

  return context;
}
