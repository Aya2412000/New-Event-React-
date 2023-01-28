import OverviewComponent from '../../../../design-system/components/Overview/OverviewComponent';
import overviewData from "../../../../design-system/components/Overview/OverviewDate";
import { OverviewContainer, OverviewWrapper } from "./style";


export default function OverView() {
  return (
    <>
    <OverviewWrapper>
      <div className="container">
        <OverviewContainer>
        {overviewData.map(item =>{
            return(
            <OverviewComponent icon={item.icon} title={item.title} description={item.description} key={item.id}/>
            )})}
        </OverviewContainer>
      </div>
    </OverviewWrapper>
    </>
  )
}
