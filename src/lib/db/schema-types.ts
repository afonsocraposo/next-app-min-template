import { sql } from "drizzle-orm";
import { customType } from "drizzle-orm/pg-core";

export const timestamp = customType<{
  data: Date;
  driverData: string;
  config: { withTimezone: boolean; precision?: number; mode?: "iso" };
}>({
  dataType(config) {
    const precision = config?.precision ? ` (${config.precision})` : "";
    return `timestamp${precision}${config?.withTimezone ? " with time zone" : ""}`;
  },
  fromDriver(value: string): Date {
    return new Date(value);
  },
});

export const createdAt = timestamp({
  withTimezone: true,
})
  .default(sql`now()`)
  .notNull();
export const updatedAt = timestamp({
  withTimezone: true,
})
  .default(sql`now()`)
  .notNull()
  .$onUpdate(() => sql`CURRENT_TIMESTAMP`);

export const timestamps = {
  createdAt,
  updatedAt,
};
