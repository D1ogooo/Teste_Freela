import styled from "styled-components";

export const InternalLeftForm = styled.div`
 display: flex;
 flex-direction: column;
 width: 50%;
 font-family: 'Poppins';

 input {
  height: 50px;
  margin-top: .625rem;
 }

 label {
    margin-top: .625rem;
 }
 
 ::placeholder {
  padding-left: .3125rem;
 }

 textarea {
  margin-top: 1.25rem;
  width: 100%;
 }
`

export const InternalRightForm = styled.div`
 display: flex;
 width: 50%;
 flex-direction: column;
 font-family: 'Poppins';

 input {
  height: 3.125rem;
  margin-top: .625rem;
 }

 label {
  margin-top: .625rem;
 }

 ::placeholder {
  padding-left: .3125rem;
 }
`

export const PrincipalForm = styled.form`
.submit_content {
    
    text-align: end;
    margin-top: 1.875rem;
    margin-bottom: 2.5rem;
    input {
        border-radius: .625rem;
        border: none;
        cursor: pointer;
        width: 6.25rem;
        height: 2.5rem;
        font-size: 1.1875rem;
        font-weight: 600;
        font-family: 'Poppins';
        color: #fff;
        background-color: #94269ee5;
    }
}

.submit_second_content {
   display: flex;
   flex-direction: column;
   align-items: center;
   font-size: 1.5rem;
   
   position: relative;
   top: -13.75rem;
   z-index: -1;

   :nth-child(1) {
    display: flex;
    justify-content: center;
    background-color: #fff;
    border: solid .0625rem #00000048;
    color: #94269ee5;
    width: 2.5625rem;
    height: 2.5rem;
    font-size: 1.6375rem;
    
    border-radius: 209%;
    cursor: pointer;
    margin-bottom: 1.25rem;
    font-family: 'Poppins';
   }
   :nth-child(2) {
    p {
     font-family: "Poppins";
     color: #242424cc;
     font-weight: 400;
     font-size: 1.25rem;
     width: 38.0625rem;
     border: none;
     text-align: center;
    }
   }
}

font-family: 'Poppins';
 textarea {
  margin-top: 5px;
  resize: none;
  width: 100%;
  height: auto;
  font-size: 1rem;
  padding: .3125rem;
 }
 `

export const Form = styled.div`
 display: flex;
 gap: 10px;
 margin-bottom: 10px;

 h1 {
  font-family: 'Poppins';
 }
`

export const ExternalCardImages = styled.div`
 margin-top: 5.25rem;
`

export const FirstExternalCard = styled.div`
 display: flex;
 align-items: end;
 justify-content: space-between;
`

export const LeftExternalCard = styled.section`
 font-family: "Poppins";
 p {
  color: #242424cc;
  font-weight: 400;
 }
`

export const RightExternalCard = styled.section`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 2.25rem;
 height: 2.1875rem;
 border-radius: 209%;
 color: #fff;
 cursor: pointer;
 background-color: #a30ea3;
`

export const CardImagens = styled.div`
 width: 100%;
 display: flex;
 flex-wrap: wrap;
`

export const Card = styled.section`
  margin-top: 1.25rem;
  margin: .625rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;
  border: solid .25rem #940994d3;
  border-radius: .3125rem;
  padding: .3125rem;
  
  .principal_image {
  z-index: 0;
  width: 13.75rem;
  height: 10rem;
  margin-top: 1.25rem;
  background-color: #fff;
 }
 
 .delete__card {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 2.5rem;
  height: 2.375rem;
  border-radius: 209%;
  background-color: orange;  
  
 }

 .delete_icon {
  margin-left: -0.5rem;
  width: 1.5625rem;
  height: 1.5625rem;
 }
`
