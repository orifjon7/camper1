import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import rasm1 from './modal rasm/Group 2197.svg'
import rasm2 from './modal rasm/Group 2198-2.svg'
import rasm3 from './modal rasm/Group 2199-2.svg'
import rasm4 from './modal rasm/Group 2200.svg'
import rasm5 from './modal rasm/Group 2197-2.svg'
import rasm6 from './modal rasm/Group 2198-3.svg'
import rasm7 from './modal rasm/Group 2199.svg'
import rasm8 from './modal rasm/Group 2200-2.svg'
import {YoutubeCar} from './Motor/style'
import {YoutubeCarText} from './Motor/style'
import line from './modal rasm/Line 2.svg'
import image1 from './modal rasm/Rectangle 14-3.svg'
import image2 from './modal rasm/Rectangle 16-3.svg'
import image3 from './modal rasm/Rectangle 17-3.svg'
import image4 from './modal rasm/Rectangle 18.svg'
import image5 from './modal rasm/Rectangle 19.svg'
import image6 from './modal rasm/Rectangle 20.svg'
import {YoutubeImage} from './Motor/style'
import {CamperWrapper} from './Motor/style'
import { Typography } from '@mui/material';

const style = { 
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
 borderRadius:'15px',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};
const style1 = {
  marginBottom:'10px',marginTop:'-25px'
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  
  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const [open5, setOpen5] = React.useState(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);

  const [open6, setOpen6] = React.useState(false);
  const handleOpen6 = () => setOpen6(true);
  const handleClose6 = () => setOpen6(false);

  const [open7, setOpen7] = React.useState(false);
  const handleOpen7 = () => setOpen7(true);
  const handleClose7 = () => setOpen7(false);
  return (
    <>
   <YoutubeCarText> <p>Videos</p>
   <img src={line} alt="line" /> </YoutubeCarText>
    <YoutubeCar>
      <Button onClick={handleOpen}>
        <img src={rasm1} alt="rasm1" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={style1} id="modal-modal-title">
            <h2>Caravan Car</h2></Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9NpSU-j6eV8?si=NpHih4kWiPlfrI--" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
      <Button onClick={handleOpen1}>
        <img src={rasm2} alt="rasm2" />
      </Button>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography sx={style1} id="modal-modal-title"  >
        <h2> Caravan</h2></Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/N5SSWumNAp8?si=5f1hXmOJZ1o0jfbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
      <Button onClick={handleOpen2}>
        <img src={rasm3} alt="rasm3" />
      </Button>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography sx={style1} id="modal-modal-title"  >
        <h2> Caravan </h2></Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kS5Scl--pSs?si=ACZ5NM9kJuH3rN9t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
      <Button onClick={handleOpen3}>
        <img src={rasm4} alt="rasm4" />
      </Button>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography sx={style1} id="modal-modal-title"  >
        <h2> Caravan </h2></Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mC8duqod7a4?si=bByyTXatZmOEGnUy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
      <Button onClick={handleOpen4}>
        <img src={rasm5} alt="rasm5" />
      </Button>
      <Modal
        open={open4}
        onClose={handleClose4}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography sx={style1} id="modal-modal-title">
        <h2>Caravan Car</h2></Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/R56Py5YeFQ8?si=CQzWhgMPePi5J46M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
      <Button onClick={handleOpen5}>
        <img src={rasm6} alt="rasm6" />
      </Button>
      <Modal
        open={open5}
        onClose={handleClose5}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography sx={style1} id="modal-modal-title">
        <h2>Caravan Car</h2></Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Lb0XAKeVM1s?si=I10yIt3uvhji50qT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
      <Button onClick={handleOpen6}>
        <img src={rasm7} alt="rasm7" />
      </Button>
      <Modal
        open={open6}
        onClose={handleClose6}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography sx={style1} id="modal-modal-title">
        <h2>Caravan Car</h2></Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MO_komj2C1E?si=Z49AjHt9TW4dzoMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
      <Button onClick={handleOpen7}>
        <img src={rasm8} alt="rasm8" />
      </Button>
      <Modal
        open={open7}
        onClose={handleClose7}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography sx={style1} id="modal-modal-title">
        <h2>Caravan Car</h2></Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gMWjPmD3tUo?si=GHDu_puMt3k7nLAy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
    </YoutubeCar >
    <YoutubeCarText> <p>Blogs</p>
    <img src={line} alt="line" /> </YoutubeCarText>
    <CamperWrapper>
      <div>
        <h1>Camper</h1>
        <h5>@camper_1</h5>
        <p>Camping truly is for everyone, from your oldest <br />family member to little campers just trekking <br /> out for the first time. Whether your plan is to <br />relax, explore or reconnect, CAMPER  <br />campgrounds are a great place to create <br />memories with those you love.</p>
      </div>
      <YoutubeImage>
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
        <img src={image4} alt="image4" />
        <img src={image5} alt="image5" />
        <img src={image6} alt="image6" />
      </YoutubeImage>
    </CamperWrapper>
    </>
  );
}
