"use client";

import { createTheme } from "@mantine/core";
import Link from "next/link";

export const theme = createTheme({
  /* Put your mantine theme override here */
  components: {
    Anchor: {
      defaultProps: {
        component: Link,
      },
    },
  },
});
