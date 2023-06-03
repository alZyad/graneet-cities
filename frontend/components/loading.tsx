import { colors } from "@/utils/colors";
import React from "react";
import { Grid } from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <Grid color={colors.loading} />
    </>
  );
}
