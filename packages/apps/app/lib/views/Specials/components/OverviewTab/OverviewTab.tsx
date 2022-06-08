import { FC } from "react";

import { 
    Container,
    Col,
    Row,
    Input,
    Textarea
} from "./OverviewTab.styles";
import { OverviewTabProps } from "./OverviewTab.d";

export const OverviewTab: FC<OverviewTabProps> = ({ special }) => {
    return (
        <Container>
            <Col>
                <Row>
                    <div>S #</div>
                    <Input value={special?.id}/>
                </Row>
                <Row>
                    <div>Title</div>
                    <Input value={special?.title} />
                </Row>
            </Col>
            <Row>
                <div>Description</div>
                <Textarea value={special?.description} rows={12} />
            </Row>
        </Container>
    );
};

export default OverviewTab;