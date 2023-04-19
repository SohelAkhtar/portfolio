import { Button, Card, CardActions, CardContent, CardMedia, ClickAwayListener, Grid, Tooltip, Typography } from '@mui/material';
import React from 'react'
import Typewriter from 'typewriter-effect';
import '../About.css'
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

function About() {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const handleTooltipClose = () => {
      setOpen(false);
    };
    
    const handleTooltipClose1=()=>{
        setOpen1(false)
    }
  
    const handleTooltipOpen = () => {
      setOpen(true);
    };

    const handleTooltipOpen1=()=>{
        setOpen1(true)
    }

    const handleClose = () => {
      setOpen1(false);
    };
  
    const handleOpen1 = () => {
      setOpen1(true);
    };
  return (
    <div className='mid'>
        <h1>
        {/* <Typewriter
  options={{
    strings: ['To strive for excellence with dedication, positive attitude and passion toward the work that will fully utilize my information skills and best possible way for fulfillment of personal and organizational goals.'],
    autoStart: true,
    loop: true,
  }}
/> */}
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.jpg?b=1&s=170667a&w=0&k=20&c=M1zgL2pGwZ_g3cwmOvdMtzz92PlTLdihv6_wgaW1QZc="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ABOUT
        </Typography>
        <Typography variant="body2" color="text.secondary">
        To strive for excellence with dedication, positive attitude and passion toward the work that will fully utilize my information skills and best possible way for fulfillment of personal and organizational goals.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        {/* <Tooltip open={open1} onClose={handleClose} onOpen={handleOpen1} title="7894199496">
      <Button> <CallIcon/> CONTACT</Button>
    </Tooltip> */}
    <Grid container justifyContent="center">
       
       <Grid item>
       
       </Grid>
       <Grid item>
       
       </Grid>
       <Grid item>
         <ClickAwayListener onClickAway={handleTooltipClose1}>
           <div>
             <Tooltip
               PopperProps={{
                 disablePortal: true,
               }}
               onClose={handleTooltipClose1}
               open={open1}
               disableFocusListener
               disableHoverListener
               disableTouchListener
               title="7894199496"
             >
               <Button onClick={handleTooltipOpen1}> <CallIcon/> CONTACT</Button>
             </Tooltip>
           </div>
         </ClickAwayListener>
       </Grid>
     </Grid>
        </Button>
        <Button size="small">
        <Grid container justifyContent="center">
       
        <Grid item>
        
        </Grid>
        <Grid item>
        
        </Grid>
        <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="sohelakhtar679@gmail.com"
              >
                <Button onClick={handleTooltipOpen}> <MailIcon/> GMAIL</Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
        </Button>
      </CardActions>
    </Card>
        </h1>
    </div>
  )
}

export default About