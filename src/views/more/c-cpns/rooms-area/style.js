import styled from 'styled-components'

const RoomsWrapper = styled.div`
  margin: 0 24px;
  h2{
      color: ${props => props.theme.text.secondaryColor};
      margin: 0;
      height: 34px;
      line-height: 34px;
  }
  .roomList{
    display: flex;
    flex-wrap: wrap;
    .item{
      width: 20%;
    }
  }
`

export default RoomsWrapper