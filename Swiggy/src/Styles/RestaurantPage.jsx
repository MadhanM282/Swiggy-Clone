import styled from "styled-components";

export const HeaderImage = styled.img`
  margin: 30px 50px;
  margin-left: 100px;
  width: 250px;
  height: 150px;
`;

export const InfoDiv = styled.div`
  padding-top: 10px;
  width: 550px;
`;
export const ExtraInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -40px;

  /* justify-content: space-evenly; */
`;

export const OfferHeaderDiv = styled.div`
  height: 160px;
  width: 360px;
  padding: 6px 50px 50px 50px;
  box-sizing: border-box;
`;

export const OfferHeading = styled.div`
  z-index: 100;
  background: #171a29;
  width: fit-content;
  position: relative;
  padding: 5px 8px 2px 6px;
`;

export const OfferDiscription = styled.div`
  border: 1px solid white;
  margin: -26px 0px 0px 10px;
  padding: 29px 20px 10px 26px;
`;

export const IconDiv = styled.div`
  display: flex;
  height: 20px;
`;

export const ItemTypeDiv = styled.ul`
  display: flex;
  flex-direction: column;
  width: 280px;
  text-align: right;
  margin: 50px 20px 50px 80px;
  padding-right: 40px;
  border-right: 1px solid gray;
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
  width: 680px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  border-bottom: 1px solid;
  /* margin-left: 50px; */
  /* overflow: scroll; */
`;

export const CartDisplayDiv = styled.div`
  width: 400px;
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
  width: 30px;
  height: 30px;
  margin-left: 20px;
  /* border: none; */
`;

export const Plus = styled.button`
  color: green;
  margin-right: 20px;
  width: 30px;
  height: 30px;
  /* border: none; */
`;

export const Quantity = styled.button`
  color: green;
  width: 30px;
  height: 30px;
  /* border: none; */
`;

export const AddBtn = styled.button`
  margin-top: -15px;
  width: 100px;
  margin-left: 65px;
  padding: 3px;
  color: green;
  background-color: white;
  border: 1px solid grey;
`;

export const IconImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const ItemImg = styled.img`
  width: 180px;
  height: 100px;
  padding-left: 50px;
  /* margin-top: 20px; */
`;

export const CustomP = styled.p`
  padding-left: 75px;
  font-size: 12px;
`;

export const Checkout = styled.button`
  background-color: rgb(96, 178, 70);
  color: white;
  height: 50px;
  width: 300px;
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
