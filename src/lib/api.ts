import type { StrategApiURL, VoivodeshipID } from '~/types/api';

export const voivodeships: Record<VoivodeshipID, string> = {
  '100200000000': 'Dolnośląskie',
  '100400000000': 'Kujawsko-pomorskie',
  '100600000000': 'Lubelskie',
  '100800000000': 'Lubuskie',
  '101000000000': 'Łódzkie',
  '101200000000': 'Małopolskie',
  '101400000000': 'Mazowieckie',
  '101600000000': 'Opolskie',
  '101800000000': 'Podkarpackie',
  '102000000000': 'Podlaskie',
  '102200000000': 'Pomorskie',
  '102400000000': 'Śląskie',
  '102600000000': 'Świętokrzyskie',
  '102800000000': 'Warmińsko-mazurskie',
  '103000000000': 'Wielkopolskie',
  '103200000000': 'Zachodniopomorskie',
} as const;

export const getStrategApiUrl = (
  indicator: number,
  dimension: number
): StrategApiURL =>
  `https://strateg.stat.gov.pl/api/indicators/${indicator}/dimensions/${dimension}?level_id=2`;

export const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.STRATEG_API_KEY ?? '',
    },
  }).then((response) => response.json());
