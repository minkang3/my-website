import objectifyImg from './assets/image_segmentation.png';
import piNasImg from './assets/pi_nas.jpg'
import ectfImg from './assets/mitre_logo.png'
import embeddedDebuggerImg from './assets/embedded_debugger_img.jpg'
import globleImg from './assets/globle_image.png'
import remoteEnableImg from './assets/remote_enable.jpg'
import ProjComp from './ProjComp';

function Projects() {

  return (
    <div>

      <ProjComp
        projectName="MITRE's eCTF Competition"
        img={ectfImg}
        desc="A cybersecurity competition with an embedded focus hosted by MITRE. Collaborated with 20+ team members over a 14 week long period to build a secure design, then expose it to attack from more than 100 other schools while attacking other school' designs. One of the most fun experiences I've had."
      />

      <ProjComp 
        projectName="Embedded Debugger"
        img={embeddedDebuggerImg}
        desc="Uses ARM's Single Wire Debug (SWD) protocl to implement a debugger for ARM microcontrollers. Has the ability to single step, read/set memory values, and dump flash"
      />

      <ProjComp 
        projectName="Objectify - CV"
        img={objectifyImg}
        desc="My senior capstone project: Objectify. A computer vision model created using transfer learning using ResNET convolutional layers in a U-Net architecture for improved image segmentation performance while still having the training of a large model like ResNET. Built to be used in a drone competition."
      />

      <ProjComp
        projectName="Globle - An exploration game"
        img={globleImg}
        desc="My team's submission for the 2022 LA Hacks Hackathon. Globle is a game spun on the daily nature of the popular game, 'Wordle', where rather than a daily word, we propose a daily geolocation, shared within a certain distance. The game promotes exercise and community in a world where these are much needed."
      />

      <ProjComp 
        projectName="Personal Raspberry PI NAS"
        img={piNasImg}
        desc="I had a raspberry PI and a HDD being unused until I realized I could use them together. I created a Network Attached Storage (NAS) so that I can access files remotely from any location, essentially creating my own google drive."
      />

      <ProjComp
        projectName="Remote Desktop Enable with PICO W"
        img={remoteEnableImg}
        desc="A very simple project but one I am proud of nonetheless. To be able to use my Desktop remotely anywhere without leaving it on all the time, I created a mini home-server hosted on a 6 dollar Raspberry PI PICO W to turn on my Desktop on demand."
      />

    </div>
  );
}

export default Projects;
