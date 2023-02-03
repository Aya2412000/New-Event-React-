import { faBehance, faDribbble, faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MadBy } from "../../../../design-system/Config";
import { Content, FooterWrapper, Li, MadeBy, Ul } from './style';
export default function Footer(){
    return(
        <>
            <FooterWrapper>
                <div className="container">
                    <div>
                        <Content>Copyright &copy; 2018 Your Company | Design : </Content>
                        <MadeBy>{MadBy}</MadeBy>
                    </div>
                    <Ul>
                        <Li><FontAwesomeIcon icon={faFacebookF}/></Li>
                        <Li><FontAwesomeIcon icon={faTwitter}/></Li>
                        <Li><FontAwesomeIcon icon={faDribbble}/></Li>
                        <Li><FontAwesomeIcon icon={faBehance}/></Li>
                        <Li><FontAwesomeIcon icon={faGoogle}/></Li>
                    </Ul>
                </div>
            </FooterWrapper>
        </>
    )
}