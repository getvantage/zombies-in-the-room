import { Link } from 'gatsby';
import styled from '@emotion/styled';

export const Container = styled.div`
  background: radial-gradient(
      198.67% 198.67% at 53.06% -50.22%,
      #13282d 53.32%,
      #296460 100%
    )
    no-repeat center center fixed;
  background-size: cover;
`;

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const OverviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  margin: 2rem;

  > div:first-of-type {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 1rem;

    p {
      font-size: 1.3rem;
      line-height: 175%;
      color: #ded9d9;
      font-family: Roboto;
      font-weight: 100;
      margin: 1rem;
    }

    div {
      display: flex;
      justify-content: center;
    }
  }

  > div:last-of-type {
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      h2 {
        font-family: 'Sigmar One';
        font-style: normal;
        font-weight: normal;
        font-size: 41px;
        line-height: 67px;
        color: #ffffff;
      }
    }

    ul {
      margin-top: 2rem;
      list-style: none;
      padding: 0;

      li {
        p {
          font-size: 1.5rem;
          font-family: Roboto;
          color: #ffffff;
          margin-top: 2rem;
          margin-bottom: 3rem;
          line-height: 2rem;
        }
        hr {
          background: rgba(255, 255, 255, 0.05);
          border: none;
          height: 5px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0;

    div {
      width: 90%;
      margin: 0 auto;
    }

    > div:last-of-type {
      > div {
        h2 {
          font-size: 29px;
        }

        svg {
          width: 56px;
          height: 56px;
        }
      }
    }
  }
`;

export const BackLink = styled(Link)`
  display: inline-block;
  color: #fff;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 23px;
  line-height: 175%;
  margin: 10px;

  > span {
    margin-left: 6px;
    margin-top: 10px;
    display: inline-block;
  }

  > svg {
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
  }
`;

export const StartLink = styled(Link)`
  margin: 0 2rem;
`;