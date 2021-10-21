import abeille from '../../assets/TrollImg/abeille.png'
import chetiflor from '../../assets/TrollImg/chetiflor.png'
import gary from '../../assets/TrollImg/gary.png'
import magicarpe from '../../assets/TrollImg/magicarpe.png'
import voltorbe from '../../assets/TrollImg/voltorbe.png'
import sacha from '../../assets/TrollImg/sacha.png'
import pika from '../../assets/TrollImg/pikaah.png'
import spectrum from '../../assets/TrollImg/spectrum.png'
import racaillou from '../../assets/TrollImg/racaillou.png'
import ferosinge from '../../assets/TrollImg/ferosinge.png'
import bulbi from '../../assets/TrollImg/pngaaa.com-280052.png'
import pikabu from '../../assets/TrollImg/pikabu (1).png'

import './Troll.css'

const Troll = () => {
    const spectrumPos = document.getElementById("spectrum");

    document.body.onclick = (e) => {
        spectrumPos.style.setProperty("--posX", e.pageX + "px");
        spectrumPos.style.setProperty("--posY", e.pageY + "px");
        spectrumPos.classList.add("appear-animation");
        setTimeout(() => {
            spectrumPos.classList.remove("appear-animation");    
        }, 200);
    }

    return (  
        <div>
            <img src={abeille} alt='' />
            <img src={chetiflor} alt='' />
            <img src={magicarpe} alt='' />
            <img src={gary} alt='' />
            <img src={voltorbe} alt='' />
            <img src={sacha} alt='' />
            <img src={pika} alt='' />
            <img src={pika} alt='' />
            <img src={sacha} alt='' className='sachaa'/>
            <img src={racaillou} alt='' />
            <img src={bulbi} alt='' />
            <img id="spectrum" src={spectrum} alt='' className="spectrum" />
            <img src={ferosinge} alt='' className='fero'/>
            <div>            
            <img src={pikabu} alt='' className='pikatroll'/>
            </div>
        </div>
        );
    }
    
export default Troll;