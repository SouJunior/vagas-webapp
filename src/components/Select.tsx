import styled from "styled-components";

export const SelectWrapper = styled.select`
   height: 50px;
   width: 535px;
   border: 1px solid #E8E8E8;
   border-radius: 6px;
`;

export default function Select(){
   return(
   <SelectWrapper>
            <option disabled>- Selecione aqui -</option>
            <option value="Estágio">Estágio</option>
            <option value="Júnior">Júnior</option>
            <option value="Trainee">Trainee</option>
   </SelectWrapper>
   );
}