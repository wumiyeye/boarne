import { Pairing as TPairing } from "../api/pairing/Pairing";

export const PAIRING_TITLE_FIELD = "id";

export const PairingTitle = (record: TPairing): string => {
  return record.id?.toString() || String(record.id);
};
