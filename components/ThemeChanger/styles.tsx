import { colors } from '@base-app/theme/colors';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)(() => ({
  color: colors.blue100,
  fontSize: '18px',
  padding: '5px 10px',
}));
