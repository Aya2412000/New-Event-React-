import { Header, Span, Text, Venue, VenueContent, VenueWrapper } from './style';
export default function VenueComponent(){
    return(
        <>
            <VenueWrapper>
                <div className='container'>
                    <VenueContent>
                        <div style={{width:"50%"}}>
                            <Venue>Venue</Venue>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem itaque consectetur aspernatur quas Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem itaque consectetur aspernatur quas  </Text>
                       
                        <Header>
                        <Span>New Event</Span>
                        <Span>120 Market street , Suite 110</Span>
                        <Span>San Francisco , CA 10110</Span>
                        <Span>Tle:010-020-0120</Span>
                        </Header>
                        </div>
                    </VenueContent>
                </div>
            </VenueWrapper>
                        </>
                        )}