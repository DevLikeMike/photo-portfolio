import styled from "styled-components";
import Link from "next/link";

const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  /* Background for Index Page */
  background: url("/bg_3.jpg");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #333;

  .hero__content {
    height: 70%;
    font-family: "Courier New", monospace;
    gap: 2rem;
    color: #000;
    letter-spacing: 0.15em;

    h1 {
      font-size: 2rem;
    }

    ul {
      gap: 1rem;
      font-size: 1.5rem;

      li:nth-child(1):after,
      li:nth-child(2):after {
        content: "|";
        margin-left: 1rem;
      }
    }
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <div className='hero__content flex flex-center col'>
        <h1>Jacksonville | Photographer</h1>
        <ul className='flex jc-c'>
          <li>
            <Link href='/street'>
              <a>Street</a>
            </Link>
          </li>
          <li>
            <Link href='/Landscapes'>
              <a>Landscapes</a>
            </Link>
          </li>
          <li>
            <Link href='/Weddings'>
              <a>Weddings</a>
            </Link>
          </li>
        </ul>
      </div>
    </HeroContainer>
  );
}
