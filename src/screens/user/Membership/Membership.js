import React from 'react'
import { Wrapper } from 'src/style/Wrapper'
import { HorizontalLine2 } from '../MyProfile/ProfileComponent'
import { Heading, Heading2 } from "src/style/Heading";
import { Container } from "src/style/Container";
import { P2, H5, H3,P3 } from 'src/components';
import { Description ,Box} from "../Dashboard/DasboardComponent";
import Circle from "../../../assets/icons/Circle.png";

const Membership = () => {
    return (
        <Wrapper>
            <Heading>Membership</Heading>
            <HorizontalLine2 />
            <Container>
                <Heading2>
                    Your Plan
                </Heading2>
                <P2 style={{ color: "#999999", paddingBottom: "50px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
                    facere in impedit ex ipsum dolorum consectetur quo praesentium
                    ratione? Excepturi temporibus culpa cupiditate. Vero similique
                    repudiandae eius blanditiis, a optio.
                </P2>
                <HorizontalLine2 />
                <Description>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "1rem",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <H5> Monthly</H5>
                            <H3 style={{ maxwidth: "228px", minWidth: "150px" }}>
                                20$/
                                <span style={{ fontSize: "14px" }}>
                                    month
                                </span>
                            </H3>
                        </div>
                    </div>

                    <P2 style={{ minwidth: "300px", maxWidth: "650px" }}>
                        Lorem ipsum dc in tellus id eu. Porttitor egestas viverra
                        ultricies tincidunt nulla in nisl eget. Magna integer platea dolor
                        risus porttitor blandit rhoncus tortor iaculis. Ultricies r id
                        risus lacus accumsan arcu ultrices varius.
                    </P2>
                </Description>
                <HorizontalLine2 />

                <Description>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "1rem",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <H5> Annually</H5>
                            <H3 style={{ maxwidth: "228px", minWidth: "150px" }}>
                                8.30$/
                                <span style={{ fontSize: "14px" }}>
                                    month billed annually
                                </span>
                            </H3>
                        </div>
                    </div>

                    <P2 style={{ minwidth: "300px", maxWidth: "650px" }}>
                        Lorem ipsum dc in tellus id eu. Porttitor egestas viverra
                        ultricies tincidunt nulla in nisl eget. Magna integer platea dolor
                        risus porttitor blandit rhoncus tortor iaculis. Ultricies r id
                        risus lacus accumsan arcu ultrices varius.
                    </P2>
                </Description>
                <HorizontalLine2 />
                <Box>

                    <img src={Circle} alt="" style={{ width: "15px", height: "15px" }} />
                    <P3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus, sint dolorum fuga dolores inventore, iusto aperiam vero consectetur, id sunt? Adipisci, laborum. Commodi accusamus, repellendus magnam consequatur cupiditate corrupti.
                    </P3>
                </Box>
            </Container>
        </Wrapper>
    )
}

export default Membership
