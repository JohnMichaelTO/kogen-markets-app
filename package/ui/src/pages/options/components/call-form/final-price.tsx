import { Tooltip, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Fragment, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { openOrderFormState } from "../../../../state/kogen";
import { getCollateralSize } from "../../../../lib/token";
import { ORDER_TYPES } from "../../../../types/types";
import useGetPosition from "../../../../hooks/use-get-position";
import { Config } from "../../../../codegen/KogenMarkets.types";

export default function PriceAndCollateral({ config }: { config: Config }) {
  const formState = useRecoilValue(openOrderFormState);

  const { positionInUserRelativeToTheType } = useGetPosition();

  const collateral = useMemo(() => {
    return getCollateralSize(
      formState.type,
      config,
      formState.optionSize,
      formState.optionPrice,
      positionInUserRelativeToTheType,
    );
  }, [formState, config, positionInUserRelativeToTheType]);

  const isBid = useMemo(() => formState.type === ORDER_TYPES.BID, [formState]);

  return (
    <Fragment>
      <Typography
        variant="body1"
        sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
      >
        You need to deposit {collateral?.amount?.toPrecision(4)}{" "}
        {collateral?.symbol}
        {isBid && (
          <Tooltip
            enterTouchDelay={0}
            title={
              <Fragment>
                {collateral?.optionAmount && (
                  <Typography
                    variant="caption"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 2,
                    }}
                  >
                    <span>Option price:</span>
                    <span>
                      {collateral.optionAmount.toFixed(2)} {collateral?.symbol}
                    </span>
                  </Typography>
                )}{" "}
                <Typography
                  variant="caption"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <span>Strike price collateral: </span>
                  <span>
                    {collateral?.strikeAmount.toFixed(2)} {collateral?.symbol}
                  </span>
                </Typography>
                {collateral?.closingSize.gt(0) && (
                  <Typography
                    variant="caption"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 2,
                    }}
                  >
                    <span>Closing {isBid ? "ask" : "bid"} position: </span>
                    <span>{collateral?.closingSize.toFixed(3)}</span>
                  </Typography>
                )}
              </Fragment>
            }
          >
            <HelpOutlineIcon fontSize="small" />
          </Tooltip>
        )}
      </Typography>
    </Fragment>
  );
}
