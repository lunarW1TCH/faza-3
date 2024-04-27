import type { Numeric } from '.';

export type VoivodeshipID =
  | '100200000000'
  | '100400000000'
  | '100600000000'
  | '100800000000'
  | '101000000000'
  | '101200000000'
  | '101400000000'
  | '101600000000'
  | '101800000000'
  | '102000000000'
  | '102200000000'
  | '102400000000'
  | '102600000000'
  | '102800000000'
  | '103000000000'
  | '103200000000';

export type StrategApiURL =
  `https://strateg.stat.gov.pl/api/indicators/${number}/dimensions/${number}?level_id=2`;

export type StrategResponseBody<T> = {
  real_values: {
    [year: Numeric]: Record<VoivodeshipID, T>;
  };
};
