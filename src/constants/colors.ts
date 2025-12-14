export const colors = {
  background: '#F6F7FB',
  foreground: '#0F172A',
  card: {
    default: '#FFFFFF',
    foreground: '#0F172A',
  },
  popover: {
    default: '#FFFFFF',
    foreground: '#0F172A',
  },
  primary: {
    default: '#4B82F0',
    foreground: '#FFFFFF',
  },
  secondary: {
    default: '#E8EEFF',
    foreground: '#0F172A',
  },
  muted: {
    default: '#EEF2F6',
    foreground: '#6B7280',
  },
  accent: {
    default: '#58C4A7',
    foreground: '#0B3B2E',
  },
  destructive: {
    default: '#F45B69',
    foreground: '#FFFFFF',
  },
  border: '#E5E7EB',
  input: '#E5E7EB',
  ring: '#4B82F0',
  success: '#2BAE66',
  warning: '#F6C343',
  expired: '#F45B69',
  status: {
    safeBg: '#DCFCE7',
    safeText: '#15803D',
    warnBg: '#FEF3C7',
    warnText: '#B45309',
    dangerBg: '#FEE2E2',
    dangerText: '#B91C1C',
  },
  overlay: 'rgba(12, 18, 28, 0.6)',
  surfaceMuted: '#F1F4F9',
} as const;

type CapitalizeKey<K> = K extends string
  ? Capitalize<K>
  : K extends number
    ? `${K}`
    : never;

type DeepKeys<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends string
    ? `${Prefix}${CapitalizeKey<K>}`
    : T[K] extends Record<string, unknown>
      ? DeepKeys<T[K], `${Prefix}${CapitalizeKey<K>}/`>
      : never;
}[keyof T];

const capitalize = (value: string) =>
  value.length ? value[0].toUpperCase() + value.slice(1) : value;

const flattenColors = (
  obj: Record<string, unknown>,
  prefix = '',
): [string, string][] => {
  const entries: [string, string][] = [];
  for (const [key, val] of Object.entries(obj)) {
    const nextPrefix = `${prefix}${capitalize(String(key))}`;
    if (typeof val === 'string') {
      entries.push([nextPrefix, val]);
    } else if (val && typeof val === 'object') {
      entries.push(...flattenColors(val as Record<string, unknown>, `${nextPrefix}/`));
    }
  }
  return entries;
};

export const colorMap = Object.fromEntries(flattenColors(colors)) as Record<DeepKeys<typeof colors>, string>;

export type ColorToken = DeepKeys<typeof colors>;
export const colorTokens = Object.keys(colorMap) as ColorToken[];
