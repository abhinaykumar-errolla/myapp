import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  background-image: url(https://res.cloudinary.com/dj6c4lrt9/image/upload/v1704461204/yellow-bg_ukbmfy.png);
  background-size: ConvolverNode;
  height: 360px;
  width: 360px;
`;

export const DescriptionContainer = styled.div`
  padding: 40px;
  width: 40%;
`;

export const Name = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  color: #333333;
  text-align: left;
  letter-spacing: 0em;
`;

export const Role = styled.p`
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  color: #fdc435;
  text-align: left;
  line-height: 26px;
  letter-spacing: 0em;
`;

export const Description = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  color: #828282;
  text-align: left;
  line-height: 36px;
  letter-spacing: 0em;
`;

export const AboutBtn = styled.button`
  width: 115px;
  height: 43px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  color: #25282b;
  text-align: left;
  line-height: 27px;
  letter-spacing: 0em;
  padding: 8px, 24px, 8px, 24px;
  border-radius: 8px;
  border: ${(props) => (props.outline ? "none" : "1px solid #25282B")};
  margin-right: 8px;
`;

export const ImgGirl = styled.img`
  height: 60%;
  width: 60%;
  margin-top: 75px;
  margin-left: 95px;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 50%;
  align-self: center;
`;

export const FormHeading = styled.h2`
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  color: #25282b;
  text-align: center;
  letter-spacing: 0em;
`;

export const HorizontalLine = styled.hr`
  height: 2px;
  width: 26%;
  background-color: #fdc435;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 5px;
`;

export const InputElement = styled.input`
  height: 30px;
  width: 400px;
  border: 1.5px solid #e8ecf4;
  margin-top: 6px;
  border-radius: 8px;
`;

export const LabelInput = styled.label`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 600;
  color: #25282b;
  text-align: left;
  line-height: 22px;
  letter-spacing: 0em;
`;

export const TextAreaElement = styled.textarea`
  height: 160px;
  width: 400px;
  border: 1.5px solid #e8ecf4;
  border-radius: 8px;
`;

export const AddBtn = styled.button`
  width: 45px;
  height: 45px;
  background-color: #fdc435;
  margin-top: 5px;
  margin-bottom: 4px;
  margin-left: 320px;
  line-height: 2;
  border-width: 0px;
`;

export const FooterImg = styled.img`
  width: 100%;
  margin-top: 230px;
`;
