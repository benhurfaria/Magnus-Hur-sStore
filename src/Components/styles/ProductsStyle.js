import styled from 'styled-components';

const ProductsContainer = styled.div`
  width: 90vw;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  span {
    color: #808080;
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    justify-content: space-between;
  }
`;

const Card = styled.div`
  width: ${(props) => (props.type === 'all' ? '42vw' : '90vw')};
  background-color: #ffffff;

  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgba(227, 151, 116, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

    margin: ${(props) => (props.type === "all" ? "" : "140px auto 0")};
    margin-bottom: 20px;

    padding: 10px;

    cursor: pointer;

    @media (min-width: 1100px) {
        width: ${(props) => (props.type === "all" ? "20vw" : "40vw")};

        margin-right: ${(props) => (props.type === "all" ? "20px" : "")};
        margin-left: ${(props) => (props.type === "all" ? "" : "20px")};
    }
`;

const Image = styled.img`
    width: ${(props) => (props.type === "all" ? "30vw" : "80vw")};
    height: ${(props) => (props.type === "all" ? "30vw" : "80vw")};

    border-radius: 10px;
    border: 2px solid #326273;

    object-fit: cover;
    margin-bottom: ${(props) => (props.type === "all" ? "10px" : "20px")};
    margin-top: ${(props) => (props.type === "all" ? "" : "20px")};

    @media (min-width: 1100px) {
        width: ${(props) => (props.type === "all" ? "15vw" : "30vw")};
        height: ${(props) => (props.type === "all" ? "15vw" : "30vw")};
    }
`;

// const ProductName = styled.h3`
//     width: 30vw;
//     height: 37px;
//     color: #283d3b;
    
//   padding: 10px;

//   @media (min-width: 1100px) {
//     width: 20vw;

//     margin-right: 20px;
//   }
// `;

const ProductName = styled.h3`
  width: 30vw;
  color: #283d3b;

  font-size: 20px;
  text-align: left;

  margin-bottom: 10px;
  overflow: hidden;

  @media (min-width: 1100px) {
    width: 15vw;
  }
`;

const Price = styled.h3`
    width: 30vw;
    color: #772e25;

    font-size: 18px;
    text-align: left;

  margin-bottom: 10px;
  overflow: hidden;

  @media (min-width: 1100px) {
    width: 15vw;
  }
`;

const Description = styled.div`
  width: 90vw;
  height: 35vw;

    color: #283d3b;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  span {
    font-size: 40px;

    margin-bottom: 30px;
  }

  li {
    font-size: 26px;
  }

  @media (max-width: 1100px) {
    height: auto;
  }

  @media (min-width: 1100px) {
    width: 50vw;

    margin: 140px 0 0 100px;
  }
`;

const CardInfo = styled.div`
  width: 90vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Quant = styled.h2`
  font-size: 26px;
  margin-bottom: 20px;

  span {
    font-size: 30px;
  }
`;

const QuantModify = styled.span`
    color: ${(props) => (props.color === "red" ? "#C44536" : "#197278")};
    cursor: pointer;
`;

export {
    ProductsContainer,
    Card,
    Image,
    ProductName,
    Price,
    Description,
    CardInfo,
    Quant,
    QuantModify,
};
