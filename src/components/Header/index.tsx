import { Paper, styled, Typography } from "@mui/material";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import { createHeaderWrapperStyles } from "./header.styles";

const HeaderWrapper = styled(Paper)(createHeaderWrapperStyles);

const Header = () => {
  return (
    <HeaderWrapper>
      <Typography
        style={{ marginRight: 20, marginLeft: 20 }}
        fontWeight="bold"
        variant="h6"
      >
        Currency exchange app
      </Typography>

      <CurrencyExchangeRoundedIcon />
    </HeaderWrapper>
  );
};

export default Header;
