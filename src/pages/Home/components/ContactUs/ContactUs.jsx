import { ContactUsButton, ContactUsContent, ContactUsInput, ContactUsWrapper, Content, Event, FormContactUs, Keep, New, Send, Text, Touch } from './style';
export default function ContactUs(){
    return(
        <>
            <ContactUsWrapper>
                <div className='container'>
                    <ContactUsContent>
                        <div style={{width:"45%"}}>
                            <New>New <Event>Event</Event></New>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem itaque consectetur aspernatur quasVeritatis voluptatem itaque consectetur aspernatur quasLorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem itaque consectetur aspernatur quasLorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem itaque consectetur aspernatur quas
                            </Text>
                            <div >
                            <ContactUsButton>DownLoad Now</ContactUsButton>
                            </div>
                            
                        </div>
                        <div style={{width:"50%"}}> 
                        <FormContactUs>
                            <Content><Keep>Keep In <Touch>Touch</Touch></Keep>
                            </Content>
                        
                            <ContactUsInput type="text" placeholder="Name"/>
                            <ContactUsInput type="email" placeholder="Email"/>
                            <ContactUsInput type="text-area" placeholder="Massage"/>
                            <Send>Send</Send>
                        </FormContactUs>
                        </div>
                    </ContactUsContent>
                        
                </div>
            </ContactUsWrapper>
        </>
    )
}