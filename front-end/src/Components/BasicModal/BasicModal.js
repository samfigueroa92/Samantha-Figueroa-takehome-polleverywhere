import {useState} from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const BasicModal = ({ truncatedEmail, email }) => {
    const [anchor, setAnchor] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchor(event.currentTarget);
      };
    
    const handlePopoverClose = () => {
        setAnchor(null);
      };
    const open = Boolean(anchor);


    return(
        <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{ mb: 1.5, fontSize: 25 }}
      >
        {truncatedEmail}
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{email}</Typography>
      </Popover>
    </div>

    )};
export default BasicModal;
