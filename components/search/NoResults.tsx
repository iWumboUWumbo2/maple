import styled from "styled-components"
import { Image } from "../bootstrap"

const Container = styled.div`
  background-color: white;
  border-radius: 6px;
  padding: 3rem 1.5rem 3rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 6rem;
  }
`

export const NoResults = () => {
  return (
    <Container>
      <Image src="no-results.png" alt="No results" />
      <div className="fs-3">Looks Pretty Empty Here</div>
      <div>
        Your search has yielded zero results! <b>Try another search term</b>
      </div>
    </Container>
  )
}