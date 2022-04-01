import styled from "styled-components";

export const HeaderImage = styled.img`
  margin: 30px 20px;
  width: 300px;
  height: 200px;
`;

export const InfoDiv = styled.div`
  padding: 10px 20px;
  width: 600px;
`;
export const ExtraInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
`;

export const OfferHeaderDiv = styled.div`
  padding: 30px 30px;
  height: 100px;
  width: 300px;
  border: 2px solid white;
  margin-top: 50px;
  padding: 30px 50px 50px 50px;
`;

export const ItemTypeDiv = styled.ul`
  display: flex;
  flex-direction: column;
  width: 300px;
  text-align: right;
  margin: 30px 20px;
`;

export const ItemTypeList = styled.li`
  font-size: 16px;
  font-weight: bold;
  color: ${({ isActive }) => (isActive ? "orange" : "initial")};
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;

export const SelectedItemHeading = styled.h2`
  padding: 20px 135px;
`;

export const ItemDisplayDiv = styled.div`
  width: 620px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  border-bottom: 1px solid;
  margin-left: 50px;
`;

export const CartDisplayDiv = styled.div`
  width: 300px;
  height: auto;
  padding: 20px 70px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
`;

export const ItemDesc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Minus = styled.button`
  color: grey;
  margin-left: 20px;
`;

export const Plus = styled.button`
  color: green;
  margin-right: 20px;
`;

export const One = styled.button`
  color: green;
`;

export const AddBtn = styled.button`
  margin-top: -15px;
  width: 50px;
  margin-left: 80px;
  color: green;
`;

export const ItemImg = styled.img`
  width: 120px;
  height: 100px;
  padding-left: 50px;
  /* margin-top: 20px; */
`;

export const CustomP = styled.p`
  padding-left: 75px;
  font-size: 12px;
  /* text-align: center; */
`;

export const Checkout = styled.button`
  background-color: green;
  color: white;
  height: 50px;
  width: 300px;
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
