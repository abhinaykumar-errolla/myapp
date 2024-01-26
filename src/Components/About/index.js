import React from "react"
import { Components } from "react";
import {
  AboutBtn,
  AboutContainer,
  AddBtn,
  Container,
  Description,
  DescriptionContainer,
  FooterImg,
  FormContainer,
  FormHeading,
  HorizontalLine,
  ImageContainer,
  ImgGirl,
  InputContainer,
  InputElement,
  LabelInput,
  Name,
  Role,
  TextAreaElement,
} from "./styledComponents";
class About extends Components {
  state = { projectName: "", projectLink: "", description: "" };
  render() {
    return (
      <Container>
        <AboutContainer>
          <DescriptionContainer>
            <Role>UI/UX DESIGNER</Role>
            <Name>
              Hello, My Name <br />
              is Madelyn Troff
            </Name>
            <Description>
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page
            </Description>
            <>
              <AboutBtn type="button" outline={true}>
                Projects
              </AboutBtn>
              <AboutBtn type="button" outline={false}>
                LinkedIn
              </AboutBtn>
            </>
          </DescriptionContainer>
          <ImageContainer>
            <ImgGirl
              src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1704461145/pexels-artem-beliaikin-1832323-removebg-preview_ajodwi.png"
              alt="profile"
            />
          </ImageContainer>
        </AboutContainer>
        <FormContainer>
          <div>
            <FormHeading>Add Project</FormHeading>
            <HorizontalLine />
          </div>
          <InputContainer>
            <LabelInput htmlFor="name">Project Name</LabelInput>
            <InputElement id="name" />
          </InputContainer>
          <InputContainer>
            <LabelInput htmlFor="link">Project Link</LabelInput>
            <InputElement id="link" />
          </InputContainer>
          <InputContainer>
            <LabelInput htmlFor="description">Project Description</LabelInput>
            <TextAreaElement rows={5} cols={8} id="description" />
          </InputContainer>
          <AddBtn type="button">Add</AddBtn>
        </FormContainer>
        <div>
          <FooterImg
            src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1704475732/Vector_e1wyfl.png"
            id="footer"
          />
        </div>
      </Container>
    );
  }
}
export default About;
